# SEM7-SH2026: Semester 7 study dashboard
Static site: no backend, no build step, no dependencies. Works from disk and on GitHub Pages.

## Run
- Open index.html (hub) or subjects/<ai|nlp|ads|or|dl>/index.html in a browser.
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
- Exams: AI 19 Nov, NLP 21 Nov, ADS 25 Nov, OR 27 Nov, DL 30 Nov 2026 (per README).

## Git
- Branch: main. Remote: origin, github.com/anjalidmore/SEM7-SH2026
