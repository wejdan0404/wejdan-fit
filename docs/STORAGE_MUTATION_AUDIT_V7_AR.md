# V7 — Storage and mutation audit, research gate evidence
2026-11-27 · audited commit `160f0cff0490bd877e8807eff792ab528aabb86e` · **static inspection only**, no new test run, no device testing, no personal fixtures.

## Audit of 12 baseline findings (risk ≠ reproduced defect)
| ID | Evidence from code/tests | Current disposition | Next verification |
|---|---|---|---|
| A01 | `app.js:11` parseSaved catches JSON failure and returns BASE, while `app.js:29` save writes same KEY | **Confirmed destructive overwrite path if later save succeeds**; no explicit corruption quarantine | Synthetic corrupt localStorage then attempt save; preserve raw before writing |
| A02 | `fit-next.js:16–28` migrateState silently replaces present non-array `meals/weights/measurements/shopping` and non-object maps with empty structures | **Confirmed schema normalization behavior**, not proven data loss in production | Explicitly reject wrong-type present fields; accept genuinely absent legacy fields; test both |
| A03 | `fit-next.js:29–48` validates many fields, but not every nested field/boolean in checkins/workouts | **Partial schema coverage confirmed** | Design compatibility matrix and synthetic malformed nested fixtures |
| A04 | `app.js:48` awards `تغير صغير` for 1kg loss | **Confirmed design conflict** with optional non-weight reward goals | Specify replacement without erasing historical progress |
| A05 | `app.js:200` timer uses in-memory interval and 60s countdown | **Confirmed non-persistent timer** | Timestamp-based pause/resume acceptance and clock-change test |
| A06 | `app.js:54` navigation resets scroll; session choice is in-memory | **Exact resume not demonstrated** | Test reload during group and chosen variant |
| A07 | `app.js:217` install guidance describes local storage without Safari/standalone transfer warning | **Copy gap** | Explicit browser-context guidance, iPhone verification later |
| A08 | `tests/browser_smoke.py` overrides localStorage with Map and uses set_content | **Confirmed mock-storage scope** | Separate actual-origin storage and SW test; iPhone remains external gate |
| A09 | `fit-next.js` rejects missing calories but accepts null macros | **Confirmed limited food logging schema** | Distinguish unknown calories from zero, denominators correct |
| A10 | `app.js:29` returns false; `app.js:219` foodMode, `app.js:277` theme toggle call save without rollback; many other callsites do rollback | **Confirmed inconsistent rollback pattern** | Denied-storage synthetic test for theme/foodMode; audit remaining mutation handlers |
| A11 | `fit-next.js:75` has normal/gentle/rest modes | **Confirmed existing capability** | Extend existing contract, avoid parallel mode store |
| A12 | Prior CI and smoke tests do not verify actual installed offline PWA | **Coverage limitation**, not runtime failure | Real HTTP origin + offline scenario and iPhone test |

## Evidence limits and tests
- Baseline CI for `160f0cff0490bd877e8807eff792ab528aabb86e`: workflow 45948955156, completed success; this is not a fresh run of these audit scenarios.
- `tests/fit-next.test.js` checks migration and validation for valid/invalid samples but does not assert wrong-type present arrays are rejected.
- `tests/regression.js` uses VM with in-memory Map storage, tests backup rejection, completed/partial workouts, and persistence in a reused mock Map; no quota-denied storage test.
- `tests/browser_smoke.py` tests 390x844 simulated UI, not iPhone Safari storage.
- No claim of independent reproduction, exhaustive audit, or approval for implementation/release.

## Prioritized acceptance and dependencies
1. **P0 / V7-002 + design 24 / build 28**: corrupt JSON is never overwritten by a default-state save; users see a recovery path; no upload or logging of raw data.
2. **P0 / design 24 / build 28–29**: explicit wrong-type imported fields rejected; absent fields in older supported backups still migrated; unchanged original on rejection.
3. **P0 / design 24 / build 28**: save-failure state rollback in all mutating UI actions; clear status; synthetic denied/quota fixtures.
4. **P1 / design 20 / build 38**: remove weight-loss achievement as a reward trigger without altering weight logs.
5. **P1 / design 21 / build 43**: timestamp-based timer and precise session resume, never auto-complete.
6. **P1 / design 22 / build 51**: optional energy-unknown food logging, preserving honest statistics.
7. **Release gate / 65–70**: actual browser origin/offline and iPhone Safari/Home Screen/VoiceOver, ingredient source and clinician review, explicit owner approval.

## Change control
No application code changed in this audit. All fixes are proposals pending research/design acceptance gate. Avoid retroactively marking the above as tests passed. Preserve `wejdan-fit-app-v1`, previous backups and draft PR. Source: [app.js](../app.js), [fit-next.js](../fit-next.js), [unit tests](../tests/fit-next.test.js), [regression](../tests/regression.js), [browser smoke](../tests/browser_smoke.py).
