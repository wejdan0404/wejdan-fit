# V7 — Behavioral traceability PSY / BEH / JOY
2026-11-27 · proposed requirements authored for this program; **not recovered historical IDs**. No assertion that the user previously approved these exact identifiers. Based on the behavioral-first product brief, existing code/legacy FIT register, and competitor matrix. Evidence validation V7-008 pending; do not claim intervention effectiveness.

## 16 cross-cutting acceptance requirements
| ID | Design capability | Family F01–F16 | Existing overlap IDs (not duplicates) | Acceptance criterion | V7 build anchors | Priority |
|---|---|---|---|---|---|---|
| PSY-01 | بدء أصغر خطوة | F02 | FIT-041; WF-D04 | اختيار البدء/التأجيل/الراحة بلا عقوبة؛ قياس إتمام مهمة البدء فقط | 39 | P1 |
| PSY-02 | المرونة ضد الكمالية | F07 | FIT-008; FIT-031; WF-D08 | الحصة الجزئية تحفظ كما هي؛ العودة بعد الانقطاع دون تصفير أو عتاب | 31,41 | P1 |
| PSY-03 | دعم الكفاءة الذاتية | F04 | FIT-036; WF-C05 | إرشادات اختيارية وخيارات مستقلة؛ لا درجة جاهزية طبية ولا تطمين علاجي | 30,40 | P1 |
| PSY-04 | الخوف من الحركة | F04 | FIT-004; FIT-014; WF-D07 | إيقاف عند مؤشرات التحذير؛ لا توصية تعرض علاجي تلقائي | 30 | P0 |
| PSY-05 | اختيار ذاتي | F06 | FIT-034; WF-C17 | تغيير خطة اليوم قابل للتراجع، ولا يفرض هدفًا بعد الراحة | 34,39 | P1 |
| BEH-01 | التخطيط الشرطي | F06 | FIT-011; R4-02 | اختيار إذا/فإن محلي اختياري، حذف التذكير دون فقدان سجلات | 34 | P2 |
| BEH-02 | العودة بعد الانقطاع | F07 | FIT-031; R4-10 | العودة في الوضع الطبيعي/الهادئ/راحة وفق اختيار المستخدم، دون تعويض | 31 | P1 |
| BEH-03 | تقليل الاحتكاك | F02 | FIT-041; WF-D04 | مسار بدء واضح خلال خطوات قليلة؛ لا فقدان بيانات عند إلغاء البدء | 39,43 | P1 |
| BEH-04 | تنظيم الأكل الانفعالي | F10 | FIT-020; WF-D17 | تسجيل شعور اختياري بلا تشخيص ولا سعرات إلزامية أو لوم | 50,51 | P1 |
| BEH-05 | مراجعة ذاتية لطيفة | F13 | FIT-032; WF-C15 | انعكاس أسبوعي اختياري ومجهول/مفقود منفصل عن صفر | 59 | P2 |
| JOY-01 | توقع المتعة وتقييمها | F13 | FIT-032; R4-09 | اختيار مدى الاستمتاع اختياري قبل/بعد، لا يتحول إلى مقياس طبي | 58,59 | P1 |
| JOY-02 | التنوع الآمن | F01 | FIT-012; WF-C01 | البديل يوضح عدم التكافؤ ولا يتجاوز تعليمات المختصة | 44 | P1 |
| JOY-03 | مكافآت غير مرتبطة بالوزن | F13 | FIT-040; WF-C15 | لا شارة لنزول الوزن؛ شارات للبدء/العودة/الراحة دون سلاسل قسرية | 38 | P1 |
| JOY-04 | تحكم في الإشعارات | F15 | FIT-039; R4-16 | اختيار/إيقاف بلا ضغط أو تنبيهات ذنب؛ احترام الوصول | 32,67 | P2 |
| JOY-05 | خيارات نشاط ممتع | F08 | FIT-017; WF-D14 | مكتبة مصنفة، لا توصيات جرعة أو فيديو غير مطابق | 48 | P2 |
| JOY-06 | احتفال بالراحة | F07 | FIT-031; WF-D08 | الراحة خيار كامل لا يخصم نقاطًا ولا يخلق واجب تعويض | 31,38 | P1 |

## Deduplication rules
1. One source of truth for `normal/gentle/rest` in `fit-next.js`; PSY-02/BEH-02/JOY-06 share it but test independent UX criteria. No second recovery-mode database.
2. FIT-040/JOY-03 reuse the existing `rewards()` component; remove weight-loss triggers at build gate without erasing historical weight records.
3. FIT-012/JOY-02 and F01 reuse session-scoped exercise choices; no extra alternatives store, no substitution of original movement videos.
4. FIT-041/PSY-01/BEH-03 and F02 share the start/resume flow; three distinct acceptance checks (choice, friction, data safety).
5. FIT-020/BEH-04 and F10 share optional meal journal; unknown calories must not be encoded as zero.
6. FIT-032/BEH-05/JOY-01 and F13 share reflection records; distinguish skipped, missing, and zero, without clinical inference.
7. Safety and storage P0 (A01/A02/A10) supersede delight and gamification P1/P2. Behavioral design cannot bypass symptom pauses.

## Evidence and design gates
- Candidate frameworks to verify in V7-008/behavioral research: Self-Determination Theory (autonomy/competence/relatedness), COM-B, Behavior Change Technique Taxonomy v1, self-efficacy and affective response to activity. These are **research candidates**, not proof of outcomes or individually validated prescriptions.
- Product metrics: voluntary start, completion of partial sessions, return after breaks, user-reported enjoyment/confidence, data loss incidence; allow skipping all subjective questions. No addiction/compulsion target or punishment loops.
- Medical suitability, fear-related symptoms, nutrition and accessibility need appropriate independent review before release. No personally identifying, health, or psychological records in GitHub.
- Do not conflate overlap references with a full duplicate elimination across all 86 competitor and 49 FIT items. Full code coverage mapping V7-009 remains.

## Sources within project
[Competitor matrix](FEATURE_MATRIX_V7_AR.md) · [Legacy FIT register](BASELINE_AUDIT_V7_AR.md) · [Master plan](MASTER_PROGRAM_V7_AR.md) · [Storage audit](STORAGE_MUTATION_AUDIT_V7_AR.md).
