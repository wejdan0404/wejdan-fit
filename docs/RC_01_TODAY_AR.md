# WEJDAN FIT — RC-01 | 27 November 2026
Owner priority: usable release candidate today, not completion of all 360 V7 research/feature tasks. Preserve all task IDs and evidence; defer expanded V7 capabilities. Narrowly authorize existing, evidenced safety repairs with acceptance tests as a separate RC lane; no release, merge, clinical clearance or data upload.
Baseline: 99b56584b7ac770a936b650145cbda1d48adef57, green CI 46001753016.
P0 acceptance: malformed/unsupported stored data is read-only, original bytes unchanged, visible recovery notice and optional private raw export. Malformed-present import collections rejected; absent legacy optional collections migrate. Food mode/theme rollback on denied write. No schema/key change. Candidate validation occurs before state assignment. All tests synthetic. P1: replace weight-loss reward with explicit rest choice, no reward for weight change. Cache version refreshed.
Remaining before RC acceptance: exact-SHA CI, real HTTP browser/offline check if available, verify UI recovery/export and normal restore, check P0 remaining M04/M05, safety/food provenance warnings, no false completeness. Real iPhone/Safari and content review and owner approval remain release gates. No automatic destructive recovery; raw export is not a validated backup. If a legitimate old record is rejected, preserve raw data and review migration; never reset it. Rollback: revert this coherent code/test commit on development branch only (do not deploy earlier destructive behavior to a device).

## Scheduled-08 — bounded M04/M05 fix
Verified GitHub Actions run [46002353540](https://github.com/wejdan0404/wejdan-fit/actions/runs/46002353540) SUCCESS for predecessor HEAD `4ecf0327b8d45ed2f7d583d8b0d1bf68641eb98c`; this is **not** the result for the new patch. Patched legacy workout reps/kg and trainingSets controls to restore prior in-memory state if localStorage write is rejected; added synthetic regression and guarded recovery-key read failures. No schema or storage key change. Pending exact patch SHA CI, recovery/restore flow, HTTP/offline, iPhone, content safety, explicit owner approval. RC remains NO-GO.


## Scheduled-09 — recovery transparency and exact-SHA CI
Verified [GitHub Actions 46008035467](https://github.com/wejdan0404/wejdan-fit/actions/runs/46008035467) SUCCESS on prior HEAD 2423f7fa7ada08ac964928c3459c2e3d2c92fd20. RC-01-B: emergency recovery now verifies the recovery-key swap; if it fails, warns that the new state was restored but undo copy was not updated. Synthetic regression added. New patch CI pending. No production release, Safari/device validation, or clinical review.

## RC-01 verification addendum — scheduled turn 8, 27 Nov 2026
- Verified GitHub Actions SUCCESS for exact prior head `aa8f0b47ac35cbb96a15f157e7ff08aa66a99605`: run 46016384635 (synthetic CI only).
- Added two synthetic regression scenarios: denied recovery-key read and corrupted recovery JSON. Both must preserve active state; no real user data.
- No claim of browser/iPhone/offline testing, clinical validation, or production release.
- P0 outstanding: validate new commit CI; import/export round-trip and recovery UI in real HTTP browser; offline storage smoke; content and safety review.
- Decision: NO-GO for release. Keep draft PR, unchanged main and no automatic deployment.

## RC-01 verification — exact-SHA CI follow-up (27 Nov 2026)
- Confirmed GitHub Actions [46024793037](https://github.com/wejdan0404/wejdan-fit/actions/runs/46024793037) `completed/success` for exact SHA `73053194d49d254e99d6bb3064eebfb71b3540dc` (synthetic CI only). Draft PR #1 remains open, not merged.
- This closes the *CI evidence check* for the recovery-read/corrupt-JSON regression additions, not real-browser, offline, iPhone, data migration or clinical acceptance.
- Next acceptance gates (synthetic data only): (1) HTTP browser import/export round-trip with identical stored records; (2) rejected/corrupt import retains original bytes and visible recovery controls; (3) offline reload after a controlled cache update; (4) nutrition provenance/unknown-allergen warnings; (5) iPhone Safari and Home Screen backup/restore with no duplicates; (6) human content/safety review and explicit owner release approval.
- Release decision remains NO-GO. No schema/key changes, merge or deployment authorized.

## RC-01-B — executable acceptance protocol, 27 Nov 2026 (manual continuation)
Status: **BLOCKED for real-browser evidence**; no local HTTP browser or iPhone test was run in this turn. Existing `tests/regression.js` uses a Node VM/Map localStorage mock; `tests/browser_smoke.py` uses a simulated browser context. These are not equivalent to persistent real-origin storage.

### Acceptance cases (use synthetic records only)
1. **HTTP origin persistence:** Serve the checked-out branch on a localhost HTTP origin. Create synthetic meal + workout + rest choice, reload twice; compare IDs, dates, session variants, values, and theme. Pass only with unchanged records and no phantom completion.
2. **Export/import round trip:** Export synthetic records, capture private file outside repository, clear only an isolated test browser profile, import file, reload; assert identical logical records and no duplicates. Never commit backup JSON.
3. **Malformed-present import:** Supply a synthetic JSON with `meals` present as an object instead of an array. Import must reject before state assignment; old stored bytes and rendered records remain unchanged. Absent optional legacy fields should migrate when explicitly supported.
4. **Corrupt persisted JSON:** In isolated test profile, inject malformed string at `wejdan-fit-app-v1`, reload. App must display blocked recovery guidance, prohibit normal writes, and permit optional private raw export without replacing original bytes.
5. **Denied write/read:** Instrument an isolated browser profile to deny storage writes and recovery-key reads. Changes to reps/kg, training sets, food mode and theme must either persist or revert visually and in memory; failed recovery must never silently claim full undo protection.
6. **Offline and upgrade:** After a successful online load on a real HTTP origin, disconnect network and reload; record actual page behavior, SW control state and cache version. Repeat after one controlled cache upgrade; never claim offline success from file:// or set_content.
7. **Food safety copy:** Unknown ingredient provenance, unknown allergens and unreviewed alternatives must never display as clinically safe or verified; do not add individual calorie/training prescriptions.
8. **iPhone gate:** Repeat Safari and Home Screen install-context export/import and persistence on a real iPhone, plus VoiceOver and content review; otherwise NO-GO.

**Rollback:** no data schema or storage-key change permitted; if a candidate breaks acceptance, revert only its coherent development-branch commit after HEAD/conflict check. Do not replace live user data with a test fixture. **Evidence required:** tested SHA, browser/version, HTTP origin, exact steps, synthetic fixture IDs, assertions and results, offline mode, and redacted screenshots (no personal data). All cases remain unverified until executed.

## RC-01-C — scoped static food and movement copy inspection (manual continuation)
Source inspected: `app.js` blob `42c0803704d0305c5400b7c09486716691eb07d3` and `fit-data.js` blob `54b9f0bcb9f21655b51e4d7245f3e0b0922b1211`. **Static code inspection only**, not clinical review or browser test.

| Surface | Observed code evidence | Status and acceptance |
|---|---|---|
| Food page | Explicit Arabic warning: nutritional targets are experimental, not medically approved; carb cycling optional | Present copy, **PARTIAL** until rendered UI and complete food routes inspected |
| Masari recipe details | Estimated calories/macros are labelled unverified; unknown peanut/coconut/cross-contact cannot be ruled out from recipe text; package-label check requested | Present copy, **PARTIAL**; test actual modal and keyboard/VoiceOver access |
| Masari recipe logging | `masariRecipeToMeal` blocks `reviewAllergens(...).status==='avoid'`, requires both allergy and estimate confirmations, validates kcal/portion; stores `source:'masari-estimate'` | Static guard present; **PARTIAL** until synthetic avoid/unknown and missing-confirmation cases run; user checkbox is not clinical clearance |
| Masari exercise reference | `masariExerciseDetails` says references are not active A/B recommendations, deferred movements remain deferred, and no automatic dose is authorized | Present copy, **PARTIAL**; check all alternate entry points and variant warnings |
| Alternatives | UI explicitly says selected variant is not medically approved and original video is not a demonstration of the alternative | Present copy, **PARTIAL**; require regression across selection/reopen/completion paths |

**Safety issue to resolve before GO:** do not equate an ingredient string scan or a checked box with proof of allergen absence; unknown ingredients, label changes and cross-contact remain unresolved. This is a review gate, not a claim that a concrete bypass was reproduced. Test with synthetic ingredient fixtures, including unknown and `avoid` statuses, and inspect the rendered copy. No personal medical/food data or source file copied into the repo.

Next: run actual-origin browser acceptance protocol, then fix only reproduced P0 failures; run exact-SHA CI on any code changes. Real iPhone, safety/content review and owner approval remain BLOCKED release gates. NO-GO.
