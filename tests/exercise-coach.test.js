const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const coach = require('../exercise-coach.js');
const source = fs.readFileSync(path.join(__dirname,'../fit-data.js'),'utf8');
const vm = require('node:vm');
const sandbox={window:{}};
vm.runInNewContext(source,sandbox,{timeout:3000});
const active=sandbox.window.FIT_DATA.exercises;
assert.equal(active.length,12);
for(const exercise of active){
  const g=coach.get(exercise.id);
  assert(g,`${exercise.id} lacks coaching`);
  assert.equal(g.cues.length,3);
  assert(g.cues.every(x=>typeof x==='string'&&x.length>15));
  assert(g.purpose&&g.mistake&&g.feel);
  assert(coach.qualityTag(exercise).length>10);
}
assert.equal(coach.ids.length,12);
assert(coach.get('A03').videoCaveat.includes('القدمين'));
assert(coach.get('B04').videoCaveat.includes('الجسر'));
assert(coach.get('B06').balanceNote.includes('لم نغيّر'));
assert.equal(coach.get('UNKNOWN'),null);
assert.equal(coach.qualityTag({video:'https://www.youtube.com/watch?v=abc',videoQuality:'مطابق'}).startsWith('مطابقة'),true);
assert.equal(coach.qualityTag({video:null}),'بدون فيديو مطابق');
console.log('PASS: 12 exercise guides, 3 cues per movement, video mismatch warnings and no auto change to A/B plan');
