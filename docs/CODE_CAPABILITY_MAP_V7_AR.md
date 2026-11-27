# WEJDAN FIT V7 — code-to-capability evidence map (research gate)
2026-11-27 · static inspection of `ac159503e2752491e3aae9134694cefb0d101303`. **No feature-completion claim.** Existing behavior is distinguished from missing acceptance and device validation. This is an implementation inventory, not new code or clinical review.

## Capability families vs implementation
| Family | Existing evidence | Unproven / missing acceptance | Status | Next build anchor |
|---|---|---|---|---|
| F01 Alternatives/equipment | `exercise-alternatives.js`, `app.js` variant selection, `tests/exercise-alternatives.test.js` per prior review | reason-aware safe swap and equipment profile absent from inspected evidence; medical suitability external | PARTIAL | 44 |
| F02 Focus/resume/timer | `app.js:workoutView`, `timerAction`, `workoutState` | timer memory-only; exact resume and one-step UX not demonstrated | PARTIAL | 43 |
| F03 Variant-safe performance | `fit-next.js:strengthHistory`, session `setMetrics` and variant choice | all logging variants/reuse flows not verified | PARTIAL | 42 |
| F04 Symptoms/feedback | `app.js:checkinModal`, `fit-next.js:trainingGuard` | no readiness inference; after-session feedback and independent safety review pending | PARTIAL | 30 |
| F05 Media trust | `exercise-coach.js`, alternatives review hides mismatched original media | every source/video mapping unverified | PARTIAL | 45 |
| F06 Weekly planning | `dayPlans`, `fit-next.js:modeForDay` | weekly cloning, prayer/Ramadan preferences and diff preview not proven | PARTIAL | 34 |
| F07 Gentle/rest/return | `fit-next.js:modeForDay` normal/gentle/rest | short session, return UX and optional non-punitive copy acceptance untested | PARTIAL | 31/35 |
| F08 Pilates | prior FIT-017 register says unimplemented | professional source/media suitability absent | MISSING | 48 |
| F09 Selective exports | `app.js:exportJSON` full backup | selective clinician/user report not established; avoid involuntary sharing | PARTIAL | 60 |
| F10 Flexible food | `fit-next.js:nutritionStats`, meals and plan fields | `validateState` requires numeric calories; unknown-calorie logging absent | PARTIAL | 51 |
| F11 Nutrient provenance/allergens | `fit-next.js:reviewAllergens` keyword screening | not ingredient-verified; no allergy guarantee; provenance evidence absent | PARTIAL | 54 |
| F12 Portions/shopping | `fit-next.js` portion helpers, `shopping` array; FIT status | source-verified substitutions and kitchen workflows unproven | PARTIAL | 53 |
| F13 Reflection/progress | `fit-next.js` trends, `app.js:rewards` | weight-loss badge conflicts with JOY-03; missing-vs-zero and enjoyment untested | PARTIAL | 38/58 |
| F14 Backup/Safari | `app.js:parseSaved`, `save`, `exportJSON`, `fit-next.js:previewBackup` | corruption overwrite path and silent normalization; no real Safari test | PARTIAL—P0 | 28/29 |
| F15 UX/language | Arabic RTL UI and `tests/browser_smoke.py` simulated viewport | VoiceOver and real iPhone, native localStorage/offline not tested | PARTIAL | 66 |
| F16 Future devices/cloud | intentionally out of scope | explicit approvals and architecture needed | BLOCKED BY SCOPE | 17 |

## Acceptance gate / risk order
1. P0 **data integrity**: preserve corrupt raw data, reject present wrong-type fields, transactional save rollback; synthetic tests before UI enhancements (A01/A02/A10, F14, FIT-001/002/006).
2. P0 **safety and provenance**: exercise pause precedence, video mismatch, food allergy unknown state; no implied clinical clearance (F01/F04/F05/F11).
3. P1 **behavioral autonomy**: reuse existing recovery modes; remove weight-loss reward, enable optional feeling/unknown food energy, retain rest/partial session (F07/F10/F13).
4. P1 **workflow continuity**: timestamp timer, precise session resume, variant-specific history (F02/F03).
5. P2 **delight/localization**: language and culturally relevant options only after verified evidence; no new permission or paid service (F06/F08/F15).
6. Research-only: F16 devices/cloud and any individualized medical interventions.

## Cross-cutting behavioral trace
16 PSY/BEH/JOY criteria in [behavior trace](BEHAVIOR_TRACE_V7_AR.md) share existing F01/F02/F04/F06/F07/F08/F10/F13/F15 capabilities. They are independent acceptance tests, not separate stores. 49 FIT legacy IDs and 86 competitor IDs remain traceable in [baseline audit](BASELINE_AUDIT_V7_AR.md) and [feature matrix](FEATURE_MATRIX_V7_AR.md).

## Verification boundaries
- Static code evidence and prior documentation only. A `PARTIAL` family may include unverified code paths; it does **not** imply all original historical acceptance criteria passed.
- Latest inspected PR SHA `ac159503e2752491e3aae9134694cefb0d101303`, Draft/unmerged. GitHub Actions run 45959372746: completed success at that SHA. This does not verify real Safari, offline install, or medical safety.
- Source verification V7-008 remains TODO; do not treat archived links as freshly verified.
- Before implementation, reproduce A01/A02/A10 with synthetic fixtures, document compatibility and rollback, then run CI on the exact new commit. Preserve `wejdan-fit-app-v1`; no user data, merge, main edit, or production release.
