# V7.1 — Unified requirement index
27 Nov 2026 | Baseline 9ca770884203cf6f4db047451b48d73fb1f2195e. 151 identifiers verified for uniqueness (86 competitor + 49 FIT + 16 new behavioral). This is a crosswalk, not a claim of 151 distinct implemented features. Original acceptance criteria remain authoritative in linked documents. Family assignment is a proposed primary workstream; cross-cutting criteria remain independently testable. Historic FIT rows have no individual acceptance criteria in their source and must be elaborated at design gate. No private data.

## Shared implementation ownership
- F01 — بدائل آمنة وسياق المعدات: 13 linked requirements; one implementation owner per capability, distinct acceptance checks preserved.
- F02 — تمرين مركز واستئناف ومؤقت: 12 linked requirements; one implementation owner per capability, distinct acceptance checks preserved.
- F03 — أداء سابق وأنواع التسجيل ومقارنة الحركة: 7 linked requirements; one implementation owner per capability, distinct acceptance checks preserved.
- F04 — سلامة الحركة والتقييم الشعوري: 12 linked requirements; one implementation owner per capability, distinct acceptance checks preserved.
- F05 — مطابقة الفيديو ومصادر الحركة: 5 linked requirements; one implementation owner per capability, distinct acceptance checks preserved.
- F06 — تخطيط أسبوعي ونسخ الخطط ومعاينة التغيير: 13 linked requirements; one implementation owner per capability, distinct acceptance checks preserved.
- F07 — حصة مناسبة للوقت، راحة، تدرج وعودة: 17 linked requirements; one implementation owner per capability, distinct acceptance checks preserved.
- F08 — بيلاتس: 3 linked requirements; one implementation owner per capability, distinct acceptance checks preserved.
- F09 — تصدير انتقائي محلي: 5 linked requirements; one implementation owner per capability, distinct acceptance checks preserved.
- F10 — تخطيط وتسجيل الطعام المرن: 9 linked requirements; one implementation owner per capability, distinct acceptance checks preserved.
- F11 — إثبات المغذيات والحساسية: 7 linked requirements; one implementation owner per capability, distinct acceptance checks preserved.
- F12 — الحصص والمطبخ والمشتريات: 6 linked requirements; one implementation owner per capability, distinct acceptance checks preserved.
- F13 — المراجعة والاتجاهات والاختيارات: 16 linked requirements; one implementation owner per capability, distinct acceptance checks preserved.
- F14 — حفظ واستعادة وسياق Safari: 14 linked requirements; one implementation owner per capability, distinct acceptance checks preserved.
- F15 — اختبار UX واللغة: 6 linked requirements; one implementation owner per capability, distinct acceptance checks preserved.
- F16 — ميزات مستقبلية تحتاج قرارًا منفصلًا: 6 linked requirements; one implementation owner per capability, distinct acceptance checks preserved.

## Traceable index
| ID | Family | Requirement | Priority (source or review) | V7 anchor | Overlap references | Acceptance / historical status | Source |
|---|---|---|---|---|---|---|---|
| WF-C01 | F01 | Smart Swap حسب السبب | P0 | 44 | — | اختيار بديل آمن في جلسة تجريبية وتثبيت سجله بعد إعادة الفتح | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-C02 | F02 | Exercise Flow — خطوة واحدة | P0 | 43 | — | إكمال مجموعة واحدة والعودة بلا فقد أو إكمال زائف | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-C03 | F01 | My Equipment Profiles | P0 | 44 | — | عند إلغاء المطاط لا تُقترح البدائل التي تتطلبه | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-C04 | F03 | Variant-safe Performance | P0 | 42 | — | تاريخ A03 وبديله لا يختلطان | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-C05 | F04 | Pain & Difficulty Check | P0 | 30 | — | سجل أعراض جديد لا يؤدي لاستمرار جلسة مفروضة | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-C06 | F05 | Exercise Video Trust Badges | P0 | 45 | — | بديل دون فيديو لا يرث فيديو الأصل | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-C07 | F07 | Time-Fit Sessions | P1 | 35 | — | لا يُحسب 5 دقائق بدل جلسة كاملة بغير إذن | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-C08 | F01 | Pilates Board Mode | P1 | 44 | — | وضع البيلاتس لا يعرض حركات محظورة | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-C09 | F06 | Weekly Flexible Planner | P1 | 34 | — | تغيير يوم يحفظ الخطة بلا تكرار سجلات | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-C10 | F07 | Gentle Activity Path | P1 | 35 | — | يوم راحة معتمد لا يكسر عرض الإنجاز | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-C11 | F09 | Coach Notes Sharing | P1 | 60 | — | تصدير ملف واضح خالٍ من معلومات لم توافق عليها المستخدمة | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-C12 | F10 | Two-Meal Smart Planner | P1 | 51 | — | تخطيط يومي دون اقتراح منتج محظور أو مكون مجهول كأنه آمن | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-C13 | F11 | Nutrient Provenance | P1 | 54 | — | القيمة مجهولة تظهر مجهولة وليست صفرًا | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-C14 | F12 | Dynamic Grocery List | P1 | 53 | — | نصف الحصة يخفض الغرامات ولا يضيف عنصرًا مكررًا | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-C15 | F13 | Weekly Reflection | P1 | 58 | — | لا تحسب الأيام غير المدخلة بصفر | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-C16 | F02 | Hands-Free Workout | P2 | 43 | — | اختبار تجربة إرشاد صوتي بلا لمس على Safari | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-C17 | F06 | Favourite Workout Templates | P2 | 34 | — | تعديل قالب لا يغير الحصص السابقة | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-C18 | F04 | Simpler Feedback After Exercise | P2 | 30 | — | تغير حالة النشاط دون فقد المجاميع | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-C19 | F01 | Smart Focus & Filters | P2 | 44 | — | فلتر جالس يعيد فقط حركات بوسم جالس | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-C20 | F16 | Camera Form Feedback | P3 | 17 | — | لا تشغيل قبل اختبارات السلامة والخصوصية | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-C21 | F16 | Cross-device Sync | P3 | 17 | — | النسخ لا تتعارض ولا تنشر البيانات في GitHub | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-C22 | F16 | Health Sensor Integration | P3 | 17 | — | إذن واضح وإمكانية الإلغاء والحد الأدنى من البيانات | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-D01 | F01 | Exercise Skill Graph | P0 | 44 | — | رسم شجرة A01 يعرض 3 مستويات ووسم التكافؤ لكل خيار | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-D02 | F01 | My Workout Contexts | P0 | 44 | — | بديل لا يناسب الأدوات لا يُقترح ضمن السياق المختار | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-D03 | F07 | Adapt Today's Session | P0 | 35 | — | ضيق الوقت يعرض مختصرًا مرجعيًا لا يحدد حصة كاملة زائفة | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-D04 | F02 | Resume Where I Left Off | P0 | 43 | — | حفظ مجموعة ثم إعادة فتح التطبيق يعيد آخر صفحة ومجموعة | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-D05 | F03 | Set Type Taxonomy | P0 | 42 | — | تمرين B04 يسجل الثواني، A03 يسجل لون/مستوى المطاط | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-D06 | F05 | Source+Video Audit | P0 | 45 | — | لا يتم تشغيل فيديو الأصل عند اختيار variant غير مطابق | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-D07 | F04 | Manual Readiness Gate | P1 | 30 | — | بدون معلومات كافية يُظهر غير كافية لا توصية تلقائية | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-D08 | F07 | Skill Progress Narrative | P1 | 35 | — | تعرض بطاقة A01 انتقال المهارة لا هدف وزن وحسب | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-D09 | F03 | My Exercise Notes | P1 | 42 | — | ملاحظة لبديل A03 لا تظهر على الأصل | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-D10 | F02 | Rest Presets Per Move | P1 | 43 | — | A01=90 ثانية وA05=60 تحفظان مستقلين | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-D11 | F04 | Quick End-of-Exercise Feedback | P1 | 30 | — | تقييم في أقل من ثلاث نقرات ويحفظ مع variant | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-D12 | F06 | Plan Version History | P1 | 34 | — | تغيير قالب B لا يعدل سجلات الأسبوع الماضي | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-D13 | F01 | Exercise Explorer Filters | P1 | 44 | — | بحث جالس يعيد فقط الحركات الموسومة جالسة | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-D14 | F08 | Pilates Class Playlist | P1 | 48 | — | كل جلسة تتضمن مستوى ووقتًا وحركات معتمدة لا توليدًا عشوائيًا | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-D15 | F07 | Movement Snack (5 min) | P1 | 35 | — | يمكن اختيار الراحة بدون نقصان إنجاز | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-D16 | F09 | Coach Export Brief | P1 | 60 | — | يحدد سجل 7 أيام وحقول المشاركة ويصدره محليًا | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-D17 | F10 | Meal Variety Preference | P1 | 51 | — | الخطة تتذكر تفضيل قلة التنوع دون تبديل مفاجئ | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-D18 | F10 | Simple Food vs Recipe | P1 | 51 | — | إمكان إضافة دجاج+أرز كوجبة دون فرض وصفة | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-D19 | F12 | Shopping Weeks/Quantities | P1 | 53 | — | تعديل حصتين إلى حصة واحدة يحدث غرامات القائمة | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-D20 | F14 | Safari vs Home Screen Data Check | P0 | 29 | — | تصدير من Safari ثم استيراد داخل الأيقونة يعيد السجلات دون ازدواج | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-D21 | F14 | PWA Persistent Backup Test | P0 | 29 | — | تحديث نسختين متتاليتين مع بقاء سجلين وضبط الضوء/الداكن | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-D22 | F15 | Research-led Logging UX | P1 | 66 | — | تحديد baseline قبل/بعد وقياس task success, errors, taps | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-D23 | F02 | Voice Guidance (Opt-in) | P2 | 43 | — | اختبار النطق على Safari قبل وصفه دعمًا مؤكدًا | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-D24 | F05 | Review of Personal Exercise Library | P2 | 45 | — | الإضافة تظهر 'شخصية غير مراجعة' ولا تدخل A/B إلا بموافقة | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-D25 | F07 | My Recovery Space | P2 | 35 | — | اختيار راحة لا يعيد الحسابات أو يرفع الشدة | [source](FEATURE_MATRIX_V7_AR.md) |
| WF-D26 | F05 | Licensed Movement Metadata | P3 | 45 | — | وجود دليل ترخيص وقواعد التكلفة والمصدر قبل أي استيراد | [source](FEATURE_MATRIX_V7_AR.md) |
| MINI-SESSION | F02 | جلسة مصغرة عائمة | P0 | 43 | — | حفظ ثم إعادة تحميل لا يفقد المجموعة أو البيانات | [source](FEATURE_MATRIX_V7_AR.md) |
| REUSE-SETS | F03 | نسخ آخر مجموعات | P0 | 42 | — | بديل A03 لا يستورد وزن الأصل بلا تمييز | [source](FEATURE_MATRIX_V7_AR.md) |
| VARIANT-TYPE | F03 | أنواع تسجيل مختلفة | P0 | 42 | — | B04 يتيح الثواني؛ مطاط لا يتحول لكيلوجرام وهمي | [source](FEATURE_MATRIX_V7_AR.md) |
| SAFARI-BRIDGE | F14 | نقل التخزين على آيفون | P0 | 29 | — | التجربة على هاتف حقيقي لا تفقد ولا تكرر السجلات | [source](FEATURE_MATRIX_V7_AR.md) |
| SAFE-SWAP | F01 | تبديل دون تجاوز الأعراض | P0 | 44 | — | لا تُعد الحصة مكتملة ولا يخرج وصف علاجي | [source](FEATURE_MATRIX_V7_AR.md) |
| READINESS-LITE | F04 | كيف تشعرين اليوم؟ | P1 | 30 | — | نقص البيانات يعرض غير كافٍ | [source](FEATURE_MATRIX_V7_AR.md) |
| SESSION-FEEDBACK | F04 | مراجعة صعوبة بسيطة | P1 | 30 | — | لا يرفع الوزن تلقائيًا | [source](FEATURE_MATRIX_V7_AR.md) |
| PLAN-DIFF | F06 | موافقة تغيير البرنامج | P1 | 34 | — | رفض التعديل يحفظ النسخة الأصلية | [source](FEATURE_MATRIX_V7_AR.md) |
| EQUIPMENT-CONTEXT | F01 | أدواتي حسب المكان | P1 | 44 | — | بديل يتطلب مطاطًا لا يظهر إن لم يوجد | [source](FEATURE_MATRIX_V7_AR.md) |
| PRAYER-SCHEDULE | F06 | الجدول المرن | P1 | 34 | — | تغيير موعد الحصة لا يكرر سجلاً | [source](FEATURE_MATRIX_V7_AR.md) |
| WEEKLY-PLAN | F06 | خريطة ممارسة أسبوعية | P1 | 34 | — | الراحة ليست خسارة سلسلة | [source](FEATURE_MATRIX_V7_AR.md) |
| FOCUS-LOG | F02 | وضع تسجيل المجموعة | P1 | 43 | — | قياس الوقت واللمسات مقابل الواجهة الحالية | [source](FEATURE_MATRIX_V7_AR.md) |
| QUICK-TIMER | F02 | مؤقت مخصص | P1 | 43 | — | اختبار iPhone PWA قبل ادعاء تشغيل صوت بالخلفية | [source](FEATURE_MATRIX_V7_AR.md) |
| SHORT-MODE | F07 | جلسة قصيرة موثقة | P1 | 35 | — | يظل احتساب الإنجاز صادقًا | [source](FEATURE_MATRIX_V7_AR.md) |
| EXPERT-REPORT | F09 | تقرير للمدربة | P1 | 60 | — | لا مشاركة تلقائية | [source](FEATURE_MATRIX_V7_AR.md) |
| MEAL-PROVENANCE | F11 | بطاقة إثبات التغذية | P1 | 54 | — | القيم غير المراجعة لا تعرض موثّقة | [source](FEATURE_MATRIX_V7_AR.md) |
| RAMADAN-OPT | F06 | نمط رمضان الاختياري | P2 | 34 | — | لا وصف شدة/صيام طبي تلقائي | [source](FEATURE_MATRIX_V7_AR.md) |
| NATURAL-ARABIC | F15 | تدقيق لغة الواجهة | P2 | 66 | — | اختبار فهم 5 مستخدمات | [source](FEATURE_MATRIX_V7_AR.md) |
| RECOVERY-TRENDS | F13 | اتجاهات تعافٍ وصفية | P2 | 58 | — | لا تشخيص ولا تفسير طبي | [source](FEATURE_MATRIX_V7_AR.md) |
| SELECTIVE-EXPORT | F09 | تصدير محدد الخصوصية | P2 | 60 | — | الملف يحتوي الحقول المحددة فقط | [source](FEATURE_MATRIX_V7_AR.md) |
| R4-01 | F06 | Weekly adherence, not daily streak | P0 | 34 | — | الأسبوع ذو حصتين مخططتين وحصتين مكتملتين = 2/2 دون احتساب أيام الراحة غيابًا | [source](FEATURE_MATRIX_V7_AR.md) |
| R4-02 | F06 | Pause, Skip, Archive states | P0 | 34 | — | Off Mode لا يرسل تحفيز إنجاز عند إيقاف الخطة، والعودة لا تمس السجلات القديمة | [source](FEATURE_MATRIX_V7_AR.md) |
| R4-03 | F10 | Safe fast logging | P0 | 51 | — | النسخ يعمل فقط لنفس نسخة الحركة، ويُحفظ دون تعديلات صامتة | [source](FEATURE_MATRIX_V7_AR.md) |
| R4-04 | F11 | Allergen-at-ingredient gate | P0 | 54 | — | اسم وصفة خالٍ من الكلمات لكن مكون مجهول لا يعرض «آمن» | [source](FEATURE_MATRIX_V7_AR.md) |
| R4-05 | F12 | Food amount consistency | P0 | 53 | — | وصفة 2 حصص تُدمج مع وصفة أخرى بنفس المكوّن والوحدة دون ازدواج ولا تقريب مضلل | [source](FEATURE_MATRIX_V7_AR.md) |
| R4-06 | F04 | No Fake Readiness Scores | P0 | 30 | — | دون أجهزة ومقاييس حيوية لا يظهر رقم Recovery أو تشخيص حالة الجسم | [source](FEATURE_MATRIX_V7_AR.md) |
| R4-07 | F14 | Storage-Context Awareness | P0 | 29 | — | نقل سجل تجريبي بين سياقي Safari وHome Screen من دون تكرار أو فقد | [source](FEATURE_MATRIX_V7_AR.md) |
| R4-08 | F02 | One-step Workout Focus | P1 | 43 | — | بدء جلسة، 3 مجموعات، الانتقال للتبويبات والعودة دون فقد السياق | [source](FEATURE_MATRIX_V7_AR.md) |
| R4-09 | F13 | Progress With Confidence | P1 | 58 | — | 3 ملاحظات فقط => البيانات غير كافية بدل حكم على سبب الألم | [source](FEATURE_MATRIX_V7_AR.md) |
| R4-10 | F07 | Recovery week option | P1 | 35 | — | الراحة 7 أيام لا ترفع شدة الممارسة في مؤشر الـ26 أسبوعًا | [source](FEATURE_MATRIX_V7_AR.md) |
| R4-11 | F01 | Mobility library taxonomy | P1 | 44 | — | فلتر أرضي لا يعرض تمارين وقوف؛ تحذير يمنع اعتباره تأهيلًا موصوفًا | [source](FEATURE_MATRIX_V7_AR.md) |
| R4-12 | F12 | Kitchen Pantry V1 | P1 | 53 | — | موجود في المخزون لا يتكرر في قائمة المشتريات إلا بطلب | [source](FEATURE_MATRIX_V7_AR.md) |
| R4-13 | F11 | Recipe Plans Preserve Allergens | P1 | 54 | — | الوصفة السابقة ذات مكوّن مجهول تظهر تنبيه مراجعة جديد | [source](FEATURE_MATRIX_V7_AR.md) |
| R4-14 | F10 | Choose Logging Mode | P1 | 51 | — | المدخلات الناقصة تبقى null لا تتحول إلى صفر | [source](FEATURE_MATRIX_V7_AR.md) |
| R4-15 | F07 | Good Return Experience | P2 | 35 | — | لا تحذف الإنجازات أو ترفع الأحمال تلقائيًا | [source](FEATURE_MATRIX_V7_AR.md) |
| R4-16 | F15 | Low-data Habitual Test Plan | P2 | 66 | — | يسجل baseline ثم 5–8 تجارب استكشافية دون تعميم النتائج | [source](FEATURE_MATRIX_V7_AR.md) |
| R4-17 | F13 | Insight Opt-out | P2 | 58 | — | تغيير وضع العرض لا يحذف السجلات | [source](FEATURE_MATRIX_V7_AR.md) |
| R4-18 | F16 | Wearable Sync Feasibility | P3 | 17 | — | وثيقة صلاحيات وخصوصية وأجهزة ومصدر بيانات قبل البدء | [source](FEATURE_MATRIX_V7_AR.md) |
| FIT-001 | F14 | ترحيل المخطط مع إصدارات واضحة | review | 28 | — | Historical status only: تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-002 | F14 | نسخ احتياطية وفحص الاستعادة | review | 29 | — | Historical status only: تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-003 | F14 | التراجع عن التعديلات | review | 29 | — | Historical status only: تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-004 | F04 | تقييم أعراض قبل وبعد التدريب | review | 30 | — | Historical status only: موجود في الكود + اختبار محلي مناسب; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-005 | F04 | تعليمات الطبيبة والحركات المؤجلة | review | 30 | — | Historical status only: موجود في الكود + اختبار محلي مناسب; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-006 | F14 | تأكيد نجاح الحفظ | review | 28 | — | Historical status only: موجود في الكود + اختبار محلي مناسب; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-007 | F14 | تقييم IndexedDB | review | 25 | — | Historical status only: غير منفذ؛ يحتاج مصدر خارجي أو بنية جديدة أو موافقة; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-008 | F07 | تمييز جلسة جزئية ومكتملة | review | 41 | — | Historical status only: موجود في الكود + اختبار محلي مناسب; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-009 | F03 | تسجيل كل مجموعة بالتفصيل | review | 42 | — | Historical status only: موجود في الكود + اختبار محلي مناسب; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-010 | F07 | تدرج بحسب الحصص لا الوقت فقط | review | 57 | — | Historical status only: تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-011 | F06 | جدولة A/B حسب الأيام | review | 34 | — | Historical status only: تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-012 | F01 | بدائل أسهل لكل تمرين | review | 44 | — | Historical status only: تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-013 | F05 | التحقق من روابط فيديو دقيقة | review | 45 | — | Historical status only: غير منفذ؛ يحتاج مصدر خارجي أو بنية جديدة أو موافقة; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-014 | F04 | الاستجابة لتغير الأعراض | review | 30 | — | Historical status only: موجود في الكود + اختبار محلي مناسب; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-015 | F03 | مقارنة تقدم القوة | review | 57 | — | Historical status only: موجود في الكود + اختبار محلي مناسب; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-016 | F07 | تسجيل المشي منفصلًا | review | 46 | — | Historical status only: موجود في الكود + اختبار محلي مناسب; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-017 | F08 | مكتبة البيلاتس المعتمدة | review | 48 | — | Historical status only: غير منفذ؛ يحتاج مصدر خارجي أو بنية جديدة أو موافقة; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-018 | F11 | مراجعة مسببات الحساسية | review | 54 | — | Historical status only: تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-019 | F11 | مصادر غذائية متحققة | review | 50 | — | Historical status only: تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-020 | F10 | وجبتان وسناك اختياري | review | 51 | — | Historical status only: موجود في الكود + اختبار محلي مناسب; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-021 | F12 | حساب حصص الوصفات | review | 52 | — | Historical status only: موجود في الكود + اختبار محلي مناسب; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-022 | F11 | مقارنة الماكروز بالطاقة | review | 50 | — | Historical status only: تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-023 | F10 | مرونة أيام الكارب | review | 34 | — | Historical status only: تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-024 | F13 | متوسط السعرات للأيام المسجلة | review | 56 | — | Historical status only: موجود في الكود + اختبار محلي مناسب; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-025 | F10 | تكرار الوجبات المعتادة | review | 51 | — | Historical status only: موجود في الكود + اختبار محلي مناسب; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-026 | F12 | قائمة مشتريات وبدائل | review | 53 | — | Historical status only: تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-027 | F13 | إخفاء السعرات اختياريًا | review | 56 | — | Historical status only: تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-028 | F13 | اتجاه الوزن بدل التقلب | review | 56 | — | Historical status only: موجود في الكود + اختبار محلي مناسب; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-029 | F13 | قياسات تقدم غير الميزان | review | 56 | — | Historical status only: موجود في الكود + اختبار محلي مناسب; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-030 | F13 | متابعة طاقة ونوم وتعافٍ | review | 58 | — | Historical status only: تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-031 | F07 | وضع يوم هادئ أو راحة | review | 31 | — | Historical status only: موجود في الكود + اختبار محلي مناسب; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-032 | F13 | مراجعة أسبوعية محفوظة | review | 59 | — | Historical status only: موجود في الكود + اختبار محلي مناسب; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-033 | F13 | رسوم ومؤشرات تفسيرية | review | 57 | — | Historical status only: تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-034 | F06 | خطة اليوم الموحدة | review | 39 | — | Historical status only: موجود في الكود + اختبار محلي مناسب; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-035 | F13 | خريطة تقدم تفاعلية | review | 38 | — | Historical status only: تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-036 | F07 | رسائل تحفيز دون لوم | review | 32 | — | Historical status only: موجود في الكود + اختبار محلي مناسب; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-037 | F01 | عرض جميع الوصفات والتمارين | review | 44 | — | Historical status only: موجود في الكود + اختبار محلي مناسب; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-038 | F14 | تعديل السجلات القديمة | review | 28 | — | Historical status only: تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-039 | F15 | تدقيق WCAG وVoiceOver | review | 67 | — | Historical status only: تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-040 | F13 | مكافآت غير عقابية | review | 38 | — | Historical status only: موجود في الكود + اختبار محلي مناسب; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-041 | F02 | تجربة أول استخدام | review | 39 | — | Historical status only: موجود في الكود + اختبار محلي مناسب; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-042 | F14 | اختبار نقل البيانات على آيفون | review | 65 | — | Historical status only: غير منفذ؛ يحتاج مصدر خارجي أو بنية جديدة أو موافقة; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-043 | F14 | معاينة مستقلة عن تخزين الإنتاج | review | 65 | — | Historical status only: غير منفذ؛ يحتاج مصدر خارجي أو بنية جديدة أو موافقة; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-044 | F15 | اختبارات E2E متعددة الأجهزة | review | 63 | — | Historical status only: تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-045 | F14 | تحديث PWA وفق موافقة المستخدم | review | 65 | — | Historical status only: تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-046 | F14 | وحدات مستقلة من الكود | review | 27 | — | Historical status only: تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-047 | F09 | سياسة خصوصية بسيطة | review | 60 | — | Historical status only: موجود في الكود + اختبار محلي مناسب; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-048 | F16 | مزامنة أجهزة اختيارية | review | 17 | — | Historical status only: غير منفذ؛ يحتاج مصدر خارجي أو بنية جديدة أو موافقة; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| FIT-049 | F16 | تكامل صحي بإذن المستخدم | review | 17 | — | Historical status only: غير منفذ؛ يحتاج مصدر خارجي أو بنية جديدة أو موافقة; derive independent acceptance before build | [source](BASELINE_AUDIT_V7_AR.md) |
| PSY-01 | F02 | بدء أصغر خطوة | P1 | 39 | FIT-041; WF-D04 | اختيار البدء/التأجيل/الراحة بلا عقوبة؛ قياس إتمام مهمة البدء فقط | [source](BEHAVIOR_TRACE_V7_AR.md) |
| PSY-02 | F07 | المرونة ضد الكمالية | P1 | 31,41 | FIT-008; FIT-031; WF-D08 | الحصة الجزئية تحفظ كما هي؛ العودة بعد الانقطاع دون تصفير أو عتاب | [source](BEHAVIOR_TRACE_V7_AR.md) |
| PSY-03 | F04 | دعم الكفاءة الذاتية | P1 | 30,40 | FIT-036; WF-C05 | إرشادات اختيارية وخيارات مستقلة؛ لا درجة جاهزية طبية ولا تطمين علاجي | [source](BEHAVIOR_TRACE_V7_AR.md) |
| PSY-04 | F04 | الخوف من الحركة | P0 | 30 | FIT-004; FIT-014; WF-D07 | إيقاف عند مؤشرات التحذير؛ لا توصية تعرض علاجي تلقائي | [source](BEHAVIOR_TRACE_V7_AR.md) |
| PSY-05 | F06 | اختيار ذاتي | P1 | 34,39 | FIT-034; WF-C17 | تغيير خطة اليوم قابل للتراجع، ولا يفرض هدفًا بعد الراحة | [source](BEHAVIOR_TRACE_V7_AR.md) |
| BEH-01 | F06 | التخطيط الشرطي | P2 | 34 | FIT-011; R4-02 | اختيار إذا/فإن محلي اختياري، حذف التذكير دون فقدان سجلات | [source](BEHAVIOR_TRACE_V7_AR.md) |
| BEH-02 | F07 | العودة بعد الانقطاع | P1 | 31 | FIT-031; R4-10 | العودة في الوضع الطبيعي/الهادئ/راحة وفق اختيار المستخدم، دون تعويض | [source](BEHAVIOR_TRACE_V7_AR.md) |
| BEH-03 | F02 | تقليل الاحتكاك | P1 | 39,43 | FIT-041; WF-D04 | مسار بدء واضح خلال خطوات قليلة؛ لا فقدان بيانات عند إلغاء البدء | [source](BEHAVIOR_TRACE_V7_AR.md) |
| BEH-04 | F10 | تنظيم الأكل الانفعالي | P1 | 50,51 | FIT-020; WF-D17 | تسجيل شعور اختياري بلا تشخيص ولا سعرات إلزامية أو لوم | [source](BEHAVIOR_TRACE_V7_AR.md) |
| BEH-05 | F13 | مراجعة ذاتية لطيفة | P2 | 59 | FIT-032; WF-C15 | انعكاس أسبوعي اختياري ومجهول/مفقود منفصل عن صفر | [source](BEHAVIOR_TRACE_V7_AR.md) |
| JOY-01 | F13 | توقع المتعة وتقييمها | P1 | 58,59 | FIT-032; R4-09 | اختيار مدى الاستمتاع اختياري قبل/بعد، لا يتحول إلى مقياس طبي | [source](BEHAVIOR_TRACE_V7_AR.md) |
| JOY-02 | F01 | التنوع الآمن | P1 | 44 | FIT-012; WF-C01 | البديل يوضح عدم التكافؤ ولا يتجاوز تعليمات المختصة | [source](BEHAVIOR_TRACE_V7_AR.md) |
| JOY-03 | F13 | مكافآت غير مرتبطة بالوزن | P1 | 38 | FIT-040; WF-C15 | لا شارة لنزول الوزن؛ شارات للبدء/العودة/الراحة دون سلاسل قسرية | [source](BEHAVIOR_TRACE_V7_AR.md) |
| JOY-04 | F15 | تحكم في الإشعارات | P2 | 32,67 | FIT-039; R4-16 | اختيار/إيقاف بلا ضغط أو تنبيهات ذنب؛ احترام الوصول | [source](BEHAVIOR_TRACE_V7_AR.md) |
| JOY-05 | F08 | خيارات نشاط ممتع | P2 | 48 | FIT-017; WF-D14 | مكتبة مصنفة، لا توصيات جرعة أو فيديو غير مطابق | [source](BEHAVIOR_TRACE_V7_AR.md) |
| JOY-06 | F07 | احتفال بالراحة | P1 | 31,38 | FIT-031; WF-D08 | الراحة خيار كامل لا يخصم نقاطًا ولا يخلق واجب تعويض | [source](BEHAVIOR_TRACE_V7_AR.md) |

## Consolidation decisions
- F02: one start/resume workflow for FIT-041, PSY-01 and BEH-03; separate choice, friction and persistence tests.
- F07: one existing mode contract for FIT-031, PSY-02, BEH-02 and JOY-06; preserve partial work, no punishment or compensatory load.
- F01: one variant catalogue and session choice, FIT-012/JOY-02; never bypass medical limits.
- F10: one meal journal, FIT-020/BEH-04; optional feeling and unknown energy, no restriction.
- F13: existing reflection and rewards foundations, FIT-032/BEH-05/JOY-01 and FIT-040/JOY-03. Independent opt-outs and non-weight milestones.
- F14: one persistence pipeline; legacy schema compatibility and rollback tests first.
- Remaining semantic duplicate review and exact code/test coverage are V7-009 design inputs. Never delete original IDs or claim feature implemented based on family membership.
