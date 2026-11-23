/* WEJDAN FIT domain logic V2. Pure functions; no network or user-data access. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.FIT_CORE = api;
})(typeof window !== 'undefined' ? window : null, function () {
  'use strict';
  const P = Object.prototype.hasOwnProperty;
  const isObject = x => x !== null && typeof x === 'object' && !Array.isArray(x);
  const safeNumber = (x, min, max, integer=false) => x !== '' && x !== undefined && x !== null && Number.isFinite(Number(x)) && Number(x) >= min && Number(x) <= max && (!integer || Number.isInteger(Number(x)));
  function setRecord(workout, exerciseId, index, field, value) {
    if (!/^[AB]\d\d$/.test(exerciseId) || !Number.isInteger(index) || index < 0 || index >= 3 || !['reps','kg','rpe'].includes(field)) throw new Error('Invalid set field');
    const ranges = {reps:[0,100,true],kg:[0,100,false],rpe:[1,10,false]};
    const v = value === '' ? null : value;
    const [min,max,integer]=ranges[field];
    if (v !== null && !safeNumber(v,min,max,integer)) throw new Error('Invalid set value');
    const next = {...workout, setMetrics:{...(workout?.setMetrics||{})}};
    const rows=Array.isArray(next.setMetrics[exerciseId]) ? next.setMetrics[exerciseId].map(x=>({...x})) : [];
    while(rows.length<=index) rows.push({});
    if(v===null) delete rows[index][field]; else rows[index][field]=Number(v);
    next.setMetrics[exerciseId]=rows;
    return next;
  }
  function sessionCoverage(workout, exercises, goalSets=1) {
    const sets=Math.max(1,Math.min(3,Number(goalSets)||1));
    const rows=exercises.map(x=>({id:x.id,count:(workout?.sets?.[x.id]||[]).slice(0,sets).filter(Boolean).length}));
    const done=rows.reduce((a,b)=>a+b.count,0);
    return {done, expected:rows.length*sets, completed:rows.length>0 && rows.every(x=>x.count===sets), touched:done>0, missing:rows.filter(x=>x.count<sets).map(x=>x.id)};
  }
  function nextStatus(workout, exercises, sets, requested) {
    const c=sessionCoverage(workout,exercises,sets);
    if(requested==='rest')return {status:'rest',finished:false,coverage:c};
    if(requested==='partial')return {status:c.touched?'partial':'rest',finished:false,coverage:c};
    if(requested!=='completed')throw new Error('Invalid status');
    return {status:c.completed?'completed':c.touched?'partial':'planned',finished:c.completed,coverage:c};
  }
  function stageFromCompleted(workouts) {
    // Only informational: progression NEVER changes resistance, sets, or exercises automatically.
    const completed=Object.values(workouts||{}).filter(x=>x?.finished && (x.session==='A'||x.session==='B') && !x.migrated).length;
    return {completed, practiceWeeks:Math.min(26,Math.max(1,Math.floor(completed/2)+1))};
  }
  function planForDay(date,plans={}) {
    if(P.call(plans,date)&&['A','B','rest','flex'].includes(plans[date]))return plans[date];
    const day=new Date(date+'T12:00:00').getDay();
    return day===1?'A':day===4?'B':'flex';
  }
  function safetyCheck(checkin) {
    if(!isObject(checkin))return {pause:false,reason:''};
    if(checkin.newNumbness===true||checkin.colorChange===true||checkin.newWeakness===true)return {pause:true,reason:'سُجّلت أعراض جديدة تستدعي إيقاف الجلسة واتباع تعليمات الطبيبة؛ الأعراض المفاجئة والشديدة تستدعي رعاية طارئة.'};
    return {pause:false,reason:''};
  }
  function validateBackup(value) {
    const dat = isObject(value?.data) ? value.data : value;
    if(!isObject(dat) || !isObject(dat.settings) || !Array.isArray(dat.meals) || !Array.isArray(dat.weights) || !isObject(dat.workouts))throw new Error('صيغة النسخة غير صالحة');
    if(dat.meals.length>10000||dat.weights.length>4000||Object.keys(dat.workouts).length>5000)throw new Error('سجلات كثيرة جدًا');
    const date=d=>typeof d==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(d)&&!Number.isNaN(Date.parse(d+'T12:00:00'))&&new Date(d+'T12:00:00').toISOString().slice(0,10)===d;
    if(dat.weights.some(x=>!isObject(x)||!date(x.date)||!safeNumber(x.kg,25,350)))throw new Error('تاريخ أو وزن غير صالح');
    if(dat.meals.some(x=>!isObject(x)||!date(x.date)||!safeNumber(x.cal,0,4000)||['protein','carbs','fat'].some(k=>x[k]!=null&&!safeNumber(x[k],0,k==='carbs'?600:300))))throw new Error('وجبة غير صالحة');
    for(const [key,w] of Object.entries(dat.workouts)){
      if(!/^\d{4}-\d{2}-\d{2}__/.test(key)||!date(key.slice(0,10))||!isObject(w))throw new Error('حصة غير صالحة');
    }
    if(dat.habits!==undefined&&!isObject(dat.habits))throw new Error('عادات غير صالحة');
    return {data:dat,counts:{meals:dat.meals.length,weights:dat.weights.length,workouts:Object.keys(dat.workouts).length}};
  }
  function weekStats(data, end) {
    const from=new Date(end+'T12:00:00');from.setDate(from.getDate()-6);const iso=d=>d.toISOString().slice(0,10);const since=iso(from);
    const workouts=Object.entries(data.workouts||{}).filter(([key,w])=>w?.finished&&key.slice(0,10)>=since&&key.slice(0,10)<=end).length;
    const partial=Object.entries(data.workouts||{}).filter(([key,w])=>w?.status==='partial'&&key.slice(0,10)>=since&&key.slice(0,10)<=end).length;
    const meals=(data.meals||[]).filter(x=>x.date>=since&&x.date<=end).length;
    const rest=Object.entries(data.dayPlans||{}).filter(([date,p])=>date>=since&&date<=end&&p==='rest').length;
    return {from:since,to:end,workouts,partial,meals,rest};
  }
  return {setRecord,sessionCoverage,nextStatus,stageFromCompleted,planForDay,safetyCheck,validateBackup,weekStats};
});
