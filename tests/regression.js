const vm=require('vm'),fs=require('fs'),assert=require('assert');
const path=require('node:path').resolve(__dirname,'..')+'/';
const data=new Map();
const storage={getItem:k=>data.get(k)||null,setItem:(k,v)=>data.set(k,String(v)),removeItem:k=>data.delete(k)};
function makeEnv(){
 const els=new Map();
 const el=id=>{if(!els.has(id))els.set(id,{innerHTML:'',textContent:'',value:'',classList:{add(){},remove(){},toggle(){}},style:{},dataset:{},addEventListener(event,callback){this.listeners??={};this.listeners[event]=callback},querySelector(){return{focus(){}}},click(){}});return els.get(id)};
 const doc={getElementById:el,querySelector(){return {content:''}},querySelectorAll(){return[]},addEventListener(){},body:{style:{}},documentElement:{dataset:{}},createElement:tag=>({style:{},className:'',remove(){}})};
 const win={FIT_DATA:null,scrollY:0,matchMedia(){return{matches:true}},addEventListener(){},scrollTo(){}};
 class FR{readAsText(file){this.result=file.text;this.onload()}}
 const ctx={window:win,document:doc,localStorage:storage,navigator:{userAgent:'Mozilla/5.0 (iPhone)'},location:{protocol:'file:'},console,Date,JSON,Intl,Math,Number,String,Array,Set,Map,Object,Boolean,RegExp,parseInt,parseFloat,isNaN,Error,URL,clearTimeout(){},setTimeout(){},clearInterval(){},setInterval(){},confirm(){return true},FormData:class{constructor(form){this.form=form}entries(){return Object.entries(this.form.data)}},FileReader:FR};
 vm.createContext(ctx);
 vm.runInContext(fs.readFileSync(path+'fit-data.js','utf8'),ctx);
 vm.runInContext(fs.readFileSync(path+'fit-core.js','utf8'),ctx);
 vm.runInContext(fs.readFileSync(path+'fit-next.js','utf8'),ctx);
 vm.runInContext(fs.readFileSync(path+'exercise-coach.js','utf8'),ctx);
 vm.runInContext(fs.readFileSync(path+'exercise-alternatives.js','utf8'),ctx);
 const src=fs.readFileSync(path+'app.js','utf8').replace(/init\(\);\s*\}\)\(\);\s*$/,'globalThis.__test={getState:()=>state,handleClick,handleSubmit,handleChange,save,workoutFinished,workoutHistory,importJSON,today,nutrientCoverage,validDate,weeklySnapshot,setSessionForTest:(value)=>{selectedSession=value}};init();})();');
 vm.runInContext(src,ctx,{timeout:3000});return {ctx,els};
}
function submit(x,id,fields){x.ctx.__test.handleSubmit({target:{id,data:fields},preventDefault(){}})}
function click(x,action,args={}){const node={dataset:{action,...args}};x.ctx.__test.handleClick({target:{classList:{contains(){return false}},closest(query){return query==='[data-action]'?node:null}}})}
let x=makeEnv();
submit(x,'setupForm',{startWeight:'80',targetWeight:'65',height:'168',age:'22'});
assert(x.ctx.__test.getState().settings.setupComplete);
assert.strictEqual(x.ctx.__test.validDate('2026-02-31'),false,'reject impossible calendar dates');
const badStart=x.ctx.__test.getState().settings.startWeight;
submit(x,'settingsForm',{startWeight:'-100',targetWeight:'65',height:'168',age:'22',goalHigh:'1650',goalMedium:'1500',protein:'100',carbHigh:'200',carbMedium:'140',fatHigh:'50',fatMedium:'60',startDate:'2026-11-23'});
assert.strictEqual(x.ctx.__test.getState().settings.startWeight,badStart);
submit(x,'mealForm',{name:'invalid',date:'2026-11-23',slot:'وجبة 1',cal:'-50',protein:'20',carbs:'40',fat:'10'});
assert.strictEqual(x.ctx.__test.getState().meals.length,0,'negative meal rejected');
submit(x,'mealForm',{name:'test meal',date:'2026-11-23',slot:'وجبة 1',cal:'500',protein:'',carbs:'',fat:''});
assert.strictEqual(x.ctx.__test.getState().meals.length,1,'valid meal saved');
assert.strictEqual(x.ctx.__test.getState().meals[0].protein,null,'missing macros not treated as measured 0');
assert.strictEqual(x.ctx.__test.nutrientCoverage().protein,false,'missing protein must be incomplete');
let t=x.ctx.__test.getState();
x.ctx.__test.handleChange({target:{dataset:{workoutSetField:'reps',exercise:'A01',set:'0'},value:'8'}});
x.ctx.__test.handleChange({target:{dataset:{workoutSetField:'kg',exercise:'A01',set:'0'},value:'0.5'}});
assert.strictEqual(x.ctx.__test.getState().workouts[x.ctx.__test.today()+'__A'].setMetrics.A01[0].reps,8);
assert.strictEqual(x.ctx.__test.getState().workouts[x.ctx.__test.today()+'__A'].setMetrics.A01[0].kg,0.5);
x.ctx.__test.handleChange({target:{dataset:{workoutSetField:'reps',exercise:'A01',set:'0'},value:'-2'}});
assert.strictEqual(x.ctx.__test.getState().workouts[x.ctx.__test.today()+'__A'].setMetrics.A01[0].reps,8,'reject negative reps');
click(x,'toggle-set',{exercise:'A01',set:'0'});click(x,'finish-workout');
assert.strictEqual(x.ctx.__test.workoutFinished(),0,'one set is not the entire session');
click(x,'partial-workout');
assert.strictEqual(x.ctx.__test.getState().workouts[x.ctx.__test.today()+'__A'].status,'partial');
assert.strictEqual(x.ctx.__test.workoutFinished(),0,'partial session not counted complete');
for(const id of ['A02','A03','A04','A05','A06'])click(x,'toggle-set',{exercise:id,set:'0'});
click(x,'finish-workout');
assert.strictEqual(x.ctx.__test.workoutFinished(),1);
assert(x.ctx.__test.workoutHistory().includes('A01'));
assert.strictEqual(x.ctx.__test.weeklySnapshot().workouts,1);
assert.strictEqual(x.ctx.__test.weeklySnapshot().meals,1);
const snapshot=JSON.stringify(x.ctx.__test.getState());
x.ctx.__test.importJSON({text:JSON.stringify({data:{settings:{},weights:[],meals:[{name:'bad',date:'2026-11-23',cal:-40}],workouts:{}}})});
assert.strictEqual(JSON.stringify(x.ctx.__test.getState()),snapshot,'bad backup cannot corrupt existing data');
const y=makeEnv();assert.strictEqual(y.ctx.__test.workoutFinished(),1);assert.strictEqual(y.ctx.__test.getState().meals.length,1);assert.strictEqual(y.ctx.__test.getState().workouts[y.ctx.__test.today()+'__A'].setMetrics.A01[0].kg,0.5);
// A substitute that only covers part of the original movement cannot falsely complete a full A/B workout.
const z=makeEnv();
z.ctx.__test.setSessionForTest('B');
const day=z.ctx.__test.today(),bkey=day+'__B';
const b=z.ctx.__test.getState();
b.workouts[bkey]={session:'B',date:day,status:'in_progress',finished:false,sets:Object.fromEntries(['B01','B02','B03','B04','B05','B06'].map(id=>[id,[true]])),setMetrics:{},exerciseChoices:{B06:'B06-ALT2'}};
assert(z.ctx.__test.save());
click(z,'finish-workout');
assert.strictEqual(z.ctx.__test.getState().workouts[bkey].finished,false,'partial-match alternative must not count as original full workout');
click(z,'partial-workout');
assert.strictEqual(z.ctx.__test.getState().workouts[bkey].status,'partial');
assert.strictEqual(z.ctx.__test.workoutFinished(),1,'old completed A remains preserved; adapted B partial does not count');
console.log('PASS: setup, validation, nutrition, actual reps and resistance, completed session, backup rejection, persistence across reopen');


// V7-002 characterization: synthetic corrupt JSON and save on the existing storage key.
// This documents the current destructive path, NOT approval of the behavior.
const syntheticKey='wejdan-fit-app-v1';
const previousRaw=data.get(syntheticKey);
data.set(syntheticKey,'{invalid-synthetic-json');
const corruptEnv=makeEnv();
assert.strictEqual(corruptEnv.ctx.__test.getState().settings.setupComplete,false,'corrupt stored JSON falls back to setup');
assert.strictEqual(data.get(syntheticKey),'{invalid-synthetic-json','initialization itself does not rewrite the invalid raw value');
assert.strictEqual(corruptEnv.ctx.__test.save(),false,'corrupt data must block writes');
assert.strictEqual(data.get(syntheticKey),'{invalid-synthetic-json','original raw bytes preserved');
assert(corruptEnv.els.get('app').innerHTML.includes('حماية بياناتك'),'show recovery instead of setup');
if(previousRaw===undefined)data.delete(syntheticKey);else data.set(syntheticKey,previousRaw);
console.log('PASS: corrupt stored JSON blocks writes and preserves original bytes');


// V7-002 A10 characterization: synthetic quota/permission failure, without touching real data.
// The write is rejected by the mock and the prior persisted snapshot must remain intact.
const stableRaw=data.get(syntheticKey);
const realSetItem=storage.setItem;
storage.setItem=()=>{throw new Error('QuotaExceededError synthetic')};
try {
  const deniedEnv=makeEnv();
  assert.strictEqual(deniedEnv.ctx.__test.save(),false,'save must report a failed local write');
  assert.strictEqual(data.get(syntheticKey),stableRaw,'failed write must not change persisted bytes');
  assert.strictEqual(deniedEnv.els.get('saveIndicator').textContent,'تعذّر الحفظ المحلي','UI must show failure');
} finally {
  storage.setItem=realSetItem;
}
console.log('V7-002 CHARACTERIZATION: denied localStorage write returns false and preserves persisted bytes (mock only)');

// V7-002 A10-M01/M02: characterize unpersisted UI state after a rejected write.
// Mock-only, deliberately asserts current divergence, not a fix or desired outcome.
const stableModeRaw=data.get(syntheticKey);
const modeEnv=makeEnv();
const modeBefore=modeEnv.ctx.__test.getState().foodModes[modeEnv.ctx.__test.today()];
storage.setItem=()=>{throw new Error('synthetic denied storage')};
try {
  const targetMode=modeBefore==='high'?'medium':'high';
  const foodNode={dataset:{foodMode:targetMode}};
  modeEnv.ctx.__test.handleClick({target:{classList:{contains(){return false}},closest(query){return query==='[data-food-mode]'?foodNode:null}}});
  assert.strictEqual(modeEnv.ctx.__test.getState().foodModes[modeEnv.ctx.__test.today()],modeBefore,'food mode rolls back on denied write');
  assert.strictEqual(data.get(syntheticKey),stableModeRaw,'food-mode failure must preserve stored raw bytes');
  assert.strictEqual(modeEnv.els.get('saveIndicator').textContent,'تعذّر الحفظ المحلي');
  const themeBefore=modeEnv.ctx.__test.getState().settings.theme;
  const switcher=modeEnv.els.get('themeSwitch');
  assert.strictEqual(typeof switcher.listeners?.click,'function','theme click listener must be registered');
  switcher.listeners.click();
  assert.strictEqual(modeEnv.ctx.__test.getState().settings.theme,themeBefore,'theme rolls back on denied write');
  assert.strictEqual(data.get(syntheticKey),stableModeRaw,'theme failure must preserve stored raw bytes');
  assert.strictEqual(modeEnv.els.get('saveIndicator').textContent,'تعذّر الحفظ المحلي');
} finally {storage.setItem=realSetItem;}
console.log('PASS: food-mode/theme rollback after denied write (mock only)');

// Fail closed on unsupported version and wrong-shaped saved data.
for(const bad of ['null','[]','{"schemaVersion":999}','{"meals":{}}','{"weights":null}']){data.set(syntheticKey,bad);const e=makeEnv();assert.strictEqual(e.ctx.__test.save(),false);assert.strictEqual(data.get(syntheticKey),bad);assert(e.els.get('app').innerHTML.includes('حماية بياناتك'));}
if(stableModeRaw===undefined)data.delete(syntheticKey);else data.set(syntheticKey,stableModeRaw);
console.log('PASS: unsupported or malformed stored roots cannot be overwritten');

// RC-01 M04/M05: rejected writes cannot leave phantom workout defaults or settings.
const rollbackEnv=makeEnv();const rollbackKey=rollbackEnv.ctx.__test.today()+'__A';const beforeRollback=JSON.stringify(rollbackEnv.ctx.__test.getState());
const previousSetter=storage.setItem;storage.setItem=()=>{throw Error('synthetic write rejected')};
try {
 rollbackEnv.ctx.__test.handleChange({target:{dataset:{workoutField:'reps',exercise:'A01'},value:'8'}});
 assert.strictEqual(JSON.stringify(rollbackEnv.ctx.__test.getState()),beforeRollback,'legacy workout field rolls back');
 rollbackEnv.ctx.__test.handleChange({target:{id:'setLevel',dataset:{},value:'3'}});
 assert.strictEqual(JSON.stringify(rollbackEnv.ctx.__test.getState()),beforeRollback,'training set setting rolls back');
} finally {storage.setItem=previousSetter;}
console.log('PASS: M04/M05 synthetic workout/setting denied-write rollback');
