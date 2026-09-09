# OR MSE Study Guide

A single self-contained `index.html` that trains you to recognise an Operations Research
exam question, choose the right method, and execute it under time pressure.

No backend, no build step, no dependencies, and **no network requests at runtime**. It
behaves identically opened from disk (`file://`) and published on GitHub Pages.

**Course:** OEC7015 Operations Research · **Exam:** Mid-Semester Examination ·
**30 marks · 1.5 hours · Modules 1, 2 and 5.**

---

## Read this first

**Exam tomorrow. Open `index.html` → the Plan tab.** It has the evidence, the module
priority, the LO table, the hour-by-hour schedule and the last-30-minutes checklist.

Resources are named `<module>.<nn> [LOs] <description>` — see `_LO-MAP.md`. The 78 pages of
handwritten notes are in `_NOTES (highest priority)`.

### The finding that changes the plan

The notes cover **Module 5 (16 pp) and Module 1 (62 pp)** and contain **no queuing at all**.
Neither does the past IA paper, nor the important-questions list. Queuing exists in exactly
one file. So the plan puts Module 2 **first** — it is the cheapest module on the paper, five
formulas and 45 minutes — but gives it 45 minutes rather than the largest share.

| | Module 1 | Module 2 | Module 5 |
|---|---|---|---|
| Notes pages | 62 | **0** | 16 |
| Past IA paper marks | up to 14/20 | **0** | up to 6/20 |
| Expected MSE marks | **15–18** | **4–6** | **7–9** |
| Study time allocated | 140 min | 45 min | 60 min |

### Still missing from the syllabus — no material anywhere

Revised simplex · symmetric/asymmetric dual · weak duality theorem · complementary slackness
theorem · main duality theorem (shown numerically, never stated) · **sensitivity analysis
(LO2)** · routing problem · decomposition algorithms. Partially covered: dual simplex (only
inside Gomory's algorithm), multi-server queuing and constant-rate service (named, no formulas).

## Tab map

```
Dashboard | Plan | Module 1 | Module 2 | Module 5 | Recognition | Quiz | Formulae | Exam Mode
                                                     [ search · theme · settings ]
```

| Tab | What it is for |
|---|---|
| **Dashboard** | Three readiness figures, one Study-next card, one card per module. Nothing else. |
| **Plan** | The exam-prep dashboard: evidence, module priority, LO table, 5-hour schedule, last-30 checklist. |
| **Module 1** | Introduction to OR & Linear Programming. Sub-tabs: Numericals · Theory · Quick Review. |
| **Module 2** | Queuing Models — 5 topics, 19 markable questions, 23 quiz questions. |
| **Module 5** | Game Theory. Sub-tabs: Numericals · Theory · Quick Review. |
| **Recognition** | The read → classify → first move habit, four decision trees, and a clue → topic lookup per module. The index, not the content. |
| **Quiz** | 72 single-answer MCQs, each tagged with a topic and one of four stages. |
| **Formulae** | 43 entries in 10 groups: the formula, what it means in words, and when you use it. |
| **Exam Mode** | Time budget, running order, and the last-thirty-minutes discipline list. No formulas, no examples. |

There is no separate Practice, Solved Examples, Flashcards, Important Questions, Revision or
All Topics tab. That content lives on the topic pages, where it belongs.

## Topic page order

Concept → How to write the answer → Common mistakes → Practice → Question recognition →
Likely exam questions. Concept before recognition, because you cannot recognise what you
cannot yet do.

---

## Contents — real counts

| Item | Count |
|---|---|
| Topics | **36** (Module 1: 20 · Module 2: 5 · Module 5: 11) |
| — high priority | 18 |
| — medium priority | 9 |
| — low priority | 3 |
| Numericals track | 16 topics |
| Theory track | 14 topics |
| Worked examples | **51** |
| Practice questions | **83** |
| **Total markable questions** | **134** |
| Likely exam questions | 59 (50 from source material, 9 predicted — 15%) |
| Quiz MCQs | **113** |
| Formula entries | 43, in 10 groups |
| Quick review cards | 18 (Module 1: 10 · Module 5: 8) |
| Learning outcomes covered | 5 of 8 (LO1, LO3, LO6, LO7, LO8) |
| File size | 462 KB, zero external requests |

Every worked example has its solution hidden behind a button, so the usable question bank
is all 112 items, not just the 69 practice questions.

---

## Source files

The 14 documents these topic pages were written from. All now live under module folders.

**`_Syllabus/`**
1. `syllabus.pdf` — OEC7015 Operation Research (B.Tech Electrical Engineering, N-2024)
2. `ce_syllabus_6a5726f4dd323.pdf` — the same OEC7015 syllabus (B.Tech Computer Engineering)

**`Module 1 - Introduction to OR & Linear Programming/`**
3. `Intro to OR.pptx` — 16 slides
4. `OR Introduction.pptx` — 31 slides
5. `Linear Prog GM.pptx` — 32 slides
6. `OR - Simplex Method.pptx` — 12 slides
7. `OR - Simplex  Example.pptx` — 9 slides
8. `OR - Big M Method.pptx` — 18 slides
9. `OR - Simplex .pptx` — 43 slides (a superset of files 6–8)
10. `OR - Duality.pptx` — 13 slides
11. `SIMPLEX & BIG M ADDITIONAL PROBLEM sg.pdf` — 4 scanned handwritten pages

**`Module 5 - Game Theory/`**
12. `Game Theory.pptx` — 26 slides
13. `Game Theory_1.pptx` — 14 slides
14. `example_1.pptx` — 4 slides

File 11 extracted as 152 characters of text, i.e. it is a scan. Its four pages were rendered
to images at 130 dpi and read directly. It turned out to be one of the highest-signal files
in the folder — it is the only place that uses the **Zⱼ − Cⱼ** convention, and both worked
problems in it are complete.

Most payoff matrices and corner-point tables in the decks were embedded images rather than
text. 92 of them were extracted and read to recover the actual numbers.

### Material in the folder that no topic page covers yet

`Transportation Problem.pptx` · `Stepping Stone Method.pptx` · `MODI.pptx` ·
`Transportation Problems.docx` · `assignment prob_OR.pptx` · `Sequencing Problems.pptx` ·
`TSP.pptx` · `OR - IPP.pptx` · `T13_IA_QP_3CO_solution.docx` ·
`or_imporatnt _questions.docx` · `Queuing PPT.pdf`

### Source vs prediction

Two labels are used, consistently, and only on likely-exam-question rows:

- **From source material** — the question exists in a file in the folder.
- **Likely exam pattern** — the question was written to match the pattern of those questions.

**There is no previous-year MSE paper in this folder.** A past *Internal Assessment I* paper
with solutions and rubrics has since been added (`Module 1 …/T13_IA_QP_3CO_solution.docx`), but
it is a different assessment — 20 marks in 1 hour against the MSE's 30 marks in 1.5 hours — and
no question on this site is drawn from it. Nothing on the site is labelled "previous year", and
nothing is described as guaranteed or certain to be asked.

### How priority is derived

Stated on the site in Settings → About, so the tag is trustworthy.

- **high** — appears in a teacher-stated focus list, **or** serves ≥ 2 learning outcomes,
  **or** has ≥ 3 worked examples in the source, **or** is explicitly weighted.
- **medium** — a syllabus topic with real teaching material behind it.
- **low** — one slide, definitional, or clearly background.

The only teacher-stated focus list in the folder is slide 15 of `Intro to OR.pptx`, headed
*Sample Questions*: define OR, recall features, recall scope, recall limitations. Those four
theory topics are marked high on that basis alone.

---

## Progress model

```js
const KEY = "or_mse_study_v1";
{ examples:{}, practice:{}, quizTopic:{}, quizStage:{},
  lastStudied, streak, lastVisit, firstVisit }
```

- **Nothing is hardcoded.** A brand-new browser opens at 0%. Every percentage on the site is
  computed at render time from that browser's own storage.
- **Progress comes from questions, not pages.** Opening a topic marks nothing. The only
  control on the entire site that moves a percentage is a question's *Mark done* toggle.
- **Topic completion is derived** — a topic is finished when all of its questions are marked.
  There is deliberately no "mark this topic complete" button.
- Only `{id: true}` maps are stored. No topic map, no percentages, no counts.
- Every storage read and write is wrapped in `try/catch`. If storage throws — private mode,
  a strict `file://` context — the site still renders and is fully usable; progress simply
  is not saved and one toast says so. This is tested.

**Study next** is deterministic, first match wins, and the rule is stated on the site:
weakest quiz topic → a started high-priority topic → an unstarted high-priority topic
(numericals before theory) → any topic with unfinished questions → take the quiz → Exam Mode.

**Import** is validated. Anything that is not a recognisable progress file is rejected
outright rather than silently wiping progress to 0%; what is accepted is sanitised — unknown
ids dropped, non-`true` values dropped, quiz scores with `c > n` or `n <= 0` dropped, streak
clamped to 0…3650.

---

## Keyboard

| Key | Action |
|---|---|
| `/` | Focus the search box |
| `Tab` | Move focus; the focus ring is always visible |
| `Enter` / `Space` | Activate the focused control, including a search result |

No other shortcuts exist, so none are advertised.

---

## Verification

All arithmetic was recomputed independently in Python (SciPy `linprog` for every linear
programme, exact `Fraction` arithmetic for every game) before any HTML was written.

**86 of 86 numbers verified.**

- 14 graphical / formulation problems — objective values and optimal points
- 3 simplex problems — including the 3-variable and the handwritten one
- 4 Big M and two-phase problems
- 2 duality problems — primal, dual, and strong duality checked against each other
- 20 game theory saddle-point margins
- 18 mixed-strategy triples (p, r, V) against the deck's own answer keys
- 8 dominance reductions carried through to a value

The site itself was driven through the real DOM with jsdom, through clicks rather than
function calls: **143 assertions, 143 passed, 0 failed, 0 console errors, 0 jsdom errors.**
The suite includes a full re-run with `localStorage` throwing on every access, a progress
round-trip (mark → every percentage rises → unmark → every percentage returns to exactly its
previous value), import validation against 11 payloads, and a grep for dangling references to
views that were never built.

Two further audits ran clean: no sentence of 70 characters or more appears on more than two
of the site's 42 rendered surfaces, and no rendered page exceeds its density budget
(Dashboard 502 chars, Exam Mode 3,368, module tabs 141 above the topic cards).

---

## Discrepancies found in the source material

Four. In every case the teacher's figures are presented as authoritative on the site, with a
short note explaining the discrepancy. None was silently "corrected".

1. **`OR - Simplex  Example.pptx` slide 9 / `OR - Simplex .pptx` slide 43.** The summary line
   reads "x₁ = 2, x₃ = 2, Z = 10" while the final table on the same slide reads x₁ = 5,
   S₂ = 15, x₃ = 0. Solving the LP independently confirms the table: the optimum is
   x₁ = 5, x₃ = 0. **Z = 10 is correct either way**, so the value stands; only the x-values
   in the summary line differ from the table.

2. **`Game Theory_1.pptx` slide 10.** The dominance problem gives V = 15/4 (correct) but
   prints X = (3/4, 1/4, 0, 0) — four entries for a player with only three strategies. The
   probabilities belong to the surviving strategies 2 and 3, so X = (0, 3/4, 1/4).
   B's vector, Y = (1/4, 3/4, 0, 0), is correct as printed.

3. **`Game Theory_1.pptx` slide 12.** V = 5 is correct, but player A's and player B's
   probability vectors are printed swapped. Substituting back settles it: with
   A = (3/4, 1/4, 0), A's expectation is 4.5 against B₁ and 6.5 against B₂ — not equal, so it
   cannot be optimal. With A = (1/2, 1/2, 0) both come to 5. The correct pair is
   A = (1/2, 1/2, 0) and B = (3/4, 1/4, 0).

4. **`Game Theory_1.pptx` slide 13, fourth answer key.** Prints V = 11/5 for the game
   [[6, 3, −1, 0, −3], [3, 2, −4, 2, −1]]. The value must be negative: the row minima give a
   maximin of −3 and the column maxima a minimax of −1, so the value is bracketed below zero.
   The correct value is **−11/5**. The quoted p = 3/5 and r = 2/5 are both correct.

Three more were found in the past Internal Assessment paper that arrived later, and are
recorded in `_ORGANISATION.md`: Q2(b) states "the solution is unbounded" and then gives
F* = 3.4 at (0.4, 1.8) — recomputation confirms the problem is **bounded** and F* = 3.4 is
correct, so the "unbounded" conclusion is wrong; Q3(a) gives both 1525 and 1510 as the total
cost; Q3(b) says the solution is degenerate and then that it is non-degenerate. Its Q2(a)
(Z = 21) and Q1(e) (V = 27/4) both verify exactly.

Two smaller labelling slips are noted on the relevant topic pages rather than listed here:
`example_1.pptx` justifies a column deletion as "Column-1 ≥ Column-3" when the comparison
that actually holds is Column-1 ≥ Column-4 (the deletion itself is right), and
`Game Theory.pptx` slide 19 rounds 38/11 to 3.46 where it is 3.4545…

One thing that looks like an error and is not: in the Big M example the solver returns
(6, 0, 2) where the deck gives (0, 6/5, 16/5). Both are feasible and both give Z = 82 —
these are **alternate optima**, exactly as the deck's own final index row predicts with its
zero under the non-basic x₁. The deck is right.

---

## Publishing to GitHub Pages

```bash
cd /Users/anjalimore/Desktop/projects/OR-SH2026
git add index.html README.md
git commit -m "Add OR MSE study site"
git push
```

Then on GitHub: **Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)`**.
The site appears at `https://<username>.github.io/<repo>/` within a minute or so.

The file is self-contained, so nothing else needs to be published and no build step runs.
Progress is stored per browser and never leaves the device.
