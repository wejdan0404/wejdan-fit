const assert = require('node:assert/strict');
const NEXT = require('../fit-next.js');
const CORE = require('../fit-core.js');
const date = '2026-11-23';
const base={version:1,settings:{startWeight:80,targetWeight:65,trainingSets:1},weights:[{date,kg:80},{date:'2026-11-25',kg:79.7}],meals:[{id:'1',date,cal:500,protein:30,carbs:null,fat:15},{id:'2',date:'2026-11-24',cal:600,protein:40,carbs:60,fat:20}],habits:{[date]:{walk:20}},workouts:{[date+'__A']:{session:'A',finished:true,sets:{A01:[true]},setMetrics:{A01:[{reps:8,kg:.5,rpe:4}]}}},dayPlans:{},checkins:{},foodModes:{}};
const original=JSON.stringify(base);
const v=NEXT.migrateState(base);
assert.equal(JSON.stringify(base),original, 'migrations cannot mutate original');
assert.equal(v.schemaVersion,NEXT.SCHEMA_VERSION);
assert.deepEqual(v.settings.avoidExercises,[]);
assert.equal(v.weights.length,2);
assert.equal(NEXT.validateState(v).schemaVersion,NEXT.SCHEMA_VERSION);
assert.equal(NEXT.previewBackup({data:base,exportedAt:'2026-11-23T11:20:00Z'}).meta.weights,2);
assert.equal(NEXT.previewBackup(base).meta.schemaVersion,NEXT.SCHEMA_VERSION);
assert.throws(()=>NEXT.validateState({...base,schemaVersion:1000}),/version/);
assert.throws(()=>NEXT.validateState({...base,shopping:[{name:'A',done:'yes'}]}),/مشتريات/);
assert.throws(()=>NEXT.validateState({...base,measurements:[{date,waist:-20}]}),/قياسات/);
assert.throws(()=>NEXT.validateState({...base,recoveryModes:{'2026-11-23':'crazy'}}),/تعاف/);
assert.throws(()=>NEXT.validateState({...base,weights:[{date:'2026-02-30',kg:65}]}),/وزن/);
assert.throws(()=>NEXT.validateState({...base,workouts:{[date+'__A']:{session:'A',setMetrics:{A01:[{kg:101}]}}}}),/مجموعة/);
const stats=NEXT.nutritionStats(base,'2026-11-25');assert.equal(stats.loggedDays,2);assert.equal(stats.meanCalories,550);assert.equal(stats.missingDays,5);assert.equal(stats.fullMacroDays,1);
const trend=NEXT.weightTrend(base.weights);assert.equal(trend.observations,2);assert.equal(trend.average,79.85);assert.equal(NEXT.weightTrend([{date,kg:80}]).status,'insufficient');
const strength=NEXT.strengthHistory(base.workouts,'A01');assert.equal(strength.length,1);assert.equal(strength[0].reps,8);assert.equal(strength[0].kg,0.5);
const day=NEXT.dayOverview(base,date,CORE);assert.equal(day.workoutComplete,true);assert.equal(day.meals,1);assert.equal(day.walkLogged,true);
const day2=NEXT.dayOverview({...base,recoveryModes:{[date]:'rest'}},date,CORE);assert.equal(day2.plan,'rest');
const p=NEXT.recipePortion({servings:1,kcal:400,cal:400,protein:20,carbs:50,fat:10},0.5);assert.equal(p.cal,200);assert.equal(p.carbs,25);assert.equal(p.verified,false);
assert.equal(NEXT.reviewAllergens([{name:'حليب جوز الهند'}]).status,'avoid');assert.equal(NEXT.reviewAllergens(['peanut butter']).status,'avoid');assert.equal(NEXT.reviewAllergens(['زبادي']).status,'unknown');
assert.equal(NEXT.trainingGuard({avoidExercises:['A01']},null,'A01',CORE).paused,true);
assert.equal(NEXT.trainingGuard({avoidExercises:[]},{newWeakness:true},'A01',CORE).paused,true);
assert.equal(NEXT.macrosEnergy({cal:400,protein:20,carbs:50,fat:10}).fromMacros,370);
assert.equal(NEXT.macrosEnergy({cal:400,protein:null,carbs:50,fat:10}).status,'insufficient');
const restored=NEXT.validateState(v);assert.equal(restored.weights[0].kg,80);assert.equal(restored.workouts[date+'__A'].finished,true);
console.log('PASS: phase2 schema migrations, local backups, units, allergens, portions, weekly statistics, progress, exercise safety');


// V7-002 characterization: synthetic malformed-present collections are currently normalized.
// This is a documented risk, NOT an assertion that this behavior is safe or desired.
const malformedPresent={...base,meals:{unexpected:'synthetic'},weights:'synthetic-corrupt',shopping:{unexpected:true}};
const normalized=NEXT.migrateState(malformedPresent);
assert.deepEqual(normalized.meals,[], 'current migration silently drops malformed-present meals');
assert.deepEqual(normalized.weights,[], 'current migration silently drops malformed-present weights');
assert.deepEqual(normalized.shopping,[], 'current migration silently drops malformed-present shopping');
assert.equal(NEXT.validateState(malformedPresent).meals.length,0, 'validator currently accepts silently normalized malformed meals');
assert.equal(typeof malformedPresent.weights,'string','original fixture remains unmodified');
console.log('V7-002 CHARACTERIZATION: malformed-present collections are silently normalized (known risk, not fixed)');
