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
index.html            the semester hub: overview, continue, subject cards, study sessions, timetable
shared/sem7.css       the design system every subject site uses (tokens, header, components)
shared/sem7.js        timetable + subject list (single source), the strip, the progress bridge,
                      the session planner, the icon set, the shared page parts (SEM7.ui) and tab overflow
shared/syllabus.js    all six modules per subject; which have material (built) and, for those that
                      do not, the syllabus topics and LOs shown on their "Material pending" page
subjects/<code>/      one study site per subject (content + its own progress logic + the few styles
                      only it needs); index.html covers all modules
scripts/bridge.sh     checks each subject is wired to shared/ and adds the attach line if missing
docs/PLAN.md          the End Sem plan (user-facing)
docs/IMPLEMENTATION.md  the build manual and workstreams for Claude sessions working on this repo
docs/BUILD-PROMPT.md  the master build prompt the ADS, OR and DL sites were built from
_resources/           lecture decks, notes and textbooks (local only, gitignored, never published)
.nojekyll             tells GitHub Pages to serve files as they are
```

Shared code lives in `shared/`; everything about one subject lives in its own folder, so a subject can be
updated without touching the others. Learning content stays in each site's own data arrays, organised by
module and topic. Progress is never stored in the repository: each site keeps it in the browser.

The subject sites were imported from their original repositories (`anjalidmore/<SUBJECT>-SH2026`)
with their git history, keeping only the site files. Tag **`mse-final`** marks every site exactly as it
was for the Mid Sem, before any End Sem work.

`_resources/<code>/` holds each subject's lecture material, copied on 31 Oct 2026 from the original
folders in `~/Desktop/projects/Sem7/`. Put new End Sem material here. `_resources/ai/ese.html` and
`ESE-COVERAGE.md` are an earlier AI End Sem draft, kept as reference only; AI's End Sem site is
`subjects/ai/index.html`.

## How the hub gets each subject's progress

Each subject keeps its own progress, under its own `localStorage` key, exactly as before. The hub never
reads or changes it. Instead, each subject site loads `shared/sem7.js` in its `<head>` and ends its
`<body>` with:

```html
<script>window.SEM7 && SEM7.attach("ads");</script>
```

`SEM7.attach` adds a thin strip above the site's own header (back to the hub, jump to another
subject, this subject's countdown). It also writes a small summary to `sem7.summary.<code>`
whenever the site saves or re-renders: the overall figure, topics done and remaining, module bars,
the current module and the site's own "study next" item. The hub's **Continue** buttons link to
`subjects/<code>/index.html#sem7=<target>`; the bridge removes that hash and opens the target with the
site's own navigation. The summary uses the site's **own** progress functions, so the
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

Since Phase 4 the subject sites depend on `shared/`: their styles and their topic and module headers
come from it. Publish the repository as a whole. If browser storage is blocked, everything still
renders; progress is just not saved.

"Topics" means the site's own topic list: all topics for AI and ADS, exam-priority topics for OR and DL
(matching their readiness figures), and syllabus topics (1.1, 2.4 …) for NLP, where a topic is done
once every question filed under it is done. "Next" is the site's own Study Next choice; OR and DL have
none, so it is the first unfinished exam-priority topic in course order.

All five sites carry the bridge lines. Progress saved before this (Mid Sem work) is kept as it is. Until a
subject has been opened once in a browser, the hub shows "Progress saved. Open the subject once to
show it here." No migration is needed, because storage keys and topic ids are unchanged.

### Study plan

Studying starts on `STUDY_START` (Mon 16 Nov, in `shared/sem7.js`). From then until the last paper, every
day goes to the next paper, and the afternoon of an exam day goes to the paper after it. The hub shows this
as blocks (for example "Mon–Wed 16–18 Nov · AI · 3 days"), drops past days and highlights today's block.

### Updating a subject

Edit `subjects/<code>/index.html` here. This repository is now the source of truth: the copies in the
old per-subject folders (`~/Desktop/projects/Sem7/…`) still have the pre-Phase 4 design, so copying one
in would bring the old look back. `scripts/bridge.sh` checks the wiring and refuses `--from` without
`--force` for that reason.

If a site renames the functions the bridge reads, which are listed in the adapter for that site in
`shared/sem7.js`, update the adapter as well. A failed adapter never breaks the site. The hub just keeps
showing the last good summary.

## Design system

All five subjects use one design, defined once in `shared/sem7.css` and `shared/sem7.js`. Each subject
keeps its own content, its own learning workflow and a short `<style>` block for components only it has.

**One layout for every subject.**

```
← Semester 7   AI  NLP  ADS  OR  DL                          ESE Thu 19 Nov · in 19 days   (strip)
Artificial Intelligence   Dashboard  Module 1 … Module 6  Numericals  More ▾   ⌕ ◐ ⚙      (sticky bar)
─────────────────────────────────────────────────────────────────────────────────────────
Module 2 · Problem Solving, Search and Optimization  ›  Theory                  (breadcrumb)
Problem Solving Agent and Problem Formulation                                   (h1)
[High priority] [5 marks]
○ Not started  ─────────────  0 / 3 questions worked                           (progress line)
… the subject's own content …
[← Previous · title]                                   [Next · title →]         (pager)
                         Back to Module 2
```

- The **strip** says which subject you are in and links to the hub and the other four.
- The **subject bar** has the subject's name, one row of tabs and the tools (search, theme, settings).
  Tabs that do not fit move into a **More** menu, which names the current page when it is in there;
  there is never a second navigation level. A topic page keeps its module's tab active.
- A **module page** opens with its number, title and a progress line, then the site's sub-tabs.
- A **topic page** opens with a breadcrumb (module, then track), the title, at most a priority pill and
  outcome or marks pills, and its completion status. It ends with Previous / Next in the order the module
  pages list topics (crossing into the next module is labelled) and Back to the module.

**Tokens.** One palette (the hub's), light and dark, with Light / Dark / Match system on every subject.
Each subject has a single accent colour, the same one the hub uses for it, set by
`<html data-subject="…">`: AI indigo, NLP and ADS blue, OR bright blue, DL brown. The accent marks the
active tab, links, progress fill and high priority. Green, amber and red appear only in status, the
semantic boxes and quiz feedback. System fonts, 15px body text, no shadows except under the sticky bar.

**Components** (in `sem7.css`): card, semantic box (accent, tip, warning, mistake, neutral), pill,
progress bar, status dot (ring = not started, half = in progress, filled = done, always with a label),
buttons (one primary per screen), underline tabs for both the subject bar and sub-tabs, topic card,
tables with horizontal rules only, formula and code blocks, numbered worked steps, disclosure, filters,
quiz options, search results, toast. The sites' existing class names map onto these, so a site's
markup did not have to be rewritten.

**Shared page parts** (`SEM7.ui` in `sem7.js`): `head` (breadcrumb, eyebrow, title, pills, progress),
`crumb`, `progress`, `status`, `pager` and `neighbours`. Each site calls them from its own view functions
with its own data-attributes for links, so its own router does the navigating.

**What stays per subject.** NLP keeps its per-module question bank (outcomes, theory, class-solved,
numericals, flashcards, quizzes), with no topic pages. AI keeps its Learn / Understand / Example step
tabs, inline SVG diagrams, three-state topic marking and flashcards. DL keeps its "On this page" rail.
ADS, OR and DL keep the six-section topic page they were built with. All dashboards open with a
"Dashboard" heading and keep their own content.

**Changes beyond styling.** AI's sidebar became the shared top bar. DL's hamburger menu was replaced by
the More menu. NLP gained a theme switch (key `nlp_theme_v1`) and a search button. The search field opens
under the bar as in OR and DL. The decorative progress rings on the AI and NLP dashboards were removed;
the percentage was already printed beside them.

## Development

There is nothing to install and nothing to build. Serve the folder over HTTP:

```sh
git clone https://github.com/anjalidmore/SEM7-SH2026.git
cd SEM7-SH2026
python3 -m http.server 8000        # or: npx serve .
# open http://localhost:8000/
```

Opening `index.html` straight from disk also works. Progress kept under `file://` is separate from
progress on `localhost` and on GitHub Pages.

**Build:** none. The deployed site is exactly these files.
**Environment variables:** none.

## Progress and URLs

`localStorage` belongs to the origin (`https://anjalidmore.github.io`), not to the path. Moving a site
from `/ADS-SH2026/` to `/SEM7-SH2026/subjects/ads/` keeps its progress. **Moving to a custom domain
would not.** Export progress from each subject's Settings before ever doing that.

## Deployment (GitHub Pages)

Published at <https://anjalidmore.github.io/SEM7-SH2026/> from `main` / root. Every push to `main`
redeploys. The End Sem plan is in [`docs/PLAN.md`](docs/PLAN.md).

The five old per-subject repositories are being retired. Deleting a repository needs the
`delete_repo` scope, which the GitHub CLI does not have by default:

```sh
gh auth refresh -h github.com -s delete_repo
gh repo delete anjalidmore/AI-SH2026 --yes   # and so on for NLP, ADS, OR, HMC
```

Any other static host (Netlify, Cloudflare Pages, a plain web server) works the same way: publish the
repository root, with no build command. Progress moves with the origin, so a new host starts empty.
Use each subject's Export / Import to carry it across.

## Checking it

Phase 4 (design system), 167 assertions in headless Chromium across the five subjects: the strip, sticky
bar and subject accent are present; every tab and every More item navigates and marks one tab active;
topic pages have the breadcrumb, progress line and pager; Next and Previous open the neighbouring topics;
the track breadcrumb opens that sub-tab; Back opens the module; marking a question changes the status;
search returns results; the theme switch works; there are no JS errors; there is no horizontal scroll and
the tab row fits at 320, 390, 768 and 1280 px; the hub's Continue links still open their targets.
Screens were also compared side by side in light and dark, at 1280 and 390 px.

The first Phase 2 checks (118 assertions, headless Chromium) covered the hub at six widths and five
points in the exam timeline, malformed and missing summaries, blocked storage, and the bridge on all
five sites: no console errors, no network requests, sticky headers unaffected, existing progress
picked up on first open, and graceful behaviour without `sem7.js`.

The second round (86 assertions) added these checks:
- each site's summary equals the figure on its own dashboard after marking work;
- topic, current-module and next-item fields on all five sites;
- Continue opening the right topic in each site, with the bridge hash removed;
- invalid and malformed targets falling back to the site dashboard;
- the session plan on and after an exam day, and after the last paper;
- no horizontal scroll from 320 to 1280 px, light and dark themes, and blocked storage.
