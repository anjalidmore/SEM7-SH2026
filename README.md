# Semester 7 study dashboard

One repository for the five Semester VII study sites and the semester hub that sits above them.
Everything is static: no backend, no build step, no dependencies, no network requests. It works
opened from disk and on GitHub Pages.

| Exam (10:30–12:30) | Subject | Site |
|---|---|---|
| Thu 19 Nov 2026 | Artificial Intelligence (CEPCC712) | `subjects/ai/` |
| Sat 21 Nov 2026 | Natural Language Processing (CEPEC7032) | `subjects/nlp/` |
| Wed 25 Nov 2026 | Applied Data Science (CEPEC7041) | `subjects/ads/` |
| Fri 27 Nov 2026 | Operations Research (OEC7015) | `subjects/or/` |
| Mon 30 Nov 2026 | Deep Learning (HMCAL703) | `subjects/dl/` |

Each End Sem paper is 50 marks in 2 hours. The paper pattern for each subject is still to come.

## Layout

```
index.html            the semester hub: timetable, countdowns, every subject's progress
shared/sem7.js        timetable + subject list (single source), the strip, the progress bridge
subjects/<code>/      one self-contained study site per subject; index.html covers all modules
docs/BUILD-PROMPT.md  the master build prompt the ADS, OR and DL sites were built from
_resources/           lecture decks, notes and textbooks (local only, gitignored, never published)
```

The subject sites were imported from their original repositories (`anjalidmore/<SUBJECT>-SH2026`)
with their git history, keeping only the site files. Tag **`mse-final`** marks every site exactly as it
was for the Mid Sem, before any End Sem work.

## How the hub gets each subject's progress

Each subject keeps its own progress, under its own `localStorage` key, exactly as before. The hub never
reads or changes it. Instead, each subject site ends its `<body>` with two lines:

```html
<script src="../../shared/sem7.js"></script>
<script>window.SEM7 && SEM7.attach("ads");</script>
```

`SEM7.attach` adds a thin strip above the site's own header (back to the hub, jump to another
subject, this subject's countdown). It also writes a small summary to `sem7.summary.<code>`
whenever the site saves or re-renders. The summary uses the site's **own** progress functions, so the
hub shows the same figure as that site's dashboard, with that site's meaning:

| Site | Figure shown |
|---|---|
| AI | Study items completed |
| NLP | Items done |
| ADS | Questions marked done |
| OR | Exam-priority questions done |
| DL | High-priority questions done |

These are not the same measure, so the hub labels each figure instead of treating them as equal.
Module bars follow each site's own module list, so they extend to Modules 4–6 as End Sem content is added.

If `shared/sem7.js` is missing, a subject site works exactly as it does on its own. If browser storage
is blocked, everything still renders; progress is just not saved.

**Status:** the hub and `shared/sem7.js` are in place. The two bridge lines have **not** been added to
the subject sites yet, because their End Sem content is still being written. Until they are added, the
hub notices existing progress and shows "Progress saved. Open the subject once to show it here."

## Progress and URLs

`localStorage` belongs to the origin (`https://anjalidmore.github.io`), not to the path. Moving a site
from `/ADS-SH2026/` to `/SEM7-SH2026/subjects/ads/` keeps its progress. **Moving to a custom domain
would not.** Export progress from each subject's Settings before ever doing that.

## Publishing (not done yet)

1. Create the GitHub repository `anjalidmore/SEM7-SH2026` and push `main`.
2. Settings → Pages → Deploy from a branch → `main` / root.
3. Check the hub and all five subjects at `https://anjalidmore.github.io/SEM7-SH2026/`.
4. Only then, replace each old repository's site with a redirect to its new path.

## Checking it

The Phase 2 checks (118 assertions, headless Chromium) covered the hub at six widths and five
points in the exam timeline, malformed and missing summaries, blocked storage, and the bridge on all
five sites: no console errors, no network requests, sticky headers unaffected, existing progress
picked up on first open, and graceful behaviour without `sem7.js`.
