# WEJDAN FIT — GitHub Pages Edition

**Application languages:** HTML, CSS, JavaScript (no backend).

### Deploy GitHub Pages

1. Create a new public repository named `wejdan-fit` (do not upload private backups or the source medical spreadsheet).
2. Upload all files/folders from this package to the repository root, including `index.html` and `assets/`.
3. Go to **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main / (root) → Save**.
4. After GitHub reports **Your site is live**, use the **actual link shown in Pages settings** on mobile. The expected URL format is `https://wejdan0404.github.io/wejdan-fit/`, but **do not consider that live before verifying**.
5. iPhone: open in Safari → Share → Add to Home Screen → Open as Web App (if shown). Android: Chrome menu → Install app.

### Local personal data storage

- When you tick a completed exercise set, mark a finished session, record food, weight or sleep, it is stored with `localStorage` **on that device**. Reloading the installed PWA should preserve the entry. There is no account, no backend, and no cross-device synchronization.
- You can export/import the JSON backup under **More / المزيد**. This JSON contains private health/food logs: **never upload it publicly to GitHub**.
- Clearing Safari/browser website data, uninstalling app, switching browsers/devices may remove or isolate data. Back up regularly.
- Updating the code on GitHub should not overwrite local logs, since the storage key remains stable at a consistent origin.
- Video links require Internet. The text and interface are cached offline after the first successful load.

### Privacy publication note

This public bundle excludes the original `.xlsx` source file, screenshots, medical reports, and user-generated logs. It includes public exercise templates, public YouTube links and estimated recipes. **Real starting weight, target weight, height, and age are requested privately on the phone at first run** and are not hardcoded into the public source. Actual entries on the phone never go into GitHub.

### Sources

- [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Apple iPhone Add to Home Screen](https://support.apple.com/en-sa/guide/iphone/iph42ab2f3a7/26/ios/26)

### تحديث الجودة V3
- إضافة تسجيل العدات الفعلية والأوزان المستخدمة لكل تمرين في جدول الجلسة، مع سجل جلسات سابقة في صفحة التقدم.
- تحسين التحقق من البيانات قبل الحفظ والاستيراد، ومنع القيم الغذائية السالبة.
- تعديل افتراض أيام الكارب الأعلى إلى الاثنين والخميس والسبت، مع إمكانية اختيار نوع اليوم يدويًا.
- تظل حسابات الغذاء تقديرية؛ الوصفات غير معتمدة المكونات ولا تمثل ضمان خلو من المواد المسببة للحساسية.

## Sprint 02 — توسيع تجربة WEJDAN FIT (فرع التطوير فقط)

- `fit-next.js` طبقة حسابات وتحقيق البيانات، مع schemaVersion 3.
- تعديل الجلسات القديمة وقياسات الجسم، المتوسطات الأسبوعية، يوم هادئ، مراجعة أسبوعية، قوائم مشتريات، حصص وصفات مساري، وتعليمات محلية من الطبيبة.
- احتفظنا بمفتاح البيانات `wejdan-fit-app-v1`. لا مزامنة سحابية ولا نشر سجلات المستخدم.
- **حالة المهام الـ49:** [تقرير Sprint 02](docs/FULL_IMPROVEMENTS_STATUS_V3_AR.md).
- لم يُنشر على `main`؛ يجب إجراء اختبار Safari ونسخ حقيقي قبل اعتماد الدمج.
