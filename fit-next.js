/* WEJDAN FIT — phase 2 optional domain layer, zero network access.
 * Input values are user-entered unless a verifiable external source is attached.
 * Does not prescribe training intensity, calories, or medical decisions. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.FIT_NEXT = api;
})(typeof window !== 'undefined' ? window : null, function () {
  'use strict';
  const SCHEMA_VERSION = 3;
  const plain = x => x!==null && typeof x==='object' && !Array.isArray(x);
  const finite = (x, min, max) => x!==null && x!==undefined && x!=='' && Number.isFinite(Number(x)) && Number(x)>=min && Number(x)<=max;
  const validDate = x => typeof x==='string' && /^\d{4}-\d{2}-\d{2}$/.test(x) && !Number.isNaN(Date.parse(x+'T12:00:00Z')) && new Date(x+'T12:00:00Z').toISOString().slice(0,10)===x;
  const round=(x,p=1)=>Math.round(x*10**p)/10**p;
  const copy=x=>JSON.parse(JSON.stringify(x));
  function migrateState(value) {
    if(!plain(value)) throw new Error('Invalid data root');
    if(value.schemaVersion!==undefined && (!Number.isInteger(value.schemaVersion)||value.schemaVersion>SCHEMA_VERSION||value.schemaVersion<1))throw new Error('Unsupported data version');
    const result=copy(value);
    for(const field of ['meals','weights','measurements','shopping']) if(!Array.isArray(result[field]))result[field]=[];
    for(const field of ['habits','workouts','dayPlans','checkins','foodModes','feelings','recoveryModes','reflections','mealPlans']) if(!plain(result[field]))result[field]={};
    if(!plain(result.settings))result.settings={};
    result.settings={calorieVisibility:true,medicalNotes:'',avoidExercises:[],...result.settings};
    if(!Array.isArray(result.settings.avoidExercises))result.settings.avoidExercises=[];
    if(result.settings.avoidExercises.length>46)throw new Error('Too many excluded exercises');
    result.schemaVersion=SCHEMA_VERSION;
    return result;
  }
  function validateState(input) {
    if(!plain(input))throw new Error('صيغة البيانات غير صحيحة');
    const d=migrateState(input);
    for(const [field,max] of [['meals',12000],['weights',5000],['measurements',3000],['shopping',500]]) if(d[field].length>max)throw new Error('الملف يحتوي سجلات كثيرة جدًا');
    for(const [field,max] of [['workouts',5000],['checkins',5000],['dayPlans',5000],['recoveryModes',5000],['reflections',5000]])if(Object.keys(d[field]).length>max)throw new Error('بيانات ضخمة بشكل غير معتاد');
    if(d.weights.some(x=>!plain(x)||!validDate(x.date)||!finite(x.kg,25,350))) throw new Error('تاريخ أو وزن غير صالح');
    if(d.meals.some(x=>!plain(x)||!validDate(x.date)||!finite(x.cal,0,4000)||['protein','carbs','fat'].some(k=>x[k]!=null&&!finite(x[k],0,k==='carbs'?600:300)))) throw new Error('قيمة وجبة غير صالحة');
    if(d.measurements.some(x=>!plain(x)||!validDate(x.date)||['waist','hips','chest','arm'].some(k=>x[k]!==null&&x[k]!==undefined&&!finite(x[k],10,250))))throw new Error('قياسات غير صالحة');
    if(d.shopping.some(x=>!plain(x)||typeof x.name!=='string'||x.name.length>120||typeof x.done!=='boolean'))throw new Error('قائمة المشتريات غير صالحة');
    for(const [key,w] of Object.entries(d.workouts)) {
      if(!/^\d{4}-\d{2}-\d{2}__/.test(key)||!validDate(key.slice(0,10))||!plain(w))throw new Error('سجل جلسة غير صالح');
      for(const rows of Object.values(w.setMetrics||{})){if(!Array.isArray(rows)||rows.length>3)throw new Error('عدد مجموعات غير صالح');for(const item of rows){if(!plain(item))throw new Error('بيانات مجموعة غير صالحة');for(const [f,lo,hi] of [['reps',0,100],['kg',0,100],['rpe',1,10]])if(item[f]!=null&&!finite(item[f],lo,hi))throw new Error('قيمة مجموعة غير صالحة');}}
      if(w.exerciseChoices!==undefined){if(!plain(w.exerciseChoices)||Object.keys(w.exerciseChoices).length>12)throw new Error('خيارات التمارين غير صالحة');for(const [id,choice] of Object.entries(w.exerciseChoices))if(!/^[AB]\d{2}$/.test(id)||choice!==id+'-ALT1'&&choice!==id+'-ALT2'&&choice!==id+'-ALT3')throw new Error('البديل المحدد غير معروف');}
    }
    for(const x of Object.keys(d.recoveryModes))if(!validDate(x)||!['normal','gentle','rest'].includes(d.recoveryModes[x]))throw new Error('وضع تعافٍ غير صالح');
    if(d.settings.medicalNotes!=null && (typeof d.settings.medicalNotes!=='string'||d.settings.medicalNotes.length>2000))throw new Error('تعليمات طبية غير صالحة');
    if(d.settings.avoidExercises.some(x=>typeof x!=='string'||!/^([AB]\d\d|EX\d+)$/.test(x)))throw new Error('حركة مقيدة غير صالحة');
    for(const [date,value] of Object.entries(d.reflections))if(!validDate(date)||!plain(value)||typeof value.text!=='string'||value.text.length>1200)throw new Error('مراجعة أسبوعية غير صالحة');
    return d;
  }
  function previewBackup(input) {
    const data=validateState(plain(input?.data)?input.data:input);
    const iso= typeof input?.exportedAt==='string' && !Number.isNaN(Date.parse(input.exportedAt)) ? input.exportedAt : null;
    return {data,meta:{exportedAt:iso,schemaVersion:data.schemaVersion,meals:data.meals.length,weights:data.weights.length,measurements:data.measurements.length,workouts:Object.keys(data.workouts).length,shopping:data.shopping.length}};
  }
  function weekDates(end){if(!validDate(end))throw Error('Bad date');const d=new Date(end+'T12:00:00Z');return Array.from({length:7},(_,i)=>new Date(d.getTime()-(6-i)*86400000).toISOString().slice(0,10));}
  function nutritionStats(data,end){const days=weekDates(end),included=new Set(days),meals=(data.meals||[]).filter(x=>included.has(x.date)&&finite(x.cal,0,4000));const groups=new Map();for(const m of meals)groups.set(m.date,(groups.get(m.date)||0)+Number(m.cal));const vals=Array.from(groups.values());return {loggedDays:vals.length,missingDays:7-vals.length,meanCalories:vals.length?Math.round(vals.reduce((a,b)=>a+b,0)/vals.length):null,totalMeals:meals.length,fullMacroDays:days.filter(date=>{const rows=meals.filter(m=>m.date===date);return rows.length>0&&rows.every(m=>['protein','carbs','fat'].every(k=>finite(m[k],0,600)));}).length};}
  function weightTrend(weights,windowSize=4) {
    const sorted=(weights||[]).filter(x=>validDate(x.date)&&finite(x.kg,25,350)).slice().sort((a,b)=>a.date.localeCompare(b.date));
    const dedup=new Map(sorted.map(x=>[x.date,Number(x.kg)]));const vals=Array.from(dedup.entries());
    if(vals.length<2)return {status:'insufficient',observations:vals.length,delta:null,average:null};
    const last=vals.slice(-Math.max(2,Math.min(14,windowSize)));const avg=round(last.reduce((a,x)=>a+x[1],0)/last.length,2);const first=vals.slice(0,last.length);const start=first.reduce((a,x)=>a+x[1],0)/first.length;
    return {status:'descriptive',observations:vals.length,average:avg,delta:round(avg-start,2),from:last[0][0],to:last.at(-1)[0]};
  }
  function strengthHistory(workouts,exerciseId,choiceId=null) {
    const results=[];
    for(const [key,w] of Object.entries(workouts||{})){
      if(!w||!w.finished||w.migrated)continue;
      if((w.exerciseChoices?.[exerciseId]||null)!==(choiceId||null))continue;
      const rows=w.setMetrics?.[exerciseId];
      if(!Array.isArray(rows))continue;
      const best=rows.filter(x=>finite(x?.reps,1,100)).map(x=>({reps:Number(x.reps),kg:finite(x.kg,0,100)?Number(x.kg):null,rpe:finite(x.rpe,1,10)?Number(x.rpe):null})).sort((a,b)=>b.reps-a.reps)[0];
      if(best)results.push({date:key.slice(0,10),...best});
    }
    return results.sort((a,b)=>a.date.localeCompare(b.date)).slice(-12);
  }
  function modeForDay(data,date) {return ['normal','gentle','rest'].includes(data.recoveryModes?.[date])?data.recoveryModes[date]:'normal';}
  function dayOverview(data,date,core) {
    if(!validDate(date))throw Error('Bad date');
    const mode=modeForDay(data,date),plan=core.planForDay(date,data.dayPlans||{});
    const meals=(data.meals||[]).filter(x=>x.date===date);
    const workouts=Object.entries(data.workouts||{}).filter(([key])=>key.startsWith(date+'__')).map(([,w])=>w);
    const h=data.habits?.[date]||{};
    return {date,mode,plan:mode==='rest'?'rest':plan,meals:meals.length,workoutComplete:workouts.some(w=>w.finished),workoutPartial:workouts.some(w=>w.status==='partial'),walkLogged:finite(h.walk,0,600),sleepLogged:finite(h.sleep,0,24),checkinLogged:!!data.checkins?.[date]};
  }
  const allergenTokens={peanut:['فول سوداني','زبدة فول سوداني','فستق سوداني','peanut','groundnut','arachis'],coconut:['جوز الهند','حليب جوز الهند','زيت جوز الهند','coconut']};
  function reviewAllergens(ingredients,verified=false) {
    const strings=(Array.isArray(ingredients)?ingredients:[ingredients]).map(x=>typeof x==='string'?x:typeof x?.name==='string'?x.name:'').join(' ').toLowerCase();
    const hits=Object.entries(allergenTokens).filter(([,terms])=>terms.some(t=>strings.includes(t))).map(([name])=>name);
    return {status:hits.length?'avoid':verified?'source-reviewed':'unknown',hits,warning:hits.length?'يحتوي على مكون مرتبط بحساسية مسجلة':verified?'راجعي الملصق الفعلي قبل الاستخدام':'المكونات ومسببات الحساسية غير محققة؛ لا يمكن اعتباره آمنًا'};
  }
  function recipePortion(recipe,servings) {
    if(!plain(recipe)||!finite(servings,.1,20))throw Error('Bad portion');
    const base=finite(recipe.servings,1,30)?Number(recipe.servings):1;
    const ratio=Number(servings)/base;
    const numbers={};for(const key of ['cal','kcal','protein','carbs','fat'])numbers[key]=finite(recipe[key],0,15000)?round(Number(recipe[key])*ratio,1):null;
    return {ratio,...numbers,verified:recipe.nutritionVerified===true};
  }
  function macrosEnergy(meal){if(!['protein','carbs','fat'].every(k=>finite(meal?.[k],0,1000)))return {status:'insufficient'};const value=4*Number(meal.protein)+4*Number(meal.carbs)+9*Number(meal.fat);const labelled=finite(meal.cal,0,10000)?Number(meal.cal):null;return {status:'estimate',fromMacros:round(value),labelled,delta:labelled===null?null:round(value-labelled)};}
  function shoppingList(items){const lines=[];for(const x of items||[]){const name=String(x?.name||'').trim().slice(0,120);if(name)lines.push({id:String(x.id||''),name,done:!!x.done});}return lines;}
  function trainingGuard(settings,checkin,exerciseId,core){const restricted=Array.isArray(settings?.avoidExercises)&&settings.avoidExercises.includes(exerciseId);const symptom=core.safetyCheck(checkin);return {restricted,paused:restricted||symptom.pause,reason:restricted?'هذه الحركة في قائمة الحركات المقيّدة حسب تعليماتك؛ راجعي الطبيبة قبل إضافتها للخطة':symptom.reason};}
  return {SCHEMA_VERSION,migrateState,validateState,previewBackup,weekDates,nutritionStats,weightTrend,strengthHistory,modeForDay,dayOverview,reviewAllergens,recipePortion,macrosEnergy,shoppingList,trainingGuard,validDate};
});
