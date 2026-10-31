# MASTER BUILD PROMPT — Academic Exam Study Site (any subject)

**Version 2.** Rewritten after the OR MSE build, where roughly a third of the finished
site came from instructions I had to give *after* the first prompt. Everything I had to
say twice is now in here. The phases below run in order; do not start Phase *n* until
Phase *n−1* has been reported.

---

## 0 · FILL THIS IN

```
SUBJECT / COURSE NAME  :
EXAM                   :
SCOPE (modules/units)  :
TOTAL MARKS            :
DURATION               :
OUTPUT FILE            : index.html

PAPER STRUCTURE        : (if the teacher stated one — see 0.1. Otherwise "not stated")
STUDY TIME AVAILABLE   : (e.g. "4–5 hours, total, from scratch")
TARGET SCORE           : (e.g. "25–27 / 30")
HIGHEST-PRIORITY FILES : (e.g. "the handwritten notes PDFs", "the question bank docx")
```

If any field is blank or says "find it", locate it in the folder yourself and tell me what
you found before building. If `STUDY TIME AVAILABLE` and `TARGET SCORE` are filled in, the
site **must** contain a Plan tab (§5.2). If they are blank, skip that tab entirely.

### 0.1 · Paper structure — the single most important input

If I have told you the shape of the paper, restate it as a table before you do anything
else and treat it as the top authority for priority, above slide counts, above LOs, above
everything. It looks like this:

| Question | Drawn from | Type | Marks |
|---|---|---|---|
| Q1 | Module 1 only | Theory only. No numericals. | 2 |
| Q2 | Module 2 | Numericals + theory, same format as the past IA paper | 4 |
| Q3 | Module 5 | Numericals + theory, same format as the past IA paper | 5 |

Consequences you must apply without being asked:

- A topic that cannot appear on this paper is **lowest priority — ranked down, never
  deleted.** It keeps a full topic page. It is not silently dropped and it is not padded.
- If Q1 is 2 marks and theory-only, then every Module 1 numerical method — however much
  lecture time it got — is low priority, and every Module 1 answer skeleton on the site is
  written at 2 marks, not 5 or 10.
- "Same format as the past paper" means: go read the past paper, extract its actual
  question shapes, and make the practice questions match them.

### 0.2 · When my instruction is ambiguous

Do not stop and wait, and do not silently pick one reading. Pick the reading that fits the
rest of the evidence, **build on it**, and put a short *"One thing to confirm"* note at the
top of the README and in Settings → About stating both readings and why you chose yours.

Worked precedent: I wrote *"MOD 2 AND 3 have numericals + theory"* while my stated scope
was Modules 1, 2 and 5. The right response was to read it as *Questions 2 and 3*, build
that, and flag in one paragraph that if I literally meant syllabus Module 3, there is no
material for it in the folder at all.

---

## 1 · WHAT YOU ARE BUILDING

A single self-contained `index.html` — no backend, no build step, no dependencies, no
network requests at runtime — that trains me to **recognise a question, choose the right
method, and execute it under time pressure**. It is a study *system*, not a set of notes.

It must work identically opened from disk (`file://`) and published on GitHub Pages, and
it must render correctly for a person who has never opened it before.

---

## 2 · NON-NEGOTIABLES (read these twice)

1. **Do not assume the subject from its name or from my prompt.** Course codes and
   abbreviations lie. "ADS" can be Advanced Data Structures or Applied Data Science. Read
   the actual material first. If the material contradicts what I told you, say so in one
   line, then build for what the material actually says.
2. **No hallucinated content.** Every fact, formula, definition, example and number must be
   traceable to a file in the folder. If you cannot trace it, do not include it.
3. **No fake past papers.** Unless the folder literally contains a previous-year paper of
   *this* assessment, nothing may be labelled "previous year" or "guaranteed". A paper for
   a *different* assessment (an IA when the exam is an MSE) is useful for format and must
   be named as what it is — never as a past paper for this exam.
4. **Never hardcode progress.** No `const progress = 72`, no seeded completions. A
   brand-new browser opens at **0%**, always. Every percentage is computed at render time
   from that browser's own storage.
5. **Progress comes from questions, not from pages.** Opening a topic marks nothing. Only
   explicitly marking an individual question done moves any number.
6. **Everything appears once. Twice is the absolute maximum, and the second appearance must
   serve a different purpose.** Redundancy is the main thing that makes these sites feel
   cluttered and useless.
7. **Cover every file, rank ruthlessly.** Every substantive document in the folder gets at
   least one topic page, even material that cannot be on the paper. Coverage is not the
   same as emphasis: low-priority material is *marked* low, not omitted. I should never
   discover a deck in my folder that the site has never heard of.
8. **Verify every number before shipping.** See Phase 4.
9. **Do not soften or invent around gaps.** If the material is thin on a syllabus topic,
   say so on that topic's page in one plain sentence rather than padding it.
10. **Do not commit or push unless I ask.**

---

# PHASE 0 · ORGANISE THE FOLDER

I dump material in raw. Organising it is part of the job, not a separate request.

### 0.1 Module folders
Create one folder per syllabus module: `Module N - <syllabus title>`. Read the **contents**
of every document and place it in the module whose syllabus topics it actually teaches.
**Never file by filename** — filenames lie at least as often as course codes do.

- A document spanning several modules goes in the module holding its *primary* content.
  **Flag it in the report; never duplicate the file.**
- Syllabi and scope sheets go in `_Syllabus/`.
- Question banks, past papers and solution keys go in `_Question Bank/`.
- Handwritten or class notes go in `_NOTES (highest priority)/` — see 0.3.

### 0.2 Rename by learning outcome
Rename every resource to `<module>.<nn> [LOs] <short description>`, e.g.
`2.03 [LO5] Queuing — M/M/1 performance measures.pptx`. The `nn` is also the recommended
study order within the module. Multi-LO files list every LO. Write the whole mapping to
**`_LO-MAP.md`** — the LO table verbatim from the syllabus, then a per-module file table,
then an explicit list of LOs with **no material anywhere**.

### 0.3 Notes outrank slides
Handwritten notes, class notes and anything I explicitly name as high priority are the
**highest-authority source in the folder**. They are what was actually said in class.

- Extract them first and in full, before any deck.
- A concept that appears in **both** the notes and a deck is automatically high priority.
- A concept that appears **only** in the notes and in no deck is a finding — say so
  explicitly in the report and give it a topic page.
- Where notes and slides conflict, flag it and tell me which to trust for this exam.

### 0.4 Gap report — required output of this phase
Print, and also write to **`_ORGANISATION.md`**:
1. The module folders created.
2. Every document placed in each, with one line on its actual content.
3. Documents flagged as spanning modules.
4. **Every syllabus topic with no material in the folder**, named exactly as the syllabus
   names it. If nothing is missing, say so explicitly — do not leave it to inference.
5. Every file you could not read, and why.

Then continue to Phase 1 without waiting for me.

---

# PHASE 1 · READ EVERYTHING

### 1.1 Inventory
Every file: type, page/slide count, one line on contents. Print it.

### 1.2 Extraction rules
- **PDFs (text)**: extract text. If `pdftotext` / `qpdf` are unavailable, make a Python
  venv in the scratchpad and `pip install pymupdf`.
- **PDFs extracting < ~500 characters are scans or handwriting.** Do not skip them and do
  not guess. Render every page to PNG at ~130 dpi and read the images directly. In the OR
  build this was the single highest-signal file in the folder.
- **Images embedded inside decks are usually the data.** Payoff matrices, tables, worked
  arithmetic and corner-point charts are pasted in as pictures, so text extraction returns
  the slide title and nothing else. Extract every embedded image and read it. In the OR
  build, 92 embedded images had to be read to recover the actual numbers.
- **DOCX/PPTX**: extract text and, critically, **speaker notes and slide titles**.
- **Screenshots and photos I paste into the chat**: treat them exactly like folder
  material — they are usually notes or a question bank. Read them, and say what you did
  with them.
- **Spreadsheets**: read the data; they often hold the exact datasets used in problems.

### 1.3 Question banks and past papers — mine them completely
If the folder holds a question bank, an important-questions list, or a past paper with
solutions, it is worth more than any deck.

- **Every single question in a question bank gets written up on the site**, with a model
  answer at the mark value the paper actually uses. Not a sample. All of them.
- Count how often each theme recurs across the bank and say so — recurrence is the
  strongest priority signal that exists.
- From a past paper, extract the *shape* of each question (what it gives you, what it asks
  for, how the marks split) and mirror that shape in practice questions.
- Verify the past paper's own answers. They contain mistakes. See 4.2.

### 1.4 Report before continuing
A short brief: what the subject actually is, the topic list you derived, how many worked
examples and practice questions exist in the source, what is missing, and any contradiction
with §0. **Then continue without waiting for me** unless the subject itself is wrong.

---

# PHASE 2 · THE EXAM CONTRACT

Extract and print, before designing any content:
- the exact modules/units in scope, and whether "all topics" or a named subset
- the official learning outcomes, **verbatim and numbered**
- any "focus on" / "important" list the teacher gave, and where it came from
- marks distribution and duration
- the paper structure from §0.1, or the pattern the past paper implies
- for each module: an evidence table — slide count, notes pages, worked examples in source,
  question-bank hits, LOs served, past-paper marks

That evidence table is what justifies priority. It goes on the site (Plan tab, or Settings
→ About if there is no Plan tab) so the priority tags are trustworthy rather than asserted.

---

# PHASE 3 · THE CONTENT MODEL

### 3.1 Topics
A flat topic list derived from the syllabus, grouped by module, **8–20 topics per module**.
A topic is one thing that could be asked as one exam question. No topic for a heading with
no material behind it.

```js
{
  id:"m2t7", m:"m2",
  title:"Karl Pearson's Coefficient of Skewness",
  type:"problem-solving",        // "problem-solving" | "theory"  (see 3.2)
  priority:"high",               // DERIVED — see 3.3
  los:[3,5],
  summary:"One line, max 110 chars, shown on the topic card.",

  whatIs:"<p>…</p>",             // 1–2 sentences, plain words
  concept:"<p>…</p><table>…",    // the actual teaching: derivation, logic, tables
  needToKnow:["…"],              // 3–6 bullets: what you must be ABLE TO DO

  recognition:{ clues:["…"], wording:["…"], firstMove:"…", trap:"…" },
  examAnswer:{ short:"…", medium:"…", long:"…" },   // at THIS paper's mark values
  mistakes:["…"],                                   // 3–6, specific, not generic

  examples:[{ id:"m2t7e1", title:"…", q:"…", steps:["…"], answer:"…", trap:"…" }],
  practice:[{ id:"m2t7p1", q:"…", hint:"…", a:"…", d:"moderate" }],
  questions:[{ q:"…", marks:5, d:"moderate", priority:"high", source:"source" }],

  myClassExtras:[], otherClassExtras:[]   // only if 3.5 applies
}
```

**`examAnswer` is sized by the paper, not by habit.** If this module's question is worth 2
marks, write a 2-mark skeleton and say so — do not ship the default short/medium/long trio
just because the schema has three slots.

### 3.2 The `type` split
Two tracks, so I can revise the way exams actually test:
- **Numerical subjects**: `"problem-solving"` vs `"theory"`.
- **Non-numerical subjects** (law, management, history, HR, literature): `"application"`
  vs `"theory"`. Rename the sub-tabs accordingly.
- Never invent a third value like `"mixed"`. Every topic goes in exactly one track, chosen
  by **how it will be answered in the exam**, not by how it was taught.

### 3.3 Priority — derived, never invented
Apply in this order; the first rule that fires wins.

1. **The paper structure (§0.1) overrides everything.** A topic that cannot appear on this
   paper is `low`, regardless of how much lecture time it got. A topic named by the paper
   structure is `high`.
2. **high** — in the teacher's focus list; **or** in the question bank; **or** in both the
   notes and a deck; **or** serves ≥ 2 LOs; **or** has ≥ 3 worked examples in the source;
   **or** is explicitly weighted in the paper pattern.
3. **medium** — a syllabus topic with real teaching material behind it.
4. **low** — one slide, definitional, background, or excluded by the paper structure.

State this rule on the site once, and state which sources fired for the high ones.

### 3.4 Questions
- Every question carries `source:"source"` (it exists in the folder) or
  `source:"predicted"` (you wrote it). Predicted questions must be a **minority** — under
  20% — and must be visually labelled everywhere they appear.
- Questions must be **MSE-difficulty, not recall-difficulty.** Match the cognitive level of
  the past paper and question bank. If the source asks "formulate and solve", do not ship
  "define".
- Distribute question count by exam weight, not by module size. The 4-mark module gets more
  questions than the 2-mark module even if it has a third of the slides.
- **No filler.** If a topic honestly supports 3 good practice questions, ship 3.
- Every practice question needs a `hint` that names the method without giving the answer,
  and a full worked `a`.

### 3.5 Divisions / multiple lecturers (skip if n/a)
Compare **at sub-topic level, not topic level** — divisions share a syllabus, so a
topic-level comparison trivially returns "everything is common" and is worthless. Record
per topic an explicit `myClassExtras[]` and `otherClassExtras[]`. **Confine it to one
dedicated tab**; do not sprinkle division tags across every card.

### 3.6 Quiz bank
Enough single-answer MCQs to fill whole sets of 20 (§5.5) — typically 60–160. Every
question carries `t` (topic id) and `stage` ∈ `{recognise, select, solve, concept}`. Every
question carries an `e` explanation that teaches, including *why the distractors are wrong*
where that matters. Weight the bank toward the high-priority modules.

### 3.7 Formula / reference sheet
Only if the subject has one. 6–12 named groups. Each entry `{f, m: meaning in words,
w: when you use it}`. If the subject has no formulas, replace with a **Key Definitions**
tab of the same shape, or drop it.

### 3.8 Quick Review
6–10 short cards **per module**, inside that module's tab. Night-before cards: irreducible
facts, comparison tables, traps, interpretation sentences. **Condensations, not copies** —
if a card can be pasted from a topic page verbatim, rewrite or delete it.

---

# PHASE 4 · VERIFY BEFORE YOU BUILD

Do this in Python in the scratchpad, and print the results.

1. **Recompute every numerical answer independently** — every mean, root, integral,
   complexity, balance, LP optimum, game value. Report as `N of N verified`. If one
   disagrees with the source, investigate: the source may be right and your arithmetic
   wrong. Watch for **alternate optima** before declaring an error.
2. **Flag contradictions in the material rather than propagating them.** Present the
   teacher's numbers as authoritative on the page, with a short, respectful note explaining
   the discrepancy. **Never silently "fix" a teacher**, and never present your correction as
   theirs. Audit the past paper's own solutions the same way — they are not exempt.
3. **Coverage check** — every LO has ≥ 1 topic; every syllabus bullet maps to a topic; every
   document in the folder maps to ≥ 1 topic; print anything unmapped.
4. **ID uniqueness** — no duplicate topic/example/practice/quiz ids.

---

# PHASE 5 · SITE ARCHITECTURE

```
Dashboard | [Plan] | Module 1 | Module 2 | … | Recognition | Quiz | Formulae | Exam Mode | [Divisions]
                                                       [ search · theme · settings icons ]
```

`[Plan]` exists only if §0 gave study time and a target. `[Divisions]` only if §3.5 applied.

- **There is no Search tab.** The search *icon* in the nav is sufficient.
- **One tab per module.** Never build a combined "Modules" index page.
- **Do not build these tabs** — their content belongs inside the module tabs:
  `Solved Examples`, `Practice`, `Important Questions`, `Flashcards`, `Revision`,
  `All Topics`, `Notes`. Wanting one means the redundancy rule is firing.

### 5.1 Dashboard — deliberately sparse
Target: **under 700 characters of visible text.** Exactly this and nothing else:

1. One `<h1>`, one lead line explaining that progress comes from marked questions and is
   local to this browser.
2. Three stat cards: **Overall readiness**, **[Track A] readiness**, **[Track B] readiness**
   — each `NN%` + `x of y questions` + a progress bar.
3. One card per module: name, `NN%`, `x of y questions · a of b topics finished`, Open.

**Readiness is computed over high-priority topics only** — the material actually on this
paper. Low-priority topics keep full pages and can still be marked done, but they must not
dilute the figure. Settings shows both the exam-priority and the whole-syllabus numbers, and
the Dashboard lead line says which one it is showing.

**No Study-next card. No Weak areas section.** Also, as before: no "what the paper will
ask" box, no exam-pattern strip, no activity heatmap, no streak widget, no quick-link button
row (the nav is the navigation), no division statistics.

### 5.2 Plan tab — the strategy, computed from evidence
Only when §0 gave study time and a target score. This is where all the planning lives, so
it never leaks onto the Dashboard. Sections, in order:

1. **Evidence table** (from Phase 2) — the numbers the ranking is built from.
2. **Module priority ranking** with estimated marks/weight per module.
3. **LO-wise priority table**: `LO | Topic | Module | Weight | 🔴 MUST DO / 🟠 HIGH /
   🟡 MEDIUM / 🟢 LOW | Where it is covered`.
4. **The schedule** — realistic blocks filling exactly the stated time: what to study,
   which resource to open, which questions to solve, how long, when to revise.
5. **Order of attack** — first, second, third; and explicitly **what to skim or drop if
   time runs out.**
6. **The last 30–45 minutes** — a rapid-revision checklist of only the highest-yield facts.
7. **The realistic route to the target score** — how the target is reached by being strong
   where the marks are, not by mastering everything equally.

The plan must be built from *this folder's* evidence — slide counts, notes, LOs, solved
questions, question-bank recurrence, past-paper shapes. A generic study plan is a failure.

### 5.3 Module tab
`<h1>` module name → one progress card → three sub-tabs → content.
Sub-tabs: **[Track A] (n) · [Track B] (n) · Quick Review**. Sub-tab state persists per
module for the session. Topics sort by priority, then module order.

### 5.4 Recognition tab
The one place recognition is taught as a *skill*: the three-stage habit (read → classify →
first move) stated once; 2–4 decision trees for the genuinely confusable families; a compact
**clue → topic** lookup per module (`topic | strongest clue | first move | Open`). Do **not**
reprint each topic's full recognition box — this tab is the index, not the content.

### 5.5 Quiz — sets of 20, answered together
This is a hard requirement and the default one-question-at-a-time pattern is wrong.

- The bank is split into **numbered sets of exactly 20 questions**. Set membership is stable.
- **All 20 questions of a set are visible on one page at once.** Never one question per screen.
- I answer as many as I like, then press **Submit** once. The set is then scored **out of
  20**, and every question reveals its correct answer and its explanation together.
- A submitted set shows its score on the set list. Sets can be retaken.
- A **Reset quiz** button clears all quiz data — scores, per-set state, per-topic accuracy —
  and nothing else. It is separate from the global Reset in Settings, and it confirms first.
- Per-topic and per-stage accuracy is still recorded, and still feeds `weakTopics()`, which
  is now used by Settings and the Plan tab only — not the Dashboard.

### 5.6 Exam Mode — the discipline tab
Only what exists nowhere else:
1. The time budget, computed: `marks / duration` → minutes per mark, with a worked sentence.
2. A **running order** — every topic sorted unfinished-first, then priority, then track —
   each row: status, title, priority, module, question meter, Open.
3. A **last thirty minutes** list: 6–10 single-line, highest-density items.
4. Three buttons out: Formulae, Recognition, Quiz.

**No formulas, no worked examples, no recognition trees, no definitions.** One line saying
where those live. Keep it under ~3,500 characters.

### 5.7 Search
Indexes topics, worked examples, practice questions, recognition clues, likely questions,
formulas, quick-review cards, quiz questions. Every result shows kind, breadcrumb, highlighted
title and snippet, and navigates to the item's **home page and anchor** — never to a
search-only rendering. `/` focuses it.

### 5.8 Settings
Progress table (overall exam-priority, overall whole-syllabus, per track, per module, quiz
accuracy, weak topics, first visit, streak) · Export · Import · theme (Light / Dark / Match
system) · Reset · a short About naming the exam contract, the exact source files, how
priority was derived, and the source-vs-prediction policy.

---

# PHASE 6 · TOPIC PAGE — EXACT SECTION ORDER

Fixed. Concept → warnings → doing → recognising, because you cannot recognise what you
cannot yet do.

```
← Module N                                    (back button, top)
H1  Topic title
    [priority pill] [LO pills]                (nothing else)
    Questions worked: x / y  + progress bar

1 · Concept                what it is, how it works, what you must be able to do
2 · How to write the answer   skeletons at THIS paper's mark values
3 · Common mistakes        the box of traps
4 · Practice               worked examples, then practice questions
5 · Question recognition   clues, exam wording, first move, the trap
6 · Likely exam questions  with source/prediction labels
[7 · Division extras]      only if 3.5 applies and non-empty

← Back to Module N                            (single button, bottom)
```

**The bottom back-to-module button is required.** It is the one permitted exception to
"never end a page with navigation" — topic pages are long and scrolling back up to the top
button is the most annoying thing about not having it. One button, not a row.

### 6.1 Practice section — the important one
- Worked examples and practice questions live **together, here, in the module.** No separate
  practice tab.
- **Every solution is hidden behind a "Show solution" button, including worked examples.**
  A worked example with its solution hidden is a practice question; hiding it doubles the
  usable question bank at zero content cost.
- Practice questions additionally get a "Hint" toggle.
- Fixed button order: `Show solution` · `Hint` · `Mark done`. Revealed bodies render
  **below** the button row, never above it.
- `Mark done` is the *only* control on the entire site that changes a percentage.
- There is **no** "mark this topic complete" control. Topic completion is derived: a topic
  is done when all of its questions are marked.

---

# PHASE 7 · PROGRESS MODEL (implement exactly)

```js
const KEY = "<subject_slug>_study_v1";
function blankProgress(){
  return { examples:{}, practice:{}, quizSet:{}, quizTopic:{}, quizStage:{},
           lastStudied:null, streak:0, lastVisit:null, firstVisit:null };
}
```

- `examples` / `practice` are `{id:true}` maps of individually marked questions.
  `quizSet` holds `{setId: {answers, score, submittedAt}}`. **Nothing else is stored** — no
  topic map, no percentages, no counts.
- Derived at render time only: `topicProgress(t)` → `{done,total,pct}`; `topicStatus(id)` →
  `none | progress | done`; `progressOf(list)`, `overallProgress()`, `moduleProgress(m)`,
  `trackProgress(track)`, `moduleTrackProgress(m,track)`.
- **`overallProgress()` and every headline figure default to high-priority topics only.**
  Provide `overallProgress({all:true})` for the whole-syllabus number shown in Settings.
- `weakTopics()` — topics with quiz accuracy < 60% over ≥ 2 attempts, worst first. Used by
  Settings and Plan, never by the Dashboard.
- Streak increments once per calendar day of visits; a nicety, never a score.

### 7.1 Storage safety
Every `localStorage` read and write wrapped in `try/catch`. If storage throws (private mode,
strict `file://`), **the site still renders and is fully usable** — progress simply is not
saved, and one toast says so. Test this.

### 7.2 Export / Import / Reset
- **Export** — JSON of the progress object plus `_app`, `_course`, `_exportedAt`.
- **Import** — parse in `try/catch`, then `validateProgress(o)` which:
  1. **Rejects outright** anything not a recognisable progress file: non-objects, arrays,
     and objects with neither the `_app` marker nor at least one of `examples` / `practice` /
     `quizSet` / `quizTopic` / `quizStage` as an object. *Without this guard, any unrelated
     JSON imports "successfully" and silently wipes progress to 0%.*
  2. **Sanitises what it accepts** — discards unknown ids, non-`true` values, quiz scores
     where `n <= 0 || c < 0 || c > n`, non-string dates; clamps `streak` to `0…3650`.
  3. Returns `{ok:false}` or `{ok:true, data}`. A malformed file can never reach `P`.
- **Reset quiz** (in the Quiz tab) — confirms, then clears quiz state only.
- **Reset all** (in Settings) — `confirm()` naming exactly what is lost, clears this browser
  only, returns to Dashboard, toasts "You are back at 0%".

---

# PHASE 8 · UI / UX — MINIMALIST, AND THIS IS SPECIFIC

Look like a well-set document, not a dashboard product. If you are unsure whether to add a
visual element, do not add it.

### 8.1 Layout & type
- Content column `max-width: 880px`, centred, `padding: 22px 18px 80px`.
- System fonts only. **No webfonts, no CDN, no network requests of any kind.**
  `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`;
  monospace `ui-monospace, SFMono-Regular, Menlo, monospace`.
- Type scale, nothing between these sizes: `h1 1.5rem/700` · `h2 1.05rem/700` ·
  `h3 .92rem/700` · `h4 .86rem/700` · body `.875rem/1.6` · small `.78rem` · pill `.7rem`.
- Two weights only, 400 and 700 (one 800 permitted, for percentage numerals).
- `h2` carries a `1px` top border and `1.6rem` top margin — the only section divider.
- Spacing scale: `4 · 7 · 9 · 14 · 22px`. Nothing else.

### 8.2 Colour
- Exactly these tokens on bare `:root`, redefined under
  `@media (prefers-color-scheme: dark){ :root:not([data-theme="light"]) }` **and** under
  `:root[data-theme="dark"]`: `--bg --surface --text --muted --border --border-2 --accent
  --good --warn --bad`.
- **One accent colour**, used only for: active nav tab, links, progress fill, percentage
  numerals, high-priority left border.
- `--good/--warn/--bad` appear only in progress bars, status dots, and the three semantic
  boxes. Never on text you have to read at length.
- Body gets an explicit token background. Never rely on the host default.

### 8.3 Banned outright
Gradients · drop shadows (one exception: `0 1px 8px rgba(0,0,0,.06)` under the sticky nav) ·
emoji as interface icons · icon fonts · animation beyond a `120ms` colour/opacity transition ·
rounded corners above `10px` · card backgrounds other than `--surface` · more than one primary
button per screen · centred body text · italics for emphasis · ALL-CAPS headings · decorative
rules · hero sections · card grids more than 3 wide · progress rings/donuts · confetti,
badges, XP, levels, mascots, motivational copy.

*(The 🔴🟠🟡🟢 priority markers in the Plan tab's LO table are the single permitted exception
to "no emoji" — they are data in a table, not interface chrome.)*

### 8.4 Components — the complete set. Do not invent a tenth.
1. **Card** — `--surface`, `1px --border`, `10px` radius, `14px` padding.
2. **Box** (semantic callout) — `4px` left border in `--good/--warn/--bad/--muted`, an `h5`
   label, tinted background ~6%. Four variants: neutral, mistake, warning, tip.
3. **Pill** — `.7rem`, `2px 8px`, `999px` radius, bordered not filled.
4. **Progress bar** — `6px` tall, `999px` radius, `--border-2` track, single fill colour by
   band: `<34 bad · <67 warn · ≥67 good`.
5. **Topic card** — status dot, title, one priority pill, one-line summary, `.qmeter` row
   (bar + `x / y questions` + Open).
6. **Tab bar** — text buttons, `1px` bottom border on the container, `2px` accent underline
   on the active one. Used for main nav and module sub-tabs.
7. **Stat card** — big numeral, label, one sub-line, progress bar.
8. **Toast** — bottom-centre, `2.2s`, one line, no icon.
9. **Quiz set card** — set number, `20 questions`, score-if-submitted, Start/Review button.

### 8.5 Tag discipline (this is what kills these sites)
- **A topic card shows exactly one pill: priority.** Not marks, not track, not division, not
  difficulty, not source, not LO.
- A topic *page* header may show priority + LO pills. That is the maximum anywhere.
- Track is communicated by which sub-tab you are standing in — never restate it on the card.
- Difficulty appears only on individual practice questions. Source/prediction labels appear
  only on likely-exam-question rows. Division tags appear only in the Divisions tab.

### 8.6 Navigation
- Nav is `position: sticky; top: 0; z-index: 100` with `-webkit-sticky` fallback. It never
  scrolls away. Test this.
- Brand is a short plain wordmark — e.g. **"OR MSE Study Guide"**. No course code, no
  subtitle, no tagline, no "· Operations Research · MSE · Modules 1, 2, 5" strip. Clicking it
  goes to Dashboard.
- The exam contract (code, marks, duration, scope) lives in **Settings → About** and, if it
  exists, the Plan tab. Never in the header.
- Never end a page with a row of navigation buttons. The two exceptions: the three deliberate
  exits at the bottom of Exam Mode, and the single back-to-module button on a topic page.
- Opening a topic marks the parent module's tab active.

### 8.7 Density budget (measure the rendered text and report it)
| Page | Max visible text |
|---|---|
| Dashboard | ~700 chars |
| Module tab (one sub-tab) | ~2,000 chars above the topic cards |
| Exam Mode | ~3,500 chars |
| Plan tab | no cap — it is a document, but no sentence may repeat from elsewhere |
| Any single intro/lead paragraph | 2 sentences |
| Topic card summary | 110 chars |

If a page exceeds its budget, cut content — do not shrink the font.

### 8.8 Responsive & dark mode
Relative units, flexbox/grid, `img{max-width:100%}`. Wide tables inside `overflow-x:auto`
containers. **The body never scrolls horizontally at 360px.** Test at 360, 768, 1280. Theme
Light / Dark / Match system, stored under its own key, applied before first paint.

### 8.9 Accessibility
Contrast ≥ 4.5:1 both themes · tap targets ≥ 32px · sub-tabs `role="tab"` + `aria-selected`
· toasts `role="status" aria-live="polite"` · visible `:focus-visible` outline in the accent
colour, never `outline:none` · status never conveyed by colour alone · `/` focuses search,
`Enter`/`Space` activates a focused result. Do not invent shortcuts the UI does not have.

---

# PHASE 9 · HONESTY & LABELLING

- Two labels, used consistently and only on likely-exam-question rows: `From source material`
  and `Likely exam pattern`.
- Settings → About lists the **actual filenames** the site was built from.
- If no past paper for this assessment exists, Settings says so in one sentence — and if a
  paper for a *different* assessment exists, it names it and states the difference.
- Where the material contradicts itself, the teacher's version is authoritative on the page
  with a short note. Never present your correction as theirs.
- Never write "this will definitely be asked", "guaranteed", "100% coming", or "last year's
  paper".

---

# PHASE 10 · BUILD METHOD

1. Work in the scratchpad. Split into ~20 numbered part-files (`01_head.html`, `02_meta.js`,
   `03_m1.js`, … `21_router.js`) so no single edit rewrites the world, then concatenate.
2. `node --check` the concatenated script **before** assembling the HTML. A syntax error
   inside `<script>` silently blanks the entire page.
3. All JS in one `<script>` at the end of `<body>`, `"use strict"`.
4. Vanilla JS only. No frameworks, libraries, polyfills. No `innerHTML` from user input.
   `esc()` everything that could contain `<`.
5. One delegated `click` listener on `document` dispatching on `dataset` keys; one `change`;
   one `input`. Not per-element handlers.
6. After every re-render triggered by an in-page action (marking, revealing, toggling,
   submitting a quiz set), **restore `window.scrollY`** — the reader must not be thrown to
   the top for clicking "Show solution".
7. Ship `index.html` to the project root. Keep the parts in the scratchpad.

---

# PHASE 11 · TESTING — REQUIRED, AND REPORT THE OUTPUT

Drive the real DOM with jsdom, **through clicks**, not by calling functions. (Top-level
`const` does not attach to `window`, so `w.TOPICS` is `undefined` and function-level testing
dies with an uncaught error that looks like "the test produced no output". Stub `w.scrollTo`
and `Element.prototype.scrollIntoView`.)

Assert, and print pass/fail per line:

1. Every nav tab renders > 500 chars and marks itself active. **There is no Search tab.**
2. Every module × every sub-tab renders; sub-tab active state is correct.
3. A topic page renders with sections **in the specified order**; no "mark topic complete"
   control exists; solutions are hidden until revealed; **a back-to-module button exists at
   the bottom and navigates to the right module.**
4. Dashboard: three readiness stats + one card per module; **no Study-next, no Weak areas**,
   no paper-shape section, no bottom button row; shows `0%` on a fresh browser.
5. **Readiness is computed over high-priority topics** — marking a low-priority question
   does not move the Dashboard headline, and *does* move the whole-syllabus figure in Settings.
6. Topic cards carry exactly one pill.
7. **Progress round-trip:** mark one question → every affected percentage rises → unmark →
   every percentage returns to exactly its previous value.
8. **Quiz:** a set renders **all 20 questions at once**; answering some and submitting scores
   out of 20; explanations appear for every question after submit; the score persists across a
   re-render; a second set is independent; **Reset quiz clears quiz state and leaves
   example/practice progress untouched.**
9. Search: a query returns results; clicking one navigates to a real page; no result points at
   a deleted view.
10. Exam Mode contains no formula block and no worked example.
11. Plan tab (if built) renders the schedule and the LO table, and its total block time equals
    the stated study time.
12. Import validation against ≥ 8 payloads: `null`, a number, a string, `[]`, `{}`,
    `{hello:"world"}`, a valid-marker file with unknown ids, one with `c > n`. The first six
    **rejected**; the last two accepted with bad fields discarded. Then export → import →
    identical percentage.
13. Reset returns the browser to 0%.
14. Re-run the whole suite with `localStorage` throwing on access — the site must still render
    and navigate.
15. Zero `jsdom` errors and zero `console.error` across the entire run.
16. **No dangling references** — grep the built file for every view/helper you deleted during
    the build and confirm the count is 0.
17. **Duplication audit** — no sentence of ≥ 70 characters appears on more than two rendered
    surfaces. Print any that do.
18. **Density audit** — measure the rendered text of every page against §8.7 and print the
    actual numbers.
19. **Coverage audit** — every document in the folder is reachable from at least one topic
    page; print any orphans.

---

# PHASE 12 · DELIVERABLES

1. **`index.html`** — the site.
2. **`README.md`** — what it is; **the paper structure table first, because it drives
   everything**; the "one thing to confirm" note if §0.2 fired; the tab map; a contents table
   with **real counts** (topics by priority, examples, practice, total markable questions,
   quiz MCQs and sets, formulas, review cards, LOs covered); the exact source files; the
   source-vs-prediction policy; the progress model including the high-priority readiness rule;
   GitHub Pages steps; keyboard shortcuts; the verification results with real numbers; and a
   full section on every contradiction found in the material.
3. **`_ORGANISATION.md`** — the Phase 0 gap report.
4. **`_LO-MAP.md`** — the resource ↔ LO map.
5. A short closing message: what was built, what was verified with numbers, what you found
   wrong in the source material, and anything you deliberately left out and why.

Do not commit or push unless I ask.

---

# PHASE 13 · WHEN I DROP MORE MATERIAL LATER

I will. Usually as "dropped more notes, check and add questions if needed", often as pasted
screenshots rather than files. Treat that as a full incremental pass, not a patch:

1. Run Phase 0 on the new files — file them, rename them by LO, update `_LO-MAP.md` and
   `_ORGANISATION.md`.
2. Run Phase 1 on them at full depth, including scans and embedded images.
3. **Re-derive priority.** New material can promote a topic, and new notes can reveal a topic
   that exists in no deck — in the OR build, one late notes PDF was the only source in the
   entire folder for Kendall's notation, transient vs steady state, and average dominance.
4. Add topics, examples, practice and quiz questions where the new material supports them.
   Keep quiz sets at exactly 20 by extending the number of sets, never by making a set 23.
5. Re-run Phase 4 verification and the whole of Phase 11.
6. Update the README's counts to the new real numbers and say in the closing message exactly
   what the new material changed — including anything it *disproved*.

---

# PHASE 14 · SELF-REVIEW BEFORE YOU HAND IT OVER

Answer each to yourself, and fix anything that fails.

1. Open the built file and read it as a stranger. Is there any screen where I would not know
   what to do next?
2. Pick three facts at random. Do they appear more than twice? Cut it.
3. Is there a single hardcoded percentage, count, or completion state anywhere? Delete it.
4. Does any card carry more than one pill?
5. Does the Dashboard fit on one screen at 1280×800 without scrolling, with no Study-next and
   no Weak areas?
6. Does the nav stay put when I scroll to the bottom of the longest topic page — and is there
   a back-to-module button waiting for me there?
7. Does every quiz set show 20 questions at once and score out of 20?
8. Does the Dashboard readiness figure move only for topics that can actually be on the paper?
9. Can I use the entire site with the keyboard, and can I see where focus is?
10. Would the teacher who wrote this material recognise every claim on the site as theirs?
11. Is there anything I wrote that I cannot point to a file in the folder for?
12. Is there any file in the folder the site never mentions?
13. Have I recomputed every number, and does the README's verification count match what I
    actually ran?
