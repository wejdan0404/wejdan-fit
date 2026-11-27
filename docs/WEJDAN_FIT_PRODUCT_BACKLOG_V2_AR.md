# WEJDAN FIT — Product Improvement Backlog V2

**Status:** RESEARCH + SOURCE CODE AUDIT — planning only. **Not deployed; not approved for production.**
**Source:** `feature/masari-safe-merge-v1` from `wejdan0404/wejdan-fit`, `docs/MASARI_MERGE_PLAN_AR.md`, direct inspection of `app.js`, `masari-migration.js`, and recipe/exercise catalog.
**Date:** 2026-11-23

## قواعد ثابتة

1. `main` production untouched until tested and approved. Keep storage key `wejdan-fit-app-v1` backward compatible.
2. No private health files, weight history, backup JSON, or clinical docs in public GitHub.
3. Existing two-meal workflow, beginner A/B plan, no automatic intensification, Light/Dark and Figma identity remain the default.
4. Exercise modifications are subject to the user's physician/PT restrictions. Do not advertise reference exercise videos as medically approved.
5. Unverified recipes and nutritional values must be clearly labeled. Peanut/coconut allergen keyword screening is not certification.

## Confirmed from source (not feature speculation)

- `recordWorkout` requires at least one completed set; it then marks the **session** complete. Improve states and completeness validation.
- `workoutState` currently records summary `metrics[id].reps` and `metrics[id].kg` per **exercise**, not per set.
- `weekIndex()` advances based on calendar days since `startDate`, not completed sessions.
- `masariRecipeCards()` truncates display to first 24 results; `masariExerciseCards()` to first 25 without browsing pagination.
- `localStorage` is the primary data store; export/import is manual; no account or cross-device synchronization.
- The catalog contains 89 imported recipe records, 85 shown as candidates, 4 peanut-containing recipes blocked; 46 reference exercises and 25 source videos awaiting clinical/video correspondence review.
- 26-week progression, calorie cycling, local meal log and 7-day review already exist. Do not rebuild these blindly.

## Priority definitions

- **P0** Must complete before merging the new catalog/migration into production.
- **P1** High impact for daily use; implement immediately after P0 or where a prerequisite needs it.
- **P2** Later enhancement; do not delay a safe initial launch.

## Executable backlog

### A — أساس الحفظ والسلامة

| Priority | ID | Improvement | Implementation | Acceptance test |
|---|---|---|---|---|
| P0 | FIT-001 | ترحيل بيانات بإصدارات واضحة | إضافة schemaVersion مع migrations لا تغيّر السجل القديم بصمت | استيراد نسختي V1 وMasari مرتين دون فقد أو تكرار |
| P0 | FIT-002 | نسخة احتياطية قابلة للتحقق | معاينة بيانات JSON ووقت إنشائها وحجمها وعدد سجلاتها قبل الاستعادة | استعادة تجريبية وبقاء بيانات المصدر عند الفشل |
| P0 | FIT-003 | تراجع عن أحدث تغيير | Undo للوزن والوجبة والجلسة، وسجل تحرير اختياري | حذف أو تعديل عرضي قابل للاسترداد دون إتلاف السجلات الأخرى |
| P0 | FIT-004 | سجل أعراض منفصل | تسجيل الألم/التنميل/البرودة/الطاقة قبل وبعد الجلسة دون تقديم تشخيص | إيقاف خطوات التمرين والتنبيه عند أعراض تتطلب تقييمًا، دون وصف نشاط بديل تلقائيًا |
| P0 | FIT-005 | موافقة التدريب وحدود الخطة | إعداد واضح لتعليمات الطبيبة والحركات التي طلبت تجنبها، لا حفظ تقرير طبي في GitHub | لا تظهر الحركات المقيدة كأوامر نشطة |
| P0 | FIT-006 | تأكيد حفظ حقيقي | تمييز محفوظ/غير محفوظ/استعادة، وعدم عرض نجاح وهمي عند فشل التخزين | اختبارات نفاد التخزين وإعادة فتح التطبيق |
| P1 | FIT-007 | استقرار التخزين | تقييم IndexedDB مع migration ونسخ محلية قابلة للتصدير وعدم الاعتماد على localStorage وحده | العودة الآمنة من النسخة السابقة مع اختبار Safari PWA |

### B — تمرين وتدرج للمبتدئات

| Priority | ID | Improvement | Implementation | Acceptance test |
|---|---|---|---|---|
| P0 | FIT-008 | حالات الجلسة | planned / started / partial / completed / skipped / rest مع سبب اختياري | مجموعة واحدة لا تجعل الجلسة مكتملة تلقائيًا |
| P0 | FIT-009 | تسجيل كل مجموعة | العدادات والوزن/المطاط وRPE لكل مجموعة لا لكل تمرين فقط | التمييز بين 8/8/6 عدات عبر ثلاث مجموعات |
| P1 | FIT-010 | تدرج بحسب الإنجاز | الانتقال بالأداء والتعافي لا بالتاريخ التقويمي وحده | الانقطاع 7 أيام لا يرفع الصعوبة آليًا |
| P1 | FIT-011 | جدولة يومي A وB | عرض يومين مقاومة وراحة كحد أدنى للبداية مع إمكانية إعادة الجدولة | عند نقل حصة لا تُكرر جلستان متتاليتان على عضلات نفسها دون تحذير مناسب |
| P1 | FIT-012 | بديل أسهل لكل حركة | بديل كرسي/حائط/مطاط خفيف مشروط بالخطة الطبية | عند اختيار بديل يحفظ التطبيق الخيار في الجلسة |
| P1 | FIT-013 | دليل الفيديو المطابق | فيديو واحد موثق للحركة المحددة + الأدوات + نقاط مراقبة وضعية الرقبة/الظهر | كل حركة نشطة لها رابط مباشر وحالة مطابقة مراجعة |
| P1 | FIT-014 | حالات تغير الألم أثناء التمرين | فحص قبل/بعد الجلسة مع منع الحث على الاستمرار عند أعراض جديدة | إمكانية إيقاف الجلسة مع بقاء الجزء المنجز محفوظًا |
| P1 | FIT-015 | تطور القوة الحقيقي | عرض آخر جلسة وأفضل أداء لكل تمرين مع المقارنة المشروطة بنفس نسخة التمرين | لا مقارنة بين معدات أو زوايا مختلفة كأنها نفس الحركة |
| P1 | FIT-016 | المشي منفصل عن المقاومة | جلسات مشي مرنة وحساب إجمالي أسبوعي دون مضاعفة التحديات | لا حوافز عقابية عند عدم المشي |
| P2 | FIT-017 | لوح البيلاتس والعلاج الطبيعي | مكتبة منفصلة للجلسات المعتمدة فقط مع فصل التأهيل عن المقاومة | لا تضاف تمارين مساري المرجعية تلقائيًا إلى الخطة النشطة |

### C — وجبتان وتغذية موثوقة

| Priority | ID | Improvement | Implementation | Acceptance test |
|---|---|---|---|---|
| P0 | FIT-018 | تدقيق مسببات الحساسية | فحص الفول السوداني وجوز الهند وعبوات المكونات الفعلية + status verified/unknown/avoid | كل وصفة غير مراجعة لا تَظهر على أنها آمنة |
| P0 | FIT-019 | مصدر البيانات الغذائية | غرامات، حصص، kcal/P/C/F، نوع المطبوخ/النيء، رابط العبوة أو قاعدة بيانات | القيم غير المثبتة تُعرض تقديرية لا دقيقة |
| P1 | FIT-020 | وجبتان وسناك اختياري | قوالب يومية تحترم عادتك بلا فرض خمس وجبات | كل التخطيط والتقارير مبنية على اختيار وجبتين |
| P1 | FIT-021 | حاسبة حصص وصفات مساري | تحويل كامل وصفة/نصفها إلى حصص مع تقريب مفهوم | مضاعفة الحصة تضاعف القيم المحسوبة فقط حين تتوفر مكونات موثقة |
| P1 | FIT-022 | التوافق الحسابي للماكروز | تحقق من فرق الطاقة 4/4/9 مع هامش اختلاف الملصقات ونقص البيانات | لا تتحول الماكروز غير المدخلة إلى صفر حقيقي |
| P1 | FIT-023 | مرونة الكارب سايكل | ربط يوم أعلى كارب بالنشاط الحقيقي أو تحديده يدويًا دون إنقاص قسري | الأهداف التجريبية لا تُفرض على جميع الأيام تلقائيًا |
| P1 | FIT-024 | معدل السعرات الأسبوعي | مقارنة الأسبوع وإظهار أيام البيانات الناقصة دون تأنيب | لا حساب متوسط مشوّه بسبب الأيام غير المسجلة |
| P1 | FIT-025 | أكرر وجبتي | إعادة إدخال وجبة معتادة بسرعة، وتعديل الغرامات قبل الحفظ | وجبة مكررة تنشئ سجلًا بتاريخ جديد لا تمحو الأصل |
| P2 | FIT-026 | بدائل وميزانية الطعام | تبديل البروتين/الكارب حسب المتوفر والحساسية والميزانية | قائمة تسوق قابلة للتجميع من الوجبات المختارة |
| P2 | FIT-027 | وضعية التخطيط لا التتبع | اختيار نظام حصص/وجبات دون إظهار كل رقم سعرات إن أرادت | يمكن إخفاء المقاييس دون فقد السجل |

### D — متابعة التقدم والتعافي

| Priority | ID | Improvement | Implementation | Acceptance test |
|---|---|---|---|---|
| P1 | FIT-028 | اتجاه الوزن | متوسط متحرك واتجاه شهري بدل الاحتفال بكل تغير يومي | البيانات القليلة تظهر غير كافية لا اتجاهًا حاسمًا |
| P1 | FIT-029 | مقاييس غير الميزان | محيطات اختيارية + الراحة + قوة العضلات + المرونة | يمكن استخدام التطبيق دون إدخال وزن كل يوم |
| P1 | FIT-030 | تقييم الطاقة والنوم | تسجيل نوم وطاقة وشعور عام، وإبراز ارتباطات وصفية غير سببية | لا يدّعي التطبيق تشخيصًا أو علاقة سببية |
| P1 | FIT-031 | وضعية التعافي | راحة، أسبوع امتحانات، دورة شهرية، يوم إرهاق مع خيار تخفيف الجدول | تعليق المهام دون كسر سلسلة أو فرض تعويض |
| P1 | FIT-032 | مراجعة أسبوعية ذكية | ملخص إنجازات فعلية، ملاحظات المستخدم، أهداف الأسبوع القادم | يحترم السجلات الناقصة ويتيح حفظ قرار واحد للأسبوع |
| P2 | FIT-033 | تأثير الخطة بصريًا | رسم بياني للتمرين والوزن والتعافي قابل للتفسير | بلا ادعاء أن معدل فقد الوزن مؤشر للصحة وحده |

### E — تحفيز وتجربة استخدام

| Priority | ID | Improvement | Implementation | Acceptance test |
|---|---|---|---|---|
| P1 | FIT-034 | لوحة اليوم الموحّدة | بطاقة تمرين A/B أو راحة + وجبتان + المشي + مراجعة حالتي + إجراء رئيسي | إكمال اليوم من شاشة واحدة دون الانتقال لخمس تبويبات |
| P1 | FIT-035 | شريط رحلة مرن | تقدم قائم على مهارات وأيام عناية وليس رقم الميزان وحده | إنجاز الراحة والعودة يظهران كنجاح بدون تزييف |
| P1 | FIT-036 | رسائل تحفيز بحسب الحالة | رسائل عند البدء والانقطاع والاستمرار والتعافي دون لوم أو ادعاء علاجي | لا تُظهر عبارة إنجاز لم يحصل |
| P1 | FIT-037 | بحث وتصنيفات كاملة | Pagination/Load more لـ85 وصفة و46 تمرينًا وفلاتر مبنية على الأدوات | إمكانية الوصول لكل عنصر، لا أول 24/25 فقط |
| P1 | FIT-038 | تحرير العناصر بعد حفظها | عرض وإعادة تحرير وحذف الوجبة أو الوزن أو سجل التمرين بأمان | إلغاء التعديل لا يغير البيانات |
| P1 | FIT-039 | إمكانية الوصول WCAG 2.2 | فحص تباين Light/Dark، التركيز، حجم اللمس، VoiceOver، تقليل الحركة | قائمة نتائج محققة على iOS وAndroid، لا فحص آلي فقط |
| P2 | FIT-040 | نظام إنجازات غير عقابي | مكافآت على المحاولة والعودة والتعلم والتعافي، لا إجبار هدف أيام متتالية | العودة بعد انقطاع لا تقلل نقاط إنجازات سابقة |
| P2 | FIT-041 | تجربة أول فتح | أسئلة قليلة: هدفك، الوقت المتاح، الأدوات، توصيات الطبيب، تفضيلات الطعام | التطبيق جاهز بعد onboarding قصير مع إمكانية التخطي |

### F — التشغيل والخصوصية والجودة

| Priority | ID | Improvement | Implementation | Acceptance test |
|---|---|---|---|---|
| P0 | FIT-042 | اختبار الاستيراد الحقيقي على آيفون | سجل تجريبي ومسار rollback على الجهاز الفعلي قبل دمج PR | تثبيت Safari واستعادة فعلية موثقة دون بيانات شخصية في GitHub |
| P0 | FIT-043 | نشر معاينة مستقل | Preview للفرع لا يكتب في نفس localStorage production | المستخدم يقارن النسختين دون خطر استبدال بيانات التطبيق الحي |
| P1 | FIT-044 | اختبارات E2E لأهم الرحلات | تسجيل تمرين وحفظه وإعادة فتح وتصدير/استعادة/بحث/تغذية/ثيم | تنجح على مقياس جوال وكمبيوتر مع اختبارات unit الحالية |
| P1 | FIT-045 | تحديث PWA محكوم | رسالة إصدار جديد وتفعيل تحديث آمن دون فقد جلسة غير محفوظة | اختبار cache قديم وبعد تحديث Service Worker |
| P1 | FIT-046 | تجزئة الملفات | فصل app.js إلى وحدات: domain, storage, workouts, nutrition, pages, migration | إضافة ميزة دون كسر شاشات غير مرتبطة |
| P1 | FIT-047 | ملف خصوصية واضح | شرح أين توجد البيانات، إمكانات الحذف/التصدير، وعدم التزامن السحابي | المستخدم قادر على تصدير وحذف سجلاته بوضوح |
| P2 | FIT-048 | مزامنة اختيارية مستقبلًا | نقل آمن بين أجهزة المستخدم بإذن صريح ومراجعة أمنية، وليس عبر repo | البيانات الخاصة لا تنشر على GitHub العام |
| P2 | FIT-049 | تكاملات اختيارية مع الصحة | استيراد خطوات/نوم بأذونات محددة إن دعمت المنصة ذلك لاحقًا | لا حساب دخول أو صلاحية تُفرض على المستخدم |

## Milestones / ترتيب التنفيذ

**M0 — Data integrity & safety gate:** FIT-001..006, FIT-008..009, FIT-018..019, FIT-042..043. No user-data migration before a real backup/restore test.

**M1 — Everyday workout:** FIT-010..016, FIT-034..038. Start with workout state-machine, per-set logs, and the single Today's Plan.

**M2 — Nutrition & recipes:** FIT-020..027, full source verification and ingredient-based allergy review; don't silently promote estimates to confirmed numbers.

**M3 — Strong health-oriented experience:** FIT-028..033, FIT-039..041, with actual VoiceOver/Android tests.

**M4 — Reliability & future integrations:** FIT-007, FIT-044..049 after measuring platform/device needs.

## The first five user journeys to test end-to-end

1. First launch → onboarding → today's plan → save → close → re-open (same device).
2. A beginner starts workout → completes 1 of 6 moves → chooses 'partial' → returns later → completes correctly.
3. User selects verified recipe → edits portion → logs meal → correct summary; an unverified allergen keeps a warning.
4. User exports backup → imports Masari data twice → counts match → original WEJDAN FIT records unchanged.
5. On iPhone Safari installed app, user updates deployed version → data and theme preserved; unsupported offline content is labeled.

## External professional references

- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [W3C Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum)
- [MDN browser storage & eviction](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)
- [CDC physical activity in adults](https://www.cdc.gov/physical-activity-basics/guidelines/adults.html)

## Change control

**Documentation only.** This backlog does not turn on features, modify user data, or merge the draft PR. Each feature requires its own change and automated + manual verification.
