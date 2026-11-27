# WEJDAN FIT — V7 competitor traceability matrix (R1–R4)
27 Nov 2026 · archived-document extraction, not new external source verification.
Baseline: `55f92d7248e424b1a50dddb5366076ffbb291fd4` · 86 historical requirements (22+26+20+18), grouped into 16 proposed capability families. Groups are planning clusters, not claims of 16 equivalent features or completion. Cross-cutting items remain separately testable; each legacy acceptance condition is retained. V7 run numbers are anchors, not permission to skip dependencies. FIT-001..049 and behavioral PSY/BEH/JOY consolidation remain next work. P3 camera/cloud/wearable features remain research-only absent explicit authorization and architecture.
 
## Families
| ID | Capability | Primary V7 run | Historical IDs |
|---|---|---|---|
| F01 | بدائل آمنة وسياق المعدات | 44 | WF-C01, WF-C03, WF-C08, WF-C19, WF-D01, WF-D02, WF-D13, SAFE-SWAP, EQUIPMENT-CONTEXT, R4-11 |
| F02 | تمرين مركز واستئناف ومؤقت | 43 | WF-C02, WF-C16, WF-D04, WF-D10, WF-D23, MINI-SESSION, FOCUS-LOG, QUICK-TIMER, R4-08 |
| F03 | أداء سابق وأنواع التسجيل ومقارنة الحركة | 42 | WF-C04, WF-D05, WF-D09, REUSE-SETS, VARIANT-TYPE |
| F04 | سلامة الحركة والتقييم الشعوري | 30 | WF-C05, WF-C18, WF-D07, WF-D11, READINESS-LITE, SESSION-FEEDBACK, R4-06 |
| F05 | مطابقة الفيديو ومصادر الحركة | 45 | WF-C06, WF-D06, WF-D24, WF-D26 |
| F06 | تخطيط أسبوعي ونسخ الخطط ومعاينة التغيير | 34 | WF-C09, WF-C17, WF-D12, PLAN-DIFF, PRAYER-SCHEDULE, WEEKLY-PLAN, R4-01, R4-02, RAMADAN-OPT |
| F07 | حصة مناسبة للوقت، راحة، تدرج وعودة | 35 | WF-C07, WF-C10, WF-D03, WF-D08, WF-D15, WF-D25, SHORT-MODE, R4-10, R4-15 |
| F08 | بيلاتس | 48 | WF-D14 |
| F09 | تصدير انتقائي محلي | 60 | WF-C11, WF-D16, EXPERT-REPORT, SELECTIVE-EXPORT |
| F10 | تخطيط وتسجيل الطعام المرن | 51 | WF-C12, WF-D17, WF-D18, R4-03, R4-14 |
| F11 | إثبات المغذيات والحساسية | 54 | WF-C13, MEAL-PROVENANCE, R4-04, R4-13 |
| F12 | الحصص والمطبخ والمشتريات | 53 | WF-C14, WF-D19, R4-05, R4-12 |
| F13 | المراجعة والاتجاهات والاختيارات | 58 | WF-C15, RECOVERY-TRENDS, R4-09, R4-17 |
| F14 | حفظ واستعادة وسياق Safari | 29 | WF-D20, WF-D21, SAFARI-BRIDGE, R4-07 |
| F15 | اختبار UX واللغة | 66 | WF-D22, NATURAL-ARABIC, R4-16 |
| F16 | ميزات مستقبلية تحتاج قرارًا منفصلًا | 17 | WF-C20, WF-C21, WF-C22, R4-18 |

## Full traceability (original acceptance conditions retained)
| Historical ID | Priority as originally written | Requirement | Family | Source | Original acceptance |
|---|---|---|---|---|---|
| WF-C01 | P0 | Smart Swap حسب السبب | F01 | [R1](COMPETITOR_RESEARCH_2026_AR.md) | اختيار بديل آمن في جلسة تجريبية وتثبيت سجله بعد إعادة الفتح |
| WF-C02 | P0 | Exercise Flow — خطوة واحدة | F02 | [R1](COMPETITOR_RESEARCH_2026_AR.md) | إكمال مجموعة واحدة والعودة بلا فقد أو إكمال زائف |
| WF-C03 | P0 | My Equipment Profiles | F01 | [R1](COMPETITOR_RESEARCH_2026_AR.md) | عند إلغاء المطاط لا تُقترح البدائل التي تتطلبه |
| WF-C04 | P0 | Variant-safe Performance | F03 | [R1](COMPETITOR_RESEARCH_2026_AR.md) | تاريخ A03 وبديله لا يختلطان |
| WF-C05 | P0 | Pain & Difficulty Check | F04 | [R1](COMPETITOR_RESEARCH_2026_AR.md) | سجل أعراض جديد لا يؤدي لاستمرار جلسة مفروضة |
| WF-C06 | P0 | Exercise Video Trust Badges | F05 | [R1](COMPETITOR_RESEARCH_2026_AR.md) | بديل دون فيديو لا يرث فيديو الأصل |
| WF-C07 | P1 | Time-Fit Sessions | F07 | [R1](COMPETITOR_RESEARCH_2026_AR.md) | لا يُحسب 5 دقائق بدل جلسة كاملة بغير إذن |
| WF-C08 | P1 | Pilates Board Mode | F01 | [R1](COMPETITOR_RESEARCH_2026_AR.md) | وضع البيلاتس لا يعرض حركات محظورة |
| WF-C09 | P1 | Weekly Flexible Planner | F06 | [R1](COMPETITOR_RESEARCH_2026_AR.md) | تغيير يوم يحفظ الخطة بلا تكرار سجلات |
| WF-C10 | P1 | Gentle Activity Path | F07 | [R1](COMPETITOR_RESEARCH_2026_AR.md) | يوم راحة معتمد لا يكسر عرض الإنجاز |
| WF-C11 | P1 | Coach Notes Sharing | F09 | [R1](COMPETITOR_RESEARCH_2026_AR.md) | تصدير ملف واضح خالٍ من معلومات لم توافق عليها المستخدمة |
| WF-C12 | P1 | Two-Meal Smart Planner | F10 | [R1](COMPETITOR_RESEARCH_2026_AR.md) | تخطيط يومي دون اقتراح منتج محظور أو مكون مجهول كأنه آمن |
| WF-C13 | P1 | Nutrient Provenance | F11 | [R1](COMPETITOR_RESEARCH_2026_AR.md) | القيمة مجهولة تظهر مجهولة وليست صفرًا |
| WF-C14 | P1 | Dynamic Grocery List | F12 | [R1](COMPETITOR_RESEARCH_2026_AR.md) | نصف الحصة يخفض الغرامات ولا يضيف عنصرًا مكررًا |
| WF-C15 | P1 | Weekly Reflection | F13 | [R1](COMPETITOR_RESEARCH_2026_AR.md) | لا تحسب الأيام غير المدخلة بصفر |
| WF-C16 | P2 | Hands-Free Workout | F02 | [R1](COMPETITOR_RESEARCH_2026_AR.md) | اختبار تجربة إرشاد صوتي بلا لمس على Safari |
| WF-C17 | P2 | Favourite Workout Templates | F06 | [R1](COMPETITOR_RESEARCH_2026_AR.md) | تعديل قالب لا يغير الحصص السابقة |
| WF-C18 | P2 | Simpler Feedback After Exercise | F04 | [R1](COMPETITOR_RESEARCH_2026_AR.md) | تغير حالة النشاط دون فقد المجاميع |
| WF-C19 | P2 | Smart Focus & Filters | F01 | [R1](COMPETITOR_RESEARCH_2026_AR.md) | فلتر جالس يعيد فقط حركات بوسم جالس |
| WF-C20 | P3 | Camera Form Feedback | F16 | [R1](COMPETITOR_RESEARCH_2026_AR.md) | لا تشغيل قبل اختبارات السلامة والخصوصية |
| WF-C21 | P3 | Cross-device Sync | F16 | [R1](COMPETITOR_RESEARCH_2026_AR.md) | النسخ لا تتعارض ولا تنشر البيانات في GitHub |
| WF-C22 | P3 | Health Sensor Integration | F16 | [R1](COMPETITOR_RESEARCH_2026_AR.md) | إذن واضح وإمكانية الإلغاء والحد الأدنى من البيانات |
| WF-D01 | P0 | Exercise Skill Graph | F01 | [R2](COMPETITOR_RESEARCH_DEEP_DIVE_2026_AR.md) | رسم شجرة A01 يعرض 3 مستويات ووسم التكافؤ لكل خيار |
| WF-D02 | P0 | My Workout Contexts | F01 | [R2](COMPETITOR_RESEARCH_DEEP_DIVE_2026_AR.md) | بديل لا يناسب الأدوات لا يُقترح ضمن السياق المختار |
| WF-D03 | P0 | Adapt Today's Session | F07 | [R2](COMPETITOR_RESEARCH_DEEP_DIVE_2026_AR.md) | ضيق الوقت يعرض مختصرًا مرجعيًا لا يحدد حصة كاملة زائفة |
| WF-D04 | P0 | Resume Where I Left Off | F02 | [R2](COMPETITOR_RESEARCH_DEEP_DIVE_2026_AR.md) | حفظ مجموعة ثم إعادة فتح التطبيق يعيد آخر صفحة ومجموعة |
| WF-D05 | P0 | Set Type Taxonomy | F03 | [R2](COMPETITOR_RESEARCH_DEEP_DIVE_2026_AR.md) | تمرين B04 يسجل الثواني، A03 يسجل لون/مستوى المطاط |
| WF-D06 | P0 | Source+Video Audit | F05 | [R2](COMPETITOR_RESEARCH_DEEP_DIVE_2026_AR.md) | لا يتم تشغيل فيديو الأصل عند اختيار variant غير مطابق |
| WF-D07 | P1 | Manual Readiness Gate | F04 | [R2](COMPETITOR_RESEARCH_DEEP_DIVE_2026_AR.md) | بدون معلومات كافية يُظهر غير كافية لا توصية تلقائية |
| WF-D08 | P1 | Skill Progress Narrative | F07 | [R2](COMPETITOR_RESEARCH_DEEP_DIVE_2026_AR.md) | تعرض بطاقة A01 انتقال المهارة لا هدف وزن وحسب |
| WF-D09 | P1 | My Exercise Notes | F03 | [R2](COMPETITOR_RESEARCH_DEEP_DIVE_2026_AR.md) | ملاحظة لبديل A03 لا تظهر على الأصل |
| WF-D10 | P1 | Rest Presets Per Move | F02 | [R2](COMPETITOR_RESEARCH_DEEP_DIVE_2026_AR.md) | A01=90 ثانية وA05=60 تحفظان مستقلين |
| WF-D11 | P1 | Quick End-of-Exercise Feedback | F04 | [R2](COMPETITOR_RESEARCH_DEEP_DIVE_2026_AR.md) | تقييم في أقل من ثلاث نقرات ويحفظ مع variant |
| WF-D12 | P1 | Plan Version History | F06 | [R2](COMPETITOR_RESEARCH_DEEP_DIVE_2026_AR.md) | تغيير قالب B لا يعدل سجلات الأسبوع الماضي |
| WF-D13 | P1 | Exercise Explorer Filters | F01 | [R2](COMPETITOR_RESEARCH_DEEP_DIVE_2026_AR.md) | بحث جالس يعيد فقط الحركات الموسومة جالسة |
| WF-D14 | P1 | Pilates Class Playlist | F08 | [R2](COMPETITOR_RESEARCH_DEEP_DIVE_2026_AR.md) | كل جلسة تتضمن مستوى ووقتًا وحركات معتمدة لا توليدًا عشوائيًا |
| WF-D15 | P1 | Movement Snack (5 min) | F07 | [R2](COMPETITOR_RESEARCH_DEEP_DIVE_2026_AR.md) | يمكن اختيار الراحة بدون نقصان إنجاز |
| WF-D16 | P1 | Coach Export Brief | F09 | [R2](COMPETITOR_RESEARCH_DEEP_DIVE_2026_AR.md) | يحدد سجل 7 أيام وحقول المشاركة ويصدره محليًا |
| WF-D17 | P1 | Meal Variety Preference | F10 | [R2](COMPETITOR_RESEARCH_DEEP_DIVE_2026_AR.md) | الخطة تتذكر تفضيل قلة التنوع دون تبديل مفاجئ |
| WF-D18 | P1 | Simple Food vs Recipe | F10 | [R2](COMPETITOR_RESEARCH_DEEP_DIVE_2026_AR.md) | إمكان إضافة دجاج+أرز كوجبة دون فرض وصفة |
| WF-D19 | P1 | Shopping Weeks/Quantities | F12 | [R2](COMPETITOR_RESEARCH_DEEP_DIVE_2026_AR.md) | تعديل حصتين إلى حصة واحدة يحدث غرامات القائمة |
| WF-D20 | P0 | Safari vs Home Screen Data Check | F14 | [R2](COMPETITOR_RESEARCH_DEEP_DIVE_2026_AR.md) | تصدير من Safari ثم استيراد داخل الأيقونة يعيد السجلات دون ازدواج |
| WF-D21 | P0 | PWA Persistent Backup Test | F14 | [R2](COMPETITOR_RESEARCH_DEEP_DIVE_2026_AR.md) | تحديث نسختين متتاليتين مع بقاء سجلين وضبط الضوء/الداكن |
| WF-D22 | P1 | Research-led Logging UX | F15 | [R2](COMPETITOR_RESEARCH_DEEP_DIVE_2026_AR.md) | تحديد baseline قبل/بعد وقياس task success, errors, taps |
| WF-D23 | P2 | Voice Guidance (Opt-in) | F02 | [R2](COMPETITOR_RESEARCH_DEEP_DIVE_2026_AR.md) | اختبار النطق على Safari قبل وصفه دعمًا مؤكدًا |
| WF-D24 | P2 | Review of Personal Exercise Library | F05 | [R2](COMPETITOR_RESEARCH_DEEP_DIVE_2026_AR.md) | الإضافة تظهر 'شخصية غير مراجعة' ولا تدخل A/B إلا بموافقة |
| WF-D25 | P2 | My Recovery Space | F07 | [R2](COMPETITOR_RESEARCH_DEEP_DIVE_2026_AR.md) | اختيار راحة لا يعيد الحسابات أو يرفع الشدة |
| WF-D26 | P3 | Licensed Movement Metadata | F05 | [R2](COMPETITOR_RESEARCH_DEEP_DIVE_2026_AR.md) | وجود دليل ترخيص وقواعد التكلفة والمصدر قبل أي استيراد |
| MINI-SESSION | P0 | جلسة مصغرة عائمة | F02 | [R3](COMPETITOR_RESEARCH_ROUND_03_AR.md) | حفظ ثم إعادة تحميل لا يفقد المجموعة أو البيانات |
| REUSE-SETS | P0 | نسخ آخر مجموعات | F03 | [R3](COMPETITOR_RESEARCH_ROUND_03_AR.md) | بديل A03 لا يستورد وزن الأصل بلا تمييز |
| VARIANT-TYPE | P0 | أنواع تسجيل مختلفة | F03 | [R3](COMPETITOR_RESEARCH_ROUND_03_AR.md) | B04 يتيح الثواني؛ مطاط لا يتحول لكيلوجرام وهمي |
| SAFARI-BRIDGE | P0 | نقل التخزين على آيفون | F14 | [R3](COMPETITOR_RESEARCH_ROUND_03_AR.md) | التجربة على هاتف حقيقي لا تفقد ولا تكرر السجلات |
| SAFE-SWAP | P0 | تبديل دون تجاوز الأعراض | F01 | [R3](COMPETITOR_RESEARCH_ROUND_03_AR.md) | لا تُعد الحصة مكتملة ولا يخرج وصف علاجي |
| READINESS-LITE | P1 | كيف تشعرين اليوم؟ | F04 | [R3](COMPETITOR_RESEARCH_ROUND_03_AR.md) | نقص البيانات يعرض غير كافٍ |
| SESSION-FEEDBACK | P1 | مراجعة صعوبة بسيطة | F04 | [R3](COMPETITOR_RESEARCH_ROUND_03_AR.md) | لا يرفع الوزن تلقائيًا |
| PLAN-DIFF | P1 | موافقة تغيير البرنامج | F06 | [R3](COMPETITOR_RESEARCH_ROUND_03_AR.md) | رفض التعديل يحفظ النسخة الأصلية |
| EQUIPMENT-CONTEXT | P1 | أدواتي حسب المكان | F01 | [R3](COMPETITOR_RESEARCH_ROUND_03_AR.md) | بديل يتطلب مطاطًا لا يظهر إن لم يوجد |
| PRAYER-SCHEDULE | P1 | الجدول المرن | F06 | [R3](COMPETITOR_RESEARCH_ROUND_03_AR.md) | تغيير موعد الحصة لا يكرر سجلاً |
| WEEKLY-PLAN | P1 | خريطة ممارسة أسبوعية | F06 | [R3](COMPETITOR_RESEARCH_ROUND_03_AR.md) | الراحة ليست خسارة سلسلة |
| FOCUS-LOG | P1 | وضع تسجيل المجموعة | F02 | [R3](COMPETITOR_RESEARCH_ROUND_03_AR.md) | قياس الوقت واللمسات مقابل الواجهة الحالية |
| QUICK-TIMER | P1 | مؤقت مخصص | F02 | [R3](COMPETITOR_RESEARCH_ROUND_03_AR.md) | اختبار iPhone PWA قبل ادعاء تشغيل صوت بالخلفية |
| SHORT-MODE | P1 | جلسة قصيرة موثقة | F07 | [R3](COMPETITOR_RESEARCH_ROUND_03_AR.md) | يظل احتساب الإنجاز صادقًا |
| EXPERT-REPORT | P1 | تقرير للمدربة | F09 | [R3](COMPETITOR_RESEARCH_ROUND_03_AR.md) | لا مشاركة تلقائية |
| MEAL-PROVENANCE | P1 | بطاقة إثبات التغذية | F11 | [R3](COMPETITOR_RESEARCH_ROUND_03_AR.md) | القيم غير المراجعة لا تعرض موثّقة |
| RAMADAN-OPT | P2 | نمط رمضان الاختياري | F06 | [R3](COMPETITOR_RESEARCH_ROUND_03_AR.md) | لا وصف شدة/صيام طبي تلقائي |
| NATURAL-ARABIC | P2 | تدقيق لغة الواجهة | F15 | [R3](COMPETITOR_RESEARCH_ROUND_03_AR.md) | اختبار فهم 5 مستخدمات |
| RECOVERY-TRENDS | P2 | اتجاهات تعافٍ وصفية | F13 | [R3](COMPETITOR_RESEARCH_ROUND_03_AR.md) | لا تشخيص ولا تفسير طبي |
| SELECTIVE-EXPORT | P2 | تصدير محدد الخصوصية | F09 | [R3](COMPETITOR_RESEARCH_ROUND_03_AR.md) | الملف يحتوي الحقول المحددة فقط |
| R4-01 | P0 | Weekly adherence, not daily streak | F06 | [R4](COMPETITOR_RESEARCH_ROUND_04_AR.md) | الأسبوع ذو حصتين مخططتين وحصتين مكتملتين = 2/2 دون احتساب أيام الراحة غيابًا |
| R4-02 | P0 | Pause, Skip, Archive states | F06 | [R4](COMPETITOR_RESEARCH_ROUND_04_AR.md) | Off Mode لا يرسل تحفيز إنجاز عند إيقاف الخطة، والعودة لا تمس السجلات القديمة |
| R4-03 | P0 | Safe fast logging | F10 | [R4](COMPETITOR_RESEARCH_ROUND_04_AR.md) | النسخ يعمل فقط لنفس نسخة الحركة، ويُحفظ دون تعديلات صامتة |
| R4-04 | P0 | Allergen-at-ingredient gate | F11 | [R4](COMPETITOR_RESEARCH_ROUND_04_AR.md) | اسم وصفة خالٍ من الكلمات لكن مكون مجهول لا يعرض «آمن» |
| R4-05 | P0 | Food amount consistency | F12 | [R4](COMPETITOR_RESEARCH_ROUND_04_AR.md) | وصفة 2 حصص تُدمج مع وصفة أخرى بنفس المكوّن والوحدة دون ازدواج ولا تقريب مضلل |
| R4-06 | P0 | No Fake Readiness Scores | F04 | [R4](COMPETITOR_RESEARCH_ROUND_04_AR.md) | دون أجهزة ومقاييس حيوية لا يظهر رقم Recovery أو تشخيص حالة الجسم |
| R4-07 | P0 | Storage-Context Awareness | F14 | [R4](COMPETITOR_RESEARCH_ROUND_04_AR.md) | نقل سجل تجريبي بين سياقي Safari وHome Screen من دون تكرار أو فقد |
| R4-08 | P1 | One-step Workout Focus | F02 | [R4](COMPETITOR_RESEARCH_ROUND_04_AR.md) | بدء جلسة، 3 مجموعات، الانتقال للتبويبات والعودة دون فقد السياق |
| R4-09 | P1 | Progress With Confidence | F13 | [R4](COMPETITOR_RESEARCH_ROUND_04_AR.md) | 3 ملاحظات فقط => البيانات غير كافية بدل حكم على سبب الألم |
| R4-10 | P1 | Recovery week option | F07 | [R4](COMPETITOR_RESEARCH_ROUND_04_AR.md) | الراحة 7 أيام لا ترفع شدة الممارسة في مؤشر الـ26 أسبوعًا |
| R4-11 | P1 | Mobility library taxonomy | F01 | [R4](COMPETITOR_RESEARCH_ROUND_04_AR.md) | فلتر أرضي لا يعرض تمارين وقوف؛ تحذير يمنع اعتباره تأهيلًا موصوفًا |
| R4-12 | P1 | Kitchen Pantry V1 | F12 | [R4](COMPETITOR_RESEARCH_ROUND_04_AR.md) | موجود في المخزون لا يتكرر في قائمة المشتريات إلا بطلب |
| R4-13 | P1 | Recipe Plans Preserve Allergens | F11 | [R4](COMPETITOR_RESEARCH_ROUND_04_AR.md) | الوصفة السابقة ذات مكوّن مجهول تظهر تنبيه مراجعة جديد |
| R4-14 | P1 | Choose Logging Mode | F10 | [R4](COMPETITOR_RESEARCH_ROUND_04_AR.md) | المدخلات الناقصة تبقى null لا تتحول إلى صفر |
| R4-15 | P2 | Good Return Experience | F07 | [R4](COMPETITOR_RESEARCH_ROUND_04_AR.md) | لا تحذف الإنجازات أو ترفع الأحمال تلقائيًا |
| R4-16 | P2 | Low-data Habitual Test Plan | F15 | [R4](COMPETITOR_RESEARCH_ROUND_04_AR.md) | يسجل baseline ثم 5–8 تجارب استكشافية دون تعميم النتائج |
| R4-17 | P2 | Insight Opt-out | F13 | [R4](COMPETITOR_RESEARCH_ROUND_04_AR.md) | تغيير وضع العرض لا يحذف السجلات |
| R4-18 | P3 | Wearable Sync Feasibility | F16 | [R4](COMPETITOR_RESEARCH_ROUND_04_AR.md) | وثيقة صلاحيات وخصوصية وأجهزة ومصدر بيانات قبل البدء |

## Limits and next gates
- Original priority is not automatically inherited by the whole family. Reassess P0/P1 after baseline code inspection.
- No competitor content copied into the app, no independent competitor trials, and no clinical or usability approval.
- Existing code evidence must be matched to each requirement; do not infer implemented status from the archived proposal.
- Next: incorporate FIT-001..049 and generalized behavioral requirements, verify links and acceptance against current code; separate device-dependent and medical/content blockers. No production merge.
