# SEM7-SH2026: Semester 7 study dashboard
Static site: no backend, no build step, no dependencies. Works from disk and on GitHub Pages.

## Run
- Open index.html (hub) or subjects/<or|dl>/index.html in a browser.
- No test suite or package.json found.
- `scripts/bridge.sh` checks each subject is wired to shared/ and adds the attach line if missing.

## Layout
- shared/ (sem7.css design system, sem7.js timetable/subject list/progress bridge, syllabus.js, studyplan.js: module weights + day-by-day timetable generator)
- subjects/<code>/ one self-contained study site each
- docs/ PLAN.md, IMPLEMENTATION.md (build manual for Claude sessions), BUILD-PROMPT.md
- _resources/: lecture material, local only and gitignored. Never publish it.

## Non-obvious
- Progress lives in each browser's localStorage, never in the repo.
- Each subject ends with `<script>window.SEM7 && SEM7.attach("<code>");</script>`
- Tag `mse-final` marks the sites as they were for the Mid Sem.
- AI was written 19 Nov and removed (site, notes, resources); tag `ai-final` keeps its last version.
- NLP was written 21 Nov and removed the same way; tag `nlp-final` keeps its last version.
- ADS was written 25 Nov and removed the same way; tag `ads-final` keeps its last version.
- Exams: OR 27 Nov, DL 30 Nov 2026 (per README).

## Git
- Branch: main. Remote: origin, github.com/anjalidmore/SEM7-SH2026
