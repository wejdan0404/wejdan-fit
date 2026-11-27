# WEJDAN FIT — Master Program V7.0
**27 Nov 2026 | planning only | supersedes proposed V5/V6 | 72 runs / 360 target subtasks**
Branch: `feature/masari-safe-merge-v1` · [Draft PR #1](https://github.com/wejdan0404/wejdan-fit/pull/1).
Starting inspected head: `3c4450a5828f2f9b18f6bc0b7dba991e5867406d`. Read current head before every run.
No private health data, personal psychological answers, real logs, reports, or backup JSON may enter this public repo. Use synthetic fixtures. This is a general product specification, not individualized clinical guidance.

## هدف المنتج
Behavioral-first personal fitness PWA: safe movement, autonomy, enjoyment, initiation, flexible nutrition, recovery, continuity, privacy. Preserve existing Arabic RTL, identity and data compatibility. No forced exercise, calorie compensation, streak losses, diagnostic or fabricated physiological readiness scores. No training intensification or clinical clearance based on app inputs. Keep rest, food and essential care unconditionally available. Metrics: task completion, initiation friction, enjoyment, confidence (self-report), return after interruption, data integrity; optional metrics and no promised health effects.

## التنفيذ والجدولة
One hourly run when enabled, 72 scheduled occurrences as a target; 18 research, 8 design, 34 build, 10 QA, 2 reserve. Five scoped subtasks per run (not a guarantee). Research/design are documentation only; build only after evidence, specs, acceptance and dependency gates. Use existing branch only. No main writes, merges, production publish, third-party accounts, paid services or personal data. Stop if access is revoked or branch conflicts; do not overwrite concurrent work. Prefer atomic coherent commits, read current blob SHA/head, inspect actual changes, verify returned commit and relevant tests; if execution environment unavailable use actual CI and mark local/browser tests unverified. Never label mocked results as real. Preserve localStorage key and records, migration tested before any storage change. No automatic fallback to public personal data. No copying without verified licenses. No simulated medical or usability approvals.
Before each run read this plan, PR, relevant docs and latest `docs/PROGRAM_CHECKPOINT_V7.json` if present; initialize checkpoint only if absent. Maintain task IDs V7-001..V7-360 and statuses TODO/IN_PROGRESS/PARTIAL/BLOCKED/DONE. Start from earliest eligible unfinished task, not time or run number alone; don't repeat completed research. Each scheduled run records new evidence, decisions, task status, files, commit, test command/results or unverified blocker, and next eligible IDs. If blocked, work on independent tasks, never skip dependencies. Checkpoint has run ID, plan version, head examined, completed IDs, partial/blocked with reason, next IDs, artifacts and tests. Save checkpoint after verified work. Do not claim DONE without inspectable artifact and appropriate test. Stop adding scope after reserve; report backlog. No duplicate automation or schedule reset. Final human approval required for release.

## Master run register
| Run | Phase | Focus | Five target subtasks |
|---|---|---|---|
| 01 | R | تثبيت نقطة الانطلاق | قراءة الأبحاث الأربع؛ تدقيق PR والكود؛ جرد الاختبارات؛ استخراج القرارات؛ تحديد خط الأساس |
| 02 | R | مصفوفة المنافسين | دمج الجولات؛ إزالة التكرار؛ تدقيق الأدلة؛ مطابقة الكود؛ ترتيب الفجوات |
| 03 | R | السوق المحلي | منافسون سعوديون؛ عرب؛ رمضان؛ ملاءمة اللغة والثقافة؛ مصادر رسمية |
| 04 | R | الدافعية والعادات | SDT؛ COM-B؛ BCT taxonomy؛ كفاءة ذاتية؛ إشارات البداية |
| 05 | R | علم نفس المتعة | توقع المتعة؛ المشاعر أثناء النشاط؛ الموسيقى؛ التنويع؛ مكافآت فورية |
| 06 | R | علم نفس الألم | الخوف من الحركة؛ التعرض التدريجي بإشراف؛ تعليم الحركة؛ علامات الإحالة؛ حدود التخصيص |
| 07 | R | الكمالية والتعثر | التفكير الثنائي؛ التعاطف مع الذات؛ التخطيط الشرطي؛ العودة؛ أهداف مرنة |
| 08 | R | الأكل العاطفي | تنظيم المشاعر؛ الجوع والشبع؛ المرونة؛ عبء التسجيل؛ حدود التدخل |
| 09 | R | الانشغال والبيئة | التسويف؛ بدء المهام؛ تصميم البيئة؛ العادات المرتبطة بالروتين؛ تذكيرات غير عقابية |
| 10 | R | التلعيب الأخلاقي | المكافآت؛ الهوية؛ الاختيار؛ خطر السلوك القهري؛ مقاييس نجاح صحية |
| 11 | R | المقاومة | A/B الحالي؛ سجل المجموعات؛ بدائل الحركة؛ شرح الوضعيات؛ التدرج المشروط |
| 12 | R | البيلاتس والمرونة | تصنيف الحركات؛ الأدوات؛ مصادر مختصة؛ تراخيص الوسائط؛ فصل التأهيل |
| 13 | R | المشي | تسجيل السير؛ الوحدات؛ مؤقت؛ سلامة؛ تقارير النشاط |
| 14 | R | التغذية | SFDA والتحقق من الإتاحة؛ USDA؛ Open Food Facts؛ مصادر المكونات؛ دقة الطاقة والماكروز |
| 15 | R | المطبخ | حصص الوصفات؛ الوحدات؛ المخزون؛ التسوق؛ مراجعة مسببات الحساسية |
| 16 | R | التقدم والتعافي | اتجاه الوزن؛ قياسات اختيارية؛ أداء القوة؛ النوم والطاقة؛ كفاية البيانات |
| 17 | R | التقنيات المفتوحة | GitHub؛ تراخيص الكود والبيانات؛ IndexedDB؛ PWA/WebKit؛ جدوى التكامل الصحي |
| 18 | R | بوابة البحث | دمج FIT/R3/R4/PSY/BEH/JOY؛ جودة الأدلة؛ مصفوفة القبول؛ التبعيات؛ اعتماد خط أساس البناء |
| 19 | D | معمارية UX | خريطة المنتج؛ التنقل؛ الصفحة الرئيسية؛ إتاحة الميزات؛ حالات الخطأ |
| 20 | D | رحلات السلوك | بداية اليوم؛ بدء النشاط؛ اختيار الراحة؛ التعامل مع التعثر؛ العودة |
| 21 | D | رحلات التدريب | بدء الجلسة؛ التسجيل؛ استئناف؛ البدائل؛ إنهاء جزئي |
| 22 | D | رحلات التغذية | التسجيل السريع؛ المفصل؛ الوصفات؛ المخزون؛ الحساسية |
| 23 | D | نظام التصميم | الهوية الحالية؛ RTL؛ Light/Dark؛ مكونات؛ إتاحة |
| 24 | D | معمارية البيانات | المخطط؛ المعرفات؛ الترحيل؛ حفظ الحالة؛ الخصوصية |
| 25 | D | معمارية الكود | حدود الوحدات؛ قواعد السلوك؛ التخزين؛ الكاش؛ معالجة الأخطاء |
| 26 | D | بوابة التنفيذ | backlog موحد؛ ترتيب P0/P1/P2؛ اختبارات قبول؛ خطة rollback؛ مراجعة النطاق |
| 27 | B | الحوكمة والاختبارات | تثبيت خط الأساس؛ fixtures اصطناعية؛ فصل الوحدات؛ CI؛ توثيق |
| 28 | B | حفظ البيانات | التحقق؛ schema migration؛ سلامة السجلات؛ معالجة فشل الحفظ؛ منع التكرار |
| 29 | B | النسخ والاستعادة | معاينة؛ snapshot؛ rollback؛ تلف البيانات؛ اختبار الانحدار |
| 30 | B | محرك السلامة | حالات الإيقاف؛ القيود المدخلة؛ منع التجاوز؛ رسائل الإحالة؛ اختبارات |
| 31 | B | أوضاع اليوم | طبيعي؛ مخفف؛ راحة؛ اختيار صريح؛ عدم تغيير الخطة صامتًا |
| 32 | B | عوائق الالتزام | اختيار عائق؛ تفضيلات؛ خطوات صغيرة؛ اقتراحات غير علاجية؛ اختبار الحالات |
| 33 | B | البدء السهل | طقوس؛ إشارات؛ اختصارات؛ خطوة واحدة؛ قياس زمن البدء |
| 34 | B | التخطيط المرن | جدول أسبوعي؛ إعادة جدولة؛ معاينة الأثر؛ pause؛ عدم مضاعفة الجلسات |
| 35 | B | العودة بعد الانقطاع | حفظ التقدم؛ استئناف؛ مراجعة المستوى؛ حماية الراحة؛ اختبار |
| 36 | B | الثقة بالحركة | تعلم قبل النشاط؛ تسجيل توقع؛ تجربة اختيارية؛ دفتر القوة؛ عدم تصعيد الخطة |
| 37 | B | محرك المتعة | تفضيلات؛ تقييم أثناء النشاط؛ تقييم بعده؛ مقارنة التوقع؛ حفظ محلي |
| 38 | B | طقوس ومحتوى ممتع | روابط موسيقى؛ أجواء؛ تفضيلات ترفيه؛ تنويع معتمد؛ حرية الإيقاف |
| 39 | B | تحفيز غير عقابي | إنجازات؛ نجوم؛ خريطة رحلة؛ تعطيل التلعيب؛ عدم مكافأة الإفراط |
| 40 | B | واجهة اليوم | هيكل؛ اختصارات؛ حالة الراحة؛ الوصول للمهام؛ حالات فارغة |
| 41 | B | الهوية والوصول | tokens؛ RTL؛ الوضع الداكن؛ focus؛ تباين |
| 42 | B | بنية الجلسة | معرف ثابت؛ مخطط/جزئي/مكتمل؛ ترتيب؛ تأكيد؛ اختبار |
| 43 | B | ذاكرة آخر أداء | نسخة الحركة؛ أرقام سابقة؛ نسخ صريح؛ تعديل؛ منع المقارنة الخاطئة |
| 44 | B | استئناف التمرين | جلسة جارية؛ موضع؛ مؤقت؛ إعادة فتح؛ اختبار تنقل |
| 45 | B | مكتبة التدريب | بحث؛ فلاتر؛ وضعيات؛ بدائل؛ مصادر |
| 46 | B | شرح الحركات | مراجعة 12 حركة؛ مطابقة فيديو؛ تحذيرات؛ حالة توثيق؛ لا تغيير جرعات |
| 47 | B | المشي | مدة؛ مسافة؛ سرعة؛ الوحدات؛ فحص حسابات |
| 48 | B | جلسات المشي | مؤقت؛ إيقاف؛ استئناف؛ تاريخ؛ ملخص أسبوعي |
| 49 | B | البيلاتس | فلاتر أدوات؛ مستوى؛ وضعيات؛ مراجع مرخصة؛ منع التفعيل غير المراجع |
| 50 | B | المرونة | مكتبة؛ روتين اختياري؛ حدود الحركة؛ تسجيل؛ فصل التأهيل |
| 51 | B | بيانات الأغذية | مصدر لكل مكون؛ نيء/مطبوخ؛ وحدات؛ قيم مجهولة؛ تحقق |
| 52 | B | تسجيل الطعام | بسيط؛ محفوظ؛ مفصل؛ تعديل؛ عدم تحويل المجهول إلى صفر |
| 53 | B | الوصفات | حصص؛ غرامات؛ خطوات؛ مفضلات؛ اتساق الحساب |
| 54 | B | المطبخ | المخزون؛ وحدات؛ خصم المتوفر؛ دمج مشتريات؛ اختبار |
| 55 | B | حماية الحساسية | حالة المكون؛ العبوة؛ مجهول؛ إعادة المراجعة؛ منع ادعاء الأمان |
| 56 | B | سياق الأكل | مشاعر اختيارية؛ جوع وشبع؛ خيارات دعم؛ لا عقاب؛ حذف محلي |
| 57 | B | الوزن والقياسات | اتجاه؛ كفاية؛ تعديل؛ إخفاء اختياري؛ لا وعود |
| 58 | B | القوة والتقدم | تاريخ؛ مقارنة نفس النسخة؛ إنجازات نوعية؛ رسوم؛ مراجعة |
| 59 | B | التعافي | نوم؛ طاقة؛ شعور؛ راحة؛ لا نسب جاهزية مختلقة |
| 60 | B | العادات | التزام أسبوعي؛ if-then؛ مؤشرات غير وزنية؛ مراجعة؛ خيارات التنبيه |
| 61 | B | تكامل المنتج | وحدات مترابطة؛ تفضيلات؛ الخصوصية؛ PWA؛ معالجة أخطاء |
| 62 | Q | اختبارات الوحدات | المدخلات؛ حسابات؛ الحدود؛ migration؛ regression |
| 63 | Q | اختبارات التكامل | السجلات؛ استعادة؛ نسخ؛ التزام؛ عزل البيانات |
| 64 | Q | E2E التدريب | بدء؛ استئناف؛ بدائل؛ توقف؛ حفظ جزئي |
| 65 | Q | E2E التغذية والسلوك | وجبة؛ حصة؛ حساسية؛ راحة؛ عودة |
| 66 | Q | متصفح وأوفلاين | Chromium؛ WebKit؛ offline؛ cache upgrade؛ تخزين |
| 67 | Q | تدقيق UX | baseline؛ زمن؛ لمسات؛ أخطاء؛ فهم الرسائل دون ادعاء اختبار مشاركين |
| 68 | Q | الوصول والهوية | WCAG؛ RTL؛ contrast؛ keyboard؛ VoiceOver الفعلي يبقى pending إن لم يتاح |
| 69 | Q | سلامة وأدلة | الحركات؛ التغذية؛ الحساسية؛ الرسائل النفسية؛ حدود التوصية |
| 70 | Q | الأمن والأداء والتراخيص | XSS؛ بيانات خاصة؛ التبعيات؛ حجم الكاش؛ تراخيص |
| 71 | Q | مرشح الإصدار | مصفوفة التغطية؛ CI؛ مخاطر؛ checklist الجهاز الحقيقي؛ GO/NO-GO |
| 72 | X | احتياط 1 | أعلى blocker؛ إصلاح محدود؛ إعادة اختبارات؛ توثيق؛ checkpoint |
| 73 | X | احتياط 2 | مراجعة نهائية؛ إصلاحات حرجة؛ تسليم؛ مهام معلقة؛ لا نشر |

## Required evidence and acceptance
- Research: source URL, date, evidence type, population/limitations, finding, feature implication, existing/partial/missing, licensing and acceptance. Separate competitor claims from scientific evidence. Reuse previous R1–R4 docs rather than starting over; consolidate FIT/R3/R4/PSY/BEH/JOY duplicates by behavior and requirement.
- UX: flows, states, accessibility, local privacy, opt-out, no pressure. No fabricated user testing.
- Build: smallest safe increment; unit/integration tests; compatibility and rollback; CI evidence. No promise of a new clinical intervention.
- Gates: no unsafe symptom override; no hidden increases of exercise or food restriction; no safety labels for unverified ingredients; no lost data on migration; no comparison across different exercise variants; missing data stays missing; weekly adherence excludes planned rest; ability to pause/return/disable gamification without loss. Real iPhone/Safari/Home Screen backup/restore, VoiceOver, appropriate clinical/content review, explicit owner approval remain release blockers when not verified.
- Research references to validate/reuse: [existing R3](COMPETITOR_RESEARCH_ROUND_03_AR.md), [R4](COMPETITOR_RESEARCH_ROUND_04_AR.md), [49-task status](FULL_IMPROVEMENTS_STATUS_V3_AR.md), [BCT taxonomy](https://pubmed.ncbi.nlm.nih.gov/23512568/), [COM-B](https://doi.org/10.1186/1748-5908-6-42), [NICE NG246](https://www.nice.org.uk/guidance/ng246), [WCAG 2.2](https://www.w3.org/TR/WCAG22/), [MDN PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps), [Playwright](https://playwright.dev/docs/intro), [USDA FDC](https://fdc.nal.usda.gov/api-guide/), [Open Food Facts](https://openfoodfacts.github.io/openfoodfacts-server/api/). These are starting references, not proof of newly completed research.
