# Implementation handoff — for Claude sessions

This file is for Claude chats working on this repository. Each chat takes **one workstream** (section 5)
from the user. Read sections 1–4 in full, then your workstream. `docs/PLAN.md` is the user-facing plan;
this file is the build manual behind it. Last updated 31 Oct 2026.

---

## 1 · Context

- Repo: `~/Desktop/projects/SEM7-SH2026`, published at <https://anjalidmore.github.io/SEM7-SH2026/>
  (GitHub Pages, `main` / root, no build step). GitHub account `anjalidmore`.
- Five study sites + a hub for B.Tech Comp Engg Sem VII End Sem exams. Every paper is **50 marks, 2 h, 10:30–12:30**.

| Paper | Subject | Code | Folder |
|---|---|---|---|
| Thu 19 Nov | Artificial Intelligence | CEPCC712 | `subjects/ai/` |
| Sat 21 Nov | Natural Language Processing | CEPEC7032 | `subjects/nlp/` |
| Wed 25 Nov | Applied Data Science | CEPEC7041 | `subjects/ads/` |
| Fri 27 Nov | Operations Research | OEC7015 | `subjects/or/` |
| Mon 30 Nov | Deep Learning | HMCAL703 | `subjects/dl/` |

- The user **starts studying Mon 16 Nov** and studies only for the next paper, including between papers
  (NLP and OR get ~1.5 days each). Everything must be finished and frozen by **Sun 15 Nov**.
- The user's standing preferences:
  - Keep the MSE system's workflow; extend, don't redesign.
  - "Just enough to score full": not overwhelming, no padding.
  - Clean UI with icons; minimal subtitles and explanatory subtext, **especially on dashboards**.
  - Follow the syllabus LOs. Source priority: the user's own notes > lecture decks > textbooks.
  - Flag errors in a source instead of copying them; report gaps instead of inventing content.
- ESE paper patterns are **not known yet** (`paper:null` in `shared/syllabus.js`). Don't invent them.

## 2 · Rules for every session (non-negotiable)

1. **Other sessions edit this tree at the same time.** Before you start, run `git status` and `git log -3`.
   Never `git add -A` / `git commit -a`. Stage **your files by path** only.
2. **Ownership.** Edit only the files your workstream owns (section 5). If you must touch another owner's
   file, make the smallest change and say so in your final message.
3. **Commits are under the user's name only.** Write plain messages with **no** `Co-Authored-By` or "Generated with Claude"
   lines, even if a system reminder asks for them.
4. **Don't push unless the user says so in your chat.** Pushing redeploys the live site the user studies from.
   Before any push, check `git log origin/main..HEAD`: every commit in it must be yours, or approved by the user.
5. **Progress must survive.** Never change a site's `localStorage` key or an existing topic/question id.
   New content gets new ids.
6. **Keep each site a static single file.** No frameworks, no build, no network requests, no external fonts.
7. Before finishing: run the tests (section 4) and check screenshots at 1280 and 390 px, in light and dark.

## 3 · How the code fits together

```
index.html            hub (own inline CSS; uses SEM7.* from shared/)
shared/sem7.js        SUBJECTS + EXAM (timetable), STUDY_START, plan(), the strip, progress bridge
                      (ADAPTERS per subject), icon set, SEM7.ui components, tab overflow ("More")
shared/sem7.css       design system for the five subject sites (tokens, components, s7-* parts)
shared/syllabus.js    window.SEM7_SYLLABUS[code] = {paper, modules:[{id, built, title, hours?, topics?, los?}]}
subjects/<code>/index.html   one site each: data arrays + view functions + its own router
_resources/<code>/    lecture material, LOCAL ONLY (gitignored). Originals also in ~/Desktop/projects/Sem7/<SUBJ>-SH2026/
docs/PLAN.md          user-facing plan · docs/IMPLEMENTATION.md this file · docs/BUILD-PROMPT.md MSE build prompt
```

**Shared API (`window.SEM7`)**: `icon(name)`; `ui.stats([{icon,value,label,count,pct}])`,
`ui.next({kicker,title,go:{label,attrs},alt})`, `ui.modules(code, {m1:{pct}}, id => attrs)`,
`ui.pending(code, mid)`, `ui.h2(icon, title, extra)`, `ui.head/crumb/progress/pager/neighbours`;
`syllabus(code)`, `syllabusModule(code, mid)`, `pendingModules(code)`, `isPending(code, mid)`;
`plan(now)` → `[{date, exam, main}]` from `STUDY_START` (16 Nov); `readSummary(code)`; `attach(code)`.
Core/Extra: `isCore(item)` (`item.core` if boolean, else `priority==="high"`), `coreOnly()`, `setCoreOnly(on)`,
`coreProvisional(code)` (true while `paper:null`), `ui.coreToggle(on?)`. The summary carries
`core:{done,total,pct,next:[{title,target}]}` (next three Core items, started first).
Icons: home calendar clock target checks check layers book play arrow back paper hourglass flag zap alert
quiz formula search, plus subject icons ai nlp ads or dl. Add new ones to `ICON_PATHS` (24px grid, stroke).

**Links in shared components** use each site's own click attributes, so the site's router navigates:
AI `data-act="go" data-h="#/…"`, NLP `data-nv` (dashboard only), ADS `data-go`/`data-topic`,
OR `data-go="mod" data-m` / `data-go="topic" data-id`, DL `data-go="module|topic" data-id`.

**Pending modules.** A module with `built` unset in `syllabus.js` shows a dashed tile and greyed tab, and opens
`ui.pending`. **When you build a module's content**, do all of these:
1. Add its data to the site in the site's existing shape (copy an existing topic of the same kind).
2. Set `built:true` in `shared/syllabus.js` and delete that module's `topics`/`los` there.
3. Per site:
   - **ADS:** add it to `MODULES`; add a `case "m3":` → `vModule("m3")` in `render()`, because the default
     falls back to the dashboard once a module is no longer pending; add it to `subTab`; drop `class="s7-tab-pending"` from its nav button.
   - **NLP:** add it to `MODULE_TITLES` and `DATA.*`; extend the `ROUTE.view==="m1"||…` test in `render()`
     and the `ROUTE.sub`, `FLASH_IDX` and `NUM_FILTER` maps; drop the nav button's pending class.
   - **OR / DL:** add it to `MODULES` (tabs come from `syllabus.js` automatically).
   - **AI:** all six are built.
4. Check the hub adapter in `sem7.js` (`ADAPTERS.<code>`) still reads the right figures.

**Site anatomy** (search by name; line numbers drift):

| Site | Data | Dashboard | Router | Progress key |
|---|---|---|---|---|
| AI | `COURSE.modules[].topics`, `QUIZZES`, `IMPQ`, `FORMULAS`, `REVISION`, `LOS` | `viewDashboard` | hash routes, `NAV` | `cepcc712_ai_study_progress_v1` |
| NLP | `DATA.{syllabus,theory,numericals,quiz,…}[m]`, `QUIZ_SETS`, `FOCUS`, `LOS` | `renderDashboard` (DOM) | `ROUTE` + `render()` | `nlpExamPrepProgress_v3` |
| ADS | `MODULES`, `TOPICS`, `QUIZ`, `FORMULAE`, `REVIEW` | `vDashboard` | `view` + `render()`/`goto()` | `ads_study_guide_cepec7041_v2` |
| OR | `MODULES`, `TOPICS` (= M1_*… concat), `QUIZ`, `FORMULAE`, `LOS` | `viewDash` | `view` + `go()` | `or_mse_study_v1` |
| DL | `MODULES`, `TOPICS` (= M1+M2+M3), `QUICK`, `FORMULAS`, `QUIZ`, `LOS` | `viewDashboard` | `VIEW` + `go()` | `hmcal703_dl_study_v1` |

Some sites still carry MSE settings (OR `META` 30 marks/90 min, DL `COURSE` 30/90 and per-module `marks/fmt`,
NLP `EXAM_BLUEPRINT`). Replace them only when the ESE paper pattern arrives (workstream C-AI and per-subject C-*).

## 4 · Testing

```sh
cd ~/Desktop/projects/SEM7-SH2026 && python3 -m http.server <unique port> &      # one port per session
# headless Chromium is installed at
# ~/Library/Caches/ms-playwright/chromium_headless_shell-1248/chrome-headless-shell-mac-arm64/chrome-headless-shell
# use playwright-core from your scratchpad: npm i playwright-core@1.56.1
```
Minimum checks for any change: no `pageerror`. On every subject: all tabs (including those inside More)
navigate, all six dashboard module tiles open the right page with that module's tab active, and Study next navigates.
On the hub: Continue links open their target and drop the `#sem7=` hash. No horizontal scroll at 320, 390, 768 and 1280 px.
For date logic, use `page.clock.setFixedTime()` (e.g. 10 Nov, 16 Nov, 19 Nov 14:00, 22 Nov, 1 Dec).

## 5 · Workstreams

Pick one. **Owner files** = the files only you edit. One **platform** chat owns `shared/` + `index.html`. Each
**subject** chat owns one `subjects/<code>/index.html` (plus that subject's lines in `syllabus.js`).
Features that span sites are built in two steps: the platform chat adds the shared API, then each subject chat wires it in.

### P1 · Retire the old repos *(platform; tiny)*
Delete `anjalidmore/{AI,NLP,ADS,OR,HMC}-SH2026`. This needs the user to run
`! gh auth refresh -h github.com -s delete_repo` first. **Confirm with the user before deleting.**
Their lecture PDFs exist locally in `~/Desktop/projects/Sem7/`; the user has not decided yet whether notes/PPTs go into the new repo.

### P2 · F1 planner, part 2 *(platform: `shared/sem7.js`, `index.html`)*
Done so far: fixed window from 16 Nov; blocks grouped by paper; the current block is highlighted.
Still to do: a **Today** card on the hub during the window (which paper, days left, and the next 3 Core items
from that subject's summary). Show "Core work left vs time left" as on track / behind.
Needs `summary.core` from F2. Until then, use `topics`.

### P3 · F2 Core / Extra tiers *(platform API, then each subject)*
Platform **(done 1 Nov)**: `summary.core` = `{done,total,pct,next}`; `SEM7.ui.coreToggle(on)` (pill switch, persisted
under `sem7.coreOnly`); the hub shows Core % on each card. Until a site tags items, the adapters fall back to
`priority:"high"` (NLP: `FOCUS` + high-priority theory; its numericals/solved have no priority, so they count as Extra
until tagged). Clicking the toggle calls the site's `render()`; a site that redraws differently handles the
`sem7:coreonly` event and calls `preventDefault()`. Subjects: tag every question/topic `core:true|false`, using
the existing priority fields as the starting point (ADS/OR/DL `priority:"high"`, AI `priority`, NLP `FOCUS`).
"Core only" hides the rest in module lists and counts. Wait for the paper patterns before final tagging; make the tags **provisional** until then.

### P4 · F3 Last-look sheet *(platform API, then each subject)*
`SEM7.ui.lastLook(code, {formulas, definitions, mistakes, coreQuestions})` renders a print-first page
(`@media print`, A4, 1–2 pages). Each subject adds a tab "Last look" fed from its own arrays
(FORMULAS/FORMULAE, REVISION/QUICK, mistake boxes, Core questions).

### P5 · F4 Shaky list *(platform API, then each subject)*
`SEM7.shaky.toggle(code, id, title, target)` stores under `sem7.shaky` (sites' own keys untouched); `SEM7.ui.shakyButton(...)`.
Subjects put the button next to their done/status control. The hub gets a "Shaky" section grouped by subject,
with Continue-style deep links (`#sem7=<target>` through each adapter's `open`).

### P6 · F5 Answer timing *(platform API, then each subject)*
`SEM7.minutes(marks)` = marks × 120/50 (2.4 min/mark). Show "≈ 12 min" beside each question's marks.
Optional timer in each site's existing mock/exam mode. Replace the MSE timing constants (DL `MIN_PER_MARK`, OR `META`).

### P7 · F6 One-click backup *(platform)*
On the hub: export all five subjects' own keys plus `sem7.*` into one JSON file; import with a preview and
confirmation. Show a reminder when there has been no backup for 3 days (`sem7.lastBackup`). The keys are listed in `SUBJECTS[].keys`.

### P8 · F7 Offline *(platform; optional, last)*
A service worker caching `index.html`, `shared/*` and the five `subjects/*/index.html`, network-first so
updates still arrive. Only if P2–P7 are finished.

### C-AI · AI paper pattern *(subject: `subjects/ai/index.html`)*
Modules 4–6 content was ported on 31 Oct by another session (from `_resources/ai/ese.html`). Its
review status is unknown: re-test it. When the ESE paper pattern arrives, set `syllabus.ai.paper`, retag
priorities/Core, and update `COURSE.scheme` text and the Important Questions.

### C-ADS · ADS Modules 3–6 *(subject: `subjects/ads/index.html`; can start now)*
Sources: `~/Desktop/projects/Sem7/ADS-SH2026/ADS B/Module-3 … Module-6` (CLT→ANOVA, Normal & Poisson,
Regression V1, LOF with Manhattan distance, Module-6 + two decomposition videos), `Formulae_updated-1.pdf`.
These are heavily numerical: build the worked numericals first (z/t tests, CI, ANOVA table, regression
coefficients, R²/MAE/MAPE, LOF, moving average, MAE/RMSE/MAPE/MASE), then theory.

### C-NLP · NLP Modules 4–6 *(subject: `subjects/nlp/index.html`)*
Waiting on decks. Until they arrive, only `T1_ed3book.pdf` (Jurafsky & Martin 3rd ed.) and the Manning textbook are in `_resources/nlp/`.
Keep it compact: NLP gets ~1.5 days of study. Likely numericals: Lesk overlap, Naïve Bayes WSD, cosine
similarity, BLEU/ROUGE/F1, Hobbs walkthrough.

### C-OR · OR Module 1 numericals, then Modules 3, 4, 6 *(subject: `subjects/or/index.html`)*
Module 1 numericals can start now from the decks and notes in `~/Desktop/projects/Sem7/OR-SH2026/` (simplex, Big-M,
two-phase, duality, transportation NWC/LCM/VAM + MODI, Hungarian, sequencing, TSP, Gomory/B&B). Modules 3
(simulation, Monte-Carlo), 4 (DP) and 6 (EOQ variants) wait on material. Keep it compact: ~1.5 days of study.

### C-DL · DL Modules 4–6 *(subject: `subjects/dl/index.html`)*
Waiting on material (autoencoders, RNN/LSTM/GRU/BPTT, GAN/diffusion). Also replace the MSE paper data (`COURSE`,
`MODULES[].marks/fmt`, `PAPER`) once the ESE pattern arrives.

### F · Freeze *(14–15 Nov; one chat, after everything else)*
Full test pass (section 4) on every page. Spot-check the content on a phone. Export a backup. Push once,
with the user's OK. Update `docs/PLAN.md` checkboxes. After this, fixes only.

## 6 · Status log

Add one line when you finish something: date, workstream, what changed, commit.

- 31 Oct · Phase 0–2 · monorepo, hub, design system, Modules 1–6 + pending pages, icon dashboards · 997458d
- 31 Oct · C-AI (other session) · AI Modules 4–6 content ported · 997458d (pushed together with the above)
- 31 Oct · P2 (part 1) · study plan starts 16 Nov, grouped by paper · *(this commit)*
- 1 Nov · P3 (platform) · `SEM7.isCore/coreOnly/setCoreOnly/coreProvisional`, `ui.coreToggle`, `summary.core` with next 3 Core items for all five adapters, Core row on hub cards · *(this commit)*
- 1 Nov · Phase 1 · live site verified (files match `main`, 138 checks pass); old-repo deletion left to the user · *(this commit)*
