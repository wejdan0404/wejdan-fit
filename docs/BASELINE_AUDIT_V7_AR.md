# WEJDAN FIT — V7 baseline audit and decision register
27 Nov 2026 | Static review, branch `feature/masari-safe-merge-v1` at `57d050623712c43838e28f75d5ab875aa3ed7416`.
Scope: inspected README, prior FIT register, alternatives review, app.js selected paths, fit-next.js validation, core/service worker/entrypoint/CI from prior bootstrap, and browser_smoke.py. Not an exhaustive line-by-line or security audit. CI success recorded for baseline (run 45946018546); no new browser/device or clinical test in this review.

## Existing decisions retained
| ID | Decision | Evidence / guard |
|---|---|---|
| D01 | Keep vanilla JS PWA and existing identity; split incrementally | README; V7 plan; no framework migration without evidence |
| D02 | Local-only storage, no account/backend by default | README; app.js KEY; preserve key and schema compatibility; no real data in public repo |
| D03 | A/B reference plan remains unchanged | EXERCISE_ALTERNATIVES_V2_AR.md; no change to dose, sequence or clearance by this audit |
| D04 | Alternatives are session-scoped and distinguish partial-purpose vs equivalent; no reuse of original video as substitute | alternatives review; verify invariants with regression |
| D05 | Explicit review before changes; no automatic increases based on time or self-report | fit-core and V7 plan |
| D06 | Optional rest/gentle/normal modes, no punitive streak or compensatory restriction | fit-next modeForDay; V7 plan; extend existing modes rather than duplicating them |
| D07 | Optional non-weight progress, disable weight-related rewards; no scoring health readiness | V7 plan; existing rewards require audit and migration-safe change |
| D08 | Nutrition estimates and keyword allergy screening do not prove safety | README and fit-next; ingredient provenance and unknown status required |
| D09 | True device/clinical review and explicit owner approval before release | legacy report and V7; CI/mock browser are not device clearance |
| D10 | Keep draft PR, do not modify main, merge, publish or add external accounts | V7 and current PR status |

## Concrete code findings
| ID | Evidence at baseline | Risk or gap | Required acceptance and V7 anchor |
|---|---|---|---|
| A01 | app.js:11 parseSaved catches parse failures and returns BASE; some invalid fields replaced by empty defaults | corrupt stored state may appear as fresh setup; subsequent save can overwrite data | distinguish missing/corrupt/unsupported, preserve raw privately and prevent destructive writes; synthetic invalid JSON test; 28–29 |
| A02 | fit-next.js:16–29 migrateState replaces wrong-type arrays/maps with empty containers before validation | malformed imported collections can be normalized rather than rejected | distinguish legitimate older missing optional fields vs corrupt present fields; preview must not lose records silently; 28–29 |
| A03 | fit-next.js:29–48 checks numeric metrics, but validates only some nested workout/check-in structures | malformed records or flags may pass validation | formal legacy-compatible schema tests; reject invalid present data without overwriting; 28/30/41 |
| A04 | app.js:48 rewards includes achievement for a weight decrease | conflicts with behavioral-first optional non-weight reward design | offer non-weight milestones; preserve historical data; no incentives for rapid loss or restriction; 38 |
| A05 | app.js:200 timer uses interval and in-memory restSeconds | refresh/background may lose or skew timer | persist explicit timer/session state with timestamps; allow pause/reset; test refresh, no automatic exercise transition; 43 |
| A06 | app.js:54 navigate scrolls top; current flow has no guaranteed exact group resume | session context lost across navigation | save and restore exact session/variant/group, preserve partial status; 43 |
| A07 | app.js:217 installHelp describes local storage but no explicit standalone vs Safari distinction | user may assume records transfer between contexts | clear context label and manual export/import workflow; actual iPhone test remains pending; 29/65 |
| A08 | tests/browser_smoke.py uses page.set_content and Map-based mocked localStorage | useful UI test but no native storage/service worker verification | real HTTP origin and browser storage E2E plus real iPhone test; 65 |
| A09 | fit-next.js:35 requires meal.cal finite; missing macros can be null | simple food journal with unknown energy not supported by current schema | explicit unknown calories; correct logged-day denominators; migration + UI tests; 50–51 |
| A10 | app.js:29 save returns false on failure; mutation callsites require audit | UI may show changed state despite failed save if caller ignores result | test quota/denied storage; transactional rollback and honest status; 28 |
| A11 | fit-next.js:75 already maps normal/gentle/rest | duplication risk if new Behavioral Engine invents independent mode | reuse mode contract; explicit choice, symptom gate precedence, optional check-in; 31 |
| A12 | existing service worker test verifies static asset coverage, not actual device operation | cache preflight does not establish offline use | keep static test, add actual network/offline tests later; 65 |

These are static findings or testable risks, not all reproduced failures. Do not implement behavior changes until research/design/acceptance gates. No personal data included.

## Legacy FIT-001..049 traceability
Original status copied from historical report, NOT a fresh verification. V7 anchors indicate intended primary review, not completion.
| ID | Historical scope | Historical status | V7 run |
|---|---|---|---|
| FIT-001 | ترحيل المخطط مع إصدارات واضحة | تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز | 28 |
| FIT-002 | نسخ احتياطية وفحص الاستعادة | تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز | 29 |
| FIT-003 | التراجع عن التعديلات | تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز | 29 |
| FIT-004 | تقييم أعراض قبل وبعد التدريب | موجود في الكود + اختبار محلي مناسب | 30 |
| FIT-005 | تعليمات الطبيبة والحركات المؤجلة | موجود في الكود + اختبار محلي مناسب | 30 |
| FIT-006 | تأكيد نجاح الحفظ | موجود في الكود + اختبار محلي مناسب | 28 |
| FIT-007 | تقييم IndexedDB | غير منفذ؛ يحتاج مصدر خارجي أو بنية جديدة أو موافقة | 25 |
| FIT-008 | تمييز جلسة جزئية ومكتملة | موجود في الكود + اختبار محلي مناسب | 41 |
| FIT-009 | تسجيل كل مجموعة بالتفصيل | موجود في الكود + اختبار محلي مناسب | 42 |
| FIT-010 | تدرج بحسب الحصص لا الوقت فقط | تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز | 57 |
| FIT-011 | جدولة A/B حسب الأيام | تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز | 34 |
| FIT-012 | بدائل أسهل لكل تمرين | تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز | 44 |
| FIT-013 | التحقق من روابط فيديو دقيقة | غير منفذ؛ يحتاج مصدر خارجي أو بنية جديدة أو موافقة | 45 |
| FIT-014 | الاستجابة لتغير الأعراض | موجود في الكود + اختبار محلي مناسب | 30 |
| FIT-015 | مقارنة تقدم القوة | موجود في الكود + اختبار محلي مناسب | 57 |
| FIT-016 | تسجيل المشي منفصلًا | موجود في الكود + اختبار محلي مناسب | 46 |
| FIT-017 | مكتبة البيلاتس المعتمدة | غير منفذ؛ يحتاج مصدر خارجي أو بنية جديدة أو موافقة | 48 |
| FIT-018 | مراجعة مسببات الحساسية | تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز | 54 |
| FIT-019 | مصادر غذائية متحققة | تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز | 50 |
| FIT-020 | وجبتان وسناك اختياري | موجود في الكود + اختبار محلي مناسب | 51 |
| FIT-021 | حساب حصص الوصفات | موجود في الكود + اختبار محلي مناسب | 52 |
| FIT-022 | مقارنة الماكروز بالطاقة | تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز | 50 |
| FIT-023 | مرونة أيام الكارب | تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز | 34 |
| FIT-024 | متوسط السعرات للأيام المسجلة | موجود في الكود + اختبار محلي مناسب | 56 |
| FIT-025 | تكرار الوجبات المعتادة | موجود في الكود + اختبار محلي مناسب | 51 |
| FIT-026 | قائمة مشتريات وبدائل | تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز | 53 |
| FIT-027 | إخفاء السعرات اختياريًا | تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز | 56 |
| FIT-028 | اتجاه الوزن بدل التقلب | موجود في الكود + اختبار محلي مناسب | 56 |
| FIT-029 | قياسات تقدم غير الميزان | موجود في الكود + اختبار محلي مناسب | 56 |
| FIT-030 | متابعة طاقة ونوم وتعافٍ | تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز | 58 |
| FIT-031 | وضع يوم هادئ أو راحة | موجود في الكود + اختبار محلي مناسب | 31 |
| FIT-032 | مراجعة أسبوعية محفوظة | موجود في الكود + اختبار محلي مناسب | 59 |
| FIT-033 | رسوم ومؤشرات تفسيرية | تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز | 57 |
| FIT-034 | خطة اليوم الموحدة | موجود في الكود + اختبار محلي مناسب | 39 |
| FIT-035 | خريطة تقدم تفاعلية | تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز | 38 |
| FIT-036 | رسائل تحفيز دون لوم | موجود في الكود + اختبار محلي مناسب | 32 |
| FIT-037 | عرض جميع الوصفات والتمارين | موجود في الكود + اختبار محلي مناسب | 44 |
| FIT-038 | تعديل السجلات القديمة | تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز | 28 |
| FIT-039 | تدقيق WCAG وVoiceOver | تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز | 67 |
| FIT-040 | مكافآت غير عقابية | موجود في الكود + اختبار محلي مناسب | 38 |
| FIT-041 | تجربة أول استخدام | موجود في الكود + اختبار محلي مناسب | 39 |
| FIT-042 | اختبار نقل البيانات على آيفون | غير منفذ؛ يحتاج مصدر خارجي أو بنية جديدة أو موافقة | 65 |
| FIT-043 | معاينة مستقلة عن تخزين الإنتاج | غير منفذ؛ يحتاج مصدر خارجي أو بنية جديدة أو موافقة | 65 |
| FIT-044 | اختبارات E2E متعددة الأجهزة | تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز | 63 |
| FIT-045 | تحديث PWA وفق موافقة المستخدم | تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز | 65 |
| FIT-046 | وحدات مستقلة من الكود | تنفيذ جزئي / يحتاج توسيع أو اختبار جهاز | 27 |
| FIT-047 | سياسة خصوصية بسيطة | موجود في الكود + اختبار محلي مناسب | 60 |
| FIT-048 | مزامنة أجهزة اختيارية | غير منفذ؛ يحتاج مصدر خارجي أو بنية جديدة أو موافقة | 17 |
| FIT-049 | تكامل صحي بإذن المستخدم | غير منفذ؛ يحتاج مصدر خارجي أو بنية جديدة أو موافقة | 17 |

## Next
V7-002 remains PARTIAL pending comprehensive code path and tests review; V7-004 baseline decisions recorded; V7-007 legacy mapping completed, generalized behavioral/JOY traceability still required. Continue evidence verification before any claim of new feature completeness.

References: [README](../README.md), [legacy status](FULL_IMPROVEMENTS_STATUS_V3_AR.md), [alternatives](EXERCISE_ALTERNATIVES_V2_AR.md), [V7 plan](MASTER_PROGRAM_V7_AR.md), [matrix](FEATURE_MATRIX_V7_AR.md).
