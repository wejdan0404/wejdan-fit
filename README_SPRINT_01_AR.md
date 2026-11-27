# بدء النسخة المحسّنة من WEJDAN FIT — فرع مراجعة

هذه نسخة من فرع `feature/masari-safe-merge-v1` وليست إطلاقًا عامًا. تستخدم هويتك السابقة وتضيف خطة اليوم، الجلسات الجزئية، تسجيل كل مجموعة، فحص أعراض اختياريًا، تكرار الوجبات، ومعاينة استيراد JSON.

للتشغيل محليًا:

```bash
python3 -m http.server 8000
```

ثم افتحي `http://localhost:8000`. البيانات المحفوظة في متصفح الاختبار ليست بيانات هاتفك الحقيقي.

الاختبارات:

```bash
node tests/regression.js
node tests/fit-core.test.js
node tests/masari-merge.test.js
```

اقرئي [تقرير التنفيذ](docs/IMPLEMENTATION_SPRINT_01_AR.md) قبل المراجعة، و[Backlog 49 مهمة](https://github.com/wejdan0404/wejdan-fit/blob/feature/masari-safe-merge-v1/docs/WEJDAN_FIT_PRODUCT_BACKLOG_V2_AR.md) للمتبقي. لا تنشري أو تدمجي هذا الفرع قبل فحوص الهاتف الحقيقي ومراجعة الحساسية والفيديوهات المرجعية.
