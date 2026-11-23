const vm=require('vm'),fs=require('fs'),assert=require('assert');
const path=require('node:path').resolve(__dirname,'..')+'/';
const data=new Map();
const storage={getItem:k=>data.get(k)||null,setItem:(k,v)=>data.set(k,String(v)),removeItem:k=>data.delete(k)};
function makeEnv(){
 const els=new Map();
 const el=id=>{if(!els.has(id))els.set(id,{innerHTML:'',textContent:'',value:'',classList:{add(){},remove(){},toggle(){}},style:{},dataset:{},addEventListener(){},querySelector(){return{focus(){}}},click(){}});return els.get(id)};
 const doc={getElementById:el,querySelector(){return {content:''}},querySelectorAll(){return[]},addEventListener(){},body:{style:{}},documentElement:{dataset:{}},createElement:tag=>({style:{},className:'',remove(){}})};
 const win={FIT_DATA:null,scrollY:0,matchMedia(){return{matches:true}},addEventListener(){},scrollTo(){}};
 class FR{readAsText(file){this.result=file.text;this.onload()}}
 const ctx={window:win,document:doc,localStorage:storage,navigator:{userAgent:'Mozilla/5.0 (iPhone)'},location:{protocol:'file:'},console,Date,JSON,Intl,Math,Number,String,Array,Set,Map,Object,Boolean,RegExp,parseInt,parseFloat,isNaN,Error,URL,clearTimeout(){},setTimeout(){},clearInterval(){},setInterval(){},confirm(){return true},FormData:class{constructor(form){this.form=form}entries(){return Object.entries(this.form.data)}},FileReader:FR};
 vm.createContext(ctx);
 vm.runInContext(fs.readFileSync(path+'fit-data.js','utf8'),ctx);
 const src=fs.readFileSync(path+'app.js','utf8').replace(/init\(\);\s*\}\)\(\);\s*$/,'globalThis.__test={getState:()=>state,handleClick,handleSubmit,handleChange,save,workoutFinished,workoutHistory,importJSON,today,nutrientCoverage,validDate,weeklySnapshot};init();})();');
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
x.ctx.__test.handleChange({target:{dataset:{workoutField:'reps',exercise:'A01'},value:'8'}});
x.ctx.__test.handleChange({target:{dataset:{workoutField:'kg',exercise:'A01'},value:'0.5'}});
assert.strictEqual(x.ctx.__test.getState().workouts[x.ctx.__test.today()+'__A'].metrics.A01.reps,8);
assert.strictEqual(x.ctx.__test.getState().workouts[x.ctx.__test.today()+'__A'].metrics.A01.kg,0.5);
x.ctx.__test.handleChange({target:{dataset:{workoutField:'reps',exercise:'A01'},value:'-2'}});
assert.strictEqual(x.ctx.__test.getState().workouts[x.ctx.__test.today()+'__A'].metrics.A01.reps,8,'reject negative reps');
click(x,'toggle-set',{exercise:'A01',set:'0'});click(x,'finish-workout');
assert.strictEqual(x.ctx.__test.workoutFinished(),1);
assert(x.ctx.__test.workoutHistory().includes('A01'));
assert.strictEqual(x.ctx.__test.weeklySnapshot().workouts,1);
assert.strictEqual(x.ctx.__test.weeklySnapshot().meals,1);
const snapshot=JSON.stringify(x.ctx.__test.getState());
x.ctx.__test.importJSON({text:JSON.stringify({data:{settings:{},weights:[],meals:[{name:'bad',date:'2026-11-23',cal:-40}],workouts:{}}})});
assert.strictEqual(JSON.stringify(x.ctx.__test.getState()),snapshot,'bad backup cannot corrupt existing data');
const y=makeEnv();assert.strictEqual(y.ctx.__test.workoutFinished(),1);assert.strictEqual(y.ctx.__test.getState().meals.length,1);assert.strictEqual(y.ctx.__test.getState().workouts[y.ctx.__test.today()+'__A'].metrics.A01.kg,0.5);
console.log('PASS: setup, validation, nutrition, actual reps and resistance, completed session, backup rejection, persistence across reopen');
