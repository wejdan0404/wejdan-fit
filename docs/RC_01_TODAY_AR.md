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
