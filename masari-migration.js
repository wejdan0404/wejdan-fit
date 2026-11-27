/* Safe, opt-in migration from Masari Health backup. Never overwrites the original key. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.MASARI_MERGE = api;
})(typeof window !== 'undefined' ? window : null, function () {
  'use strict';
  const PREFIX = 'masari-v1-';
  const dateOK = value => typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value+'T12:00:00')) && new Date(value+'T12:00:00').toISOString().slice(0,10) === value;
  const number = (x,min,max) => x !== null && x !== undefined && x !== '' && Number.isFinite(Number(x)) && Number(x)>=min && Number(x)<=max;
  const plain = x => x !== null && typeof x === 'object' && !Array.isArray(x);
  const clone = x => JSON.parse(JSON.stringify(x));
  const safeName = value => String(value ?? '').replace(/[<>]/g,'').trim().slice(0,100);
  function readLegacy(input) {
    const src = typeof input === 'string' ? JSON.parse(input) : input;
    const obj = src?.data && plain(src.data) && plain(src.data.days) ? src.data : src;
    if (!plain(obj) || !plain(obj.days)) throw new Error('هذا ليس ملف النسخة الاحتياطية لمساري الصحي');
    if (Object.keys(obj.days).length > 3000) throw new Error('النسخة كبيرة جدًا للتحقق الآمن');
    const days = Object.entries(obj.days).filter(([date,day])=>dateOK(date)&&plain(day));
    return {days};
  }
  function migrate(current, input) {
    if (!plain(current) || !Array.isArray(current.weights) || !Array.isArray(current.meals) || !plain(current.workouts) || !plain(current.habits) || !plain(current.settings)) throw new Error('صيغة WEJDAN FIT الحالية غير صالحة');
    const source = readLegacy(input);
    const result = clone(current);
    const stats = {readDays:source.days.length, weights:0, meals:0, workouts:0, walkingDays:0, sleepDays:0, skipped:0};
    const knownWeights = new Set(result.weights.filter(x=>dateOK(x?.date)).map(x=>x.date));
    const knownMealIds = new Set(result.meals.map(x=>x?.id));
    for (const [date,day] of source.days) {
      const weight=day?.measurements?.weightKg;
      if (number(weight,25,350) && !knownWeights.has(date)) {
        result.weights.push({date,kg:Number(weight)});knownWeights.add(date);stats.weights++;
      }
      if (Array.isArray(day.foodEntries)) {
        for (let index=0;index<Math.min(day.foodEntries.length,30);index++) {
          const f=day.foodEntries[index]; if(!plain(f)) {stats.skipped++;continue}
          const name=safeName(f.name);const amount=f.amount,rate=f.kcalPerUnit;
          const key=PREFIX+date+'-'+index+'-'+String(f.id??'').replace(/[^a-zA-Z0-9_-]/g,'').slice(0,35);
          if(knownMealIds.has(key))continue;
          if(!name||!number(amount,0,10000)||!number(rate,0,4000)||!number(Number(amount)*Number(rate),0,4000)) {stats.skipped++;continue}
          const macro=(k)=>number(f[k],0,1000)&&Number(amount)*Number(f[k])<=1000?Number((Number(amount)*Number(f[k])).toFixed(1)):null;
          const slot=(typeof f.meal==='string'&&/سناك|snack/i.test(f.meal))?'سناك اختياري':'وجبة 1';
          result.meals.push({id:key,date,slot,name,cal:Math.round(Number(amount)*Number(rate)),protein:macro('proteinPerUnit'),carbs:macro('carbsPerUnit'),fat:macro('fatPerUnit'),source:'masari-health-v1',estimated:true});
          knownMealIds.add(key);stats.meals++;
        }
      }
      const hasWorkout=day.fitnessDone===true||day.fitnessLog?.done===true;
      const workoutKey=date+'__MASARI';
      if(hasWorkout&&!result.workouts[workoutKey]){
        result.workouts[workoutKey]={date,session:'مساري',finished:true,finishedAt:date+'T12:00:00',sets:{},metrics:{},migrated:true,notes:'نُقلت حالة الاكتمال فقط، دون افتراض مجموعات أو أوزان'};
        stats.workouts++;
      }
      const prior=plain(result.habits[date])?result.habits[date]:{};const next={...prior};let changed=false;
      if((next.walk===undefined||next.walk===null)&&number(day.walkMinutes,0,600)) {next.walk=Number(day.walkMinutes);stats.walkingDays++;changed=true}
      if((next.sleep===undefined||next.sleep===null)&&number(day.checkIn?.sleepHours,0,24)) {next.sleep=Number(day.checkIn.sleepHours);stats.sleepDays++;changed=true}
      if((next.water===undefined||next.water===null)&&number(day.waterCups,0,40)) {next.water=Number(day.waterCups);changed=true}
      if(changed)result.habits[date]=next;
    }
    // Keep WEJDAN FIT identity, user settings, all existing workouts, and original backup key unchanged.
    return {data:result,stats};
  }
  return {migrate,readLegacy};
});
