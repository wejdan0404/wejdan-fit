const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const {migrate,readLegacy}=require('../masari-migration.js');
const ctx={window:{}};vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.resolve(__dirname,'../masari-catalog.js'),'utf8'),ctx,{timeout:3000});
const catalog=ctx.window.MASARI_CATALOG;
assert.equal(catalog.recipeCountOriginal,89);
assert.equal(catalog.recipes.length,85);
assert.equal(catalog.exercises.length,46);
assert.deepEqual(Array.from(catalog.blockedIds),['R002','R077','R084','R103']);
assert(!catalog.recipes.some(x=>catalog.blockedIds.includes(x.id)));
assert(catalog.recipes.every(x=>Array.isArray(x.ingredients)&&x.ingredients.length&&typeof x.instructions==='string'));
assert(catalog.exercises.every(x=>x.videoStatus==='needs-clinical-review'||x.videoStatus==='unavailable'));
assert.equal(catalog.mediaPublished,false);
const legacy={days:{
 '2026-11-23':{measurements:{weightKg:79.3},foodEntries:[{id:'a1',name:'شوفان',meal:'breakfast',amount:1,kcalPerUnit:320,proteinPerUnit:20,carbsPerUnit:55,fatPerUnit:6}],fitnessDone:true,walkMinutes:17,checkIn:{sleepHours:8},waterCups:5},
 '2026-11-24':{measurements:{weightKg:78.9},foodEntries:[{id:'a2',name:'<script>alert(1)</script>',meal:'snack1',amount:1,kcalPerUnit:130}],fitnessDone:true,walkMinutes:30},
 '2026-02-31':{measurements:{weightKg:60}},
 '2026-11-25':{foodEntries:[{id:'bad',name:'Bad',amount:1,kcalPerUnit:-5}]}
}};
const current={version:1,settings:{startWeight:80,targetWeight:65,theme:'dark'},weights:[{date:'2026-11-23',kg:80}],meals:[{id:'existing',date:'2026-11-23',cal:180,name:'وجبة'}],habits:{'2026-11-23':{walk:10}},workouts:{'2026-11-23__A':{finished:true,session:'A'}}};
const old=JSON.stringify(current);
const {data,stats}=migrate(current,legacy);
assert.equal(JSON.stringify(current),old,'migration must not mutate existing data');
assert.deepEqual(data.settings,current.settings,'user preferences unchanged');
assert.equal(stats.weights,1,'existing weight preserved and new one appended');
assert.equal(data.weights.find(x=>x.date==='2026-11-23').kg,80);
assert.equal(stats.meals,2);
assert.equal(data.meals.length,3);
assert.equal(stats.workouts,2);
assert(data.workouts['2026-11-23__A']?.finished,'existing workout preserved');
assert(data.workouts['2026-11-23__MASARI']?.finished,'legacy workout distinct from A/B');
assert.equal(data.habits['2026-11-23'].walk,10,'existing steps not overwritten');
assert.equal(data.habits['2026-11-23'].sleep,8,'missing sleep filled');
assert.equal(data.meals[2].protein,null,'missing macro stays unknown');
assert(!data.meals[2].name.includes('<script>'));
assert(stats.skipped>=1,'invalid negative calories skipped');
const rerun=migrate(data,legacy);
assert.equal(rerun.stats.meals,0);
assert.equal(rerun.stats.workouts,0);
assert.equal(rerun.stats.weights,0);
assert.equal(rerun.data.meals.length,data.meals.length);
assert.throws(()=>readLegacy({meals:[]}),/ليس ملف/);
assert.throws(()=>readLegacy('{bad-json'));
console.log('PASS: 85 reviewed recipe candidates, 4 excluded allergens, 46 reference exercises; safe non-destructive, idempotent Masari import');
