# Deep Learning MSE — Study Site

A single self-contained `index.html` for **HMCAL703 Deep Learning**, Mid-Semester Examination.
No backend, no build step, no dependencies, no network requests. Open it from disk or publish it to GitHub Pages.

---

## The paper structure

**Not stated.** You left the `PAPER STRUCTURE` field as the template text, so there is no per-question
breakdown to build priority from. Everything below is derived from the syllabus's own evidence instead.

| | |
|---|---|
| Course | HMCAL703 — Deep Learning |
| Assessment | Mid-Semester Examination (MSE) |
| Marks | 30 |
| Duration | 1.5 hours |
| Scope | Modules 1, 2 and 3 |
| Paper structure | **Not stated** |
| Study time | 3 hours |
| Target | 27 / 30 |

The syllabus states that the *"Mid semester examination will be based on 40% to 50% syllabus"*. Modules 1–3
of 6 is exactly 50%, which independently corroborates the stated scope.

Because no paper structure was given, **priority rule 1 never fired** — nothing could be ranked down on the
grounds that it cannot appear. That is why 44 of the 56 topics are `high`: with all of Modules 1–3 in play,
almost everything genuinely is examinable. The `low` bucket contains only material that is thin in the folder.

### Estimated mark split

| Module | Syllabus hours | Slides | LOs | Worked examples in source | Estimated marks |
|---|---|---|---|---|---|
| 1 — Fundamentals of Neural Network | 4–6 | 67 | 3 | 6 | ≈ 6 |
| 2 — Training, Optimization and Regularization | **10–12** | **292** | 4 (+ LO 1.2) | 11 | **≈ 13** |
| 3 — Convolutional Neural Networks | 8–10 | 83 | 4 | 6 | ≈ 11 |

Estimated pro-rata from the syllabus's teaching-hour allocation, corroborated by slide count. It is an
estimate, not a statement of fact.

---

## ⚠ One thing to confirm

You left **`PAPER STRUCTURE`** as the template text and **`HIGHEST-PRIORITY FILES`** blank, and the form
carried **`TARGET SCORE` twice** — once filled as 27/30 and once left as an example.

I read that as: no per-question breakdown was stated, no file was singled out as highest priority, study time
is 3 hours and the target is 27/30. Priority is therefore derived from the syllabus's own teaching-hour split
and the decks' evidence rather than from the paper.

**If your teacher did state a question-by-question breakdown, tell me — the whole ranking changes.**

This note also appears at the top of the Plan tab and in Settings → About.

---

## Three findings that shaped the build

**1 · Perceptron Learning and Delta Learning are Module 1 syllabus topics that appear nowhere in `Module1.pdf`.**
The syllabus lists them under Module 1. Both are taught only in the **Module 2 deck, slides 214–230**. Anyone
revising Module 1 from `Module1.pdf` alone will miss a named Module 1 topic entirely. Both have full topic
pages here, flagged with their true location, and block 9 of the study plan is dedicated to them.

**2 · There is no question bank and no past paper of any kind** — not a previous MSE, not an internal
assessment paper, nothing. So **nothing on this site is or can be labelled "previous year"**, and every
question is labelled either *From source material* or *Likely exam pattern*.

**3 · Two exercises are posed in the decks and never answered.**
- Module 2, slide 235 sets up "Training FF DNN – Ex2" (the 0.05/0.10 input network) and gives only the diagram.
- Module 3, slide 33 asks for the parameter count and output shape of a (10,10,1) input with one 3×3 filter.

Both are solved in full on the site: **E_total = 0.29837** and **10 parameters, output (8,8,1)**. A problem a
lecturer set but did not work through is a natural thing to put on a paper.

---

## Tab map

```
Dashboard | Plan | Module 1 | Module 2 | Module 3 | Recognition | Quiz | Formulae | Exam Mode
                                                          [ search · theme · settings ]
```

There is no Search tab — the search icon in the nav is the search. There is no Divisions tab; the folder
contains no second-division material.

| Tab | What it is for |
|---|---|
| **Dashboard** | Three readiness figures and one card per module. Nothing else. Under 600 characters. |
| **Plan** | The 3-hour schedule, the evidence it is built from, the LO priority table, and the route to 27/30. |
| **Module 1–3** | Topics split into *Problem solving* / *Theory* / *Quick Review* sub-tabs. |
| **Recognition** | Four decision trees plus a clue → topic lookup. Teaches classifying a question, not the content. |
| **Quiz** | 9 sets of exactly 20 questions, all 20 visible at once, submitted together. |
| **Formulae** | 44 formulas in 8 groups, each with its meaning and when it applies. |
| **Exam Mode** | Time budget, a running order over all 56 topics unfinished-first, and the last-30-minutes list. |

---

## Contents — real counts

| | Count |
|---|---|
| **Topics** | **56** — Module 1: 16 · Module 2: 23 · Module 3: 17 |
| By priority | 44 high · 11 medium · 1 low |
| By track | 28 problem-solving · 28 theory |
| **Worked examples** | **85** (every one hidden behind *Show solution*) |
| **Practice questions** | **170** (each with a hint and a full worked answer) |
| **Total markable questions** | **255** — of which 213 sit in high-priority topics |
| **Likely exam questions** | **140** — 123 from source material, **17 predicted (12.1%)** |
| **Quiz MCQs** | **180**, in **9 sets of exactly 20** |
| **Quick Review cards** | **36** — M1: 10 · M2: 14 · M3: 12 |
| **Formulas** | **44** in 8 groups |
| Recognition trees / clue rows | 4 trees · 47 clue rows |
| **Learning outcomes covered** | **11 of 11** in scope — none unserved |

---

## Source files

The site was built from these four files and nothing else:

1. `_Syllabus/0.01 [all LOs] HMCAL703 Deep Learning - official syllabus, LOs, exam scheme.pdf` — 7 pages
2. `Module 1 - Fundamentals of Neural Network/1.01 [LO1.1, LO1.2, LO1.3] …pdf` — 67 slides
3. `Module 2 - Training, Optimization and Regularization of DNN/2.01 [LO2.1–2.4 + LO1.2] …pdf` — 292 slides
4. `Module 3 - Convolutional Neural Networks (CNN) Supervised Learning/3.01 [LO3.1–3.4] …pdf` — 83 slides

**All 442 slide pages were read.** Two of the three decks are effectively image-only — text extraction
returned about 110 characters per page because most slides are full-page rasterised images — so every page
was rendered to PNG at 1400 px and read as an image rather than skipped.

The decks interleave the lecturer's own PowerPoint slides with AI-generated recap slides (NotebookLM /
Gemini Notebook, credited on-slide to Dr. Pravin S. Rahate). Both were read. Where they disagree, §"Contradictions"
below records it, and the lecturer's own slides are treated as authoritative.

See `_ORGANISATION.md` for the full gap report and `_LO-MAP.md` for the resource ↔ LO map.

---

## Source vs prediction policy

Two labels, used only on likely-exam-question rows:

- **From source material** — the question asks for content that is explicitly presented on a slide in the
  folder: a worked example, a stated comparison table, a posed exercise, or a definition the deck gives directly.
- **Likely exam pattern** — written for this site by extrapolating from that content.

**123 of 140 are from source material; 17 (12.1%) are predicted.**

Nothing is labelled "previous year", because no past paper of any kind exists in the folder. The phrase
"guaranteed", "definitely", or "100% coming" appears nowhere on the site.

---

## Progress model

- Progress comes **only** from marking individual questions done. Opening a topic marks nothing.
- A brand-new browser opens at **0%**. No percentage, count or completion state is hardcoded anywhere.
- **Readiness on the Dashboard counts high-priority topics only** (213 of the 255 questions). Low- and
  medium-priority topics keep full pages and can still be marked — they move the whole-syllabus figure in
  Settings, not the headline.
- Topic completion is *derived*: a topic is done when all of its questions are marked. There is no
  "mark this topic complete" control.
- Everything is stored in `localStorage` under `hmcal703_dl_study_v1`, in that browser only. Every read and
  write is wrapped in try/catch — if storage is blocked, **the site still renders and is fully usable**, and
  one toast says progress will not be saved.
- **Export / Import** — Import rejects anything that is not a recognisable progress file and sanitises what
  it accepts (unknown ids discarded, impossible quiz scores dropped, streak clamped).
- **Reset quiz** (Quiz tab) clears quiz data only. **Reset everything** (Settings) clears this browser and
  returns you to 0%.

---

## Verification results

Every number in the source material was independently recomputed in Python before any of it was written up.

**48 of 55 checks passed.** The 7 discrepancies are documented on the topic pages where they occur, with the
lecturer's figures presented as authoritative and the recomputation shown beside them.

Verified correct, among others:
- All M-P gate truth tables (AND θ=3, OR θ=1, NOR, NOT) and the perceptron OR solution w = (−1, 1.1, 1.1)
- XOR proved not linearly separable by exhaustive search over integer weights
- σ(2) = 0.88, σ(−2) = 0.12, tanh(2) = 0.96, tanh(−2) = −0.96
- Cross-entropy −log₂(0.775) = 0.3677 bits
- Both gradient-descent steps: 0.80 − 0.2(0.50) = 0.70 and 0.80 − 1.0(0.50) = 0.30
- Perceptron weight updates → (0.15, 0.06, 0.09, −0.17)
- Training FF DNN Ex1: h = (2.0, 0.6) → output 0.92
- Sharpen filter on the deck's patch = **−74**
- Max pooling [[32,19],[20,27]] and average pooling [[15,14],[11,16]]
- **The entire LeNet chain** 32→28→14→10→5→1
- **The entire AlexNet chain** 227→55→27→27→13→13→13→13→6, flatten 9216

---

## Contradictions found in the source material

All seven are in Module 2, and five of them are on AI-generated recap slides rather than the lecturer's own
worked slides. In every case the teacher's numbers are presented as authoritative on the page, with a short
note giving the recomputation.

**1 · Softmax example, slide 73 — `e^0.12` printed as 1.27.**
The correct value is **1.1275**. (1.27 is approximately e^0.24, so the exponent appears to have been doubled.)
The lecturer's other three exponentials are correct to two decimals.

**2 · The consequent sum, slide 73 — 18.41 instead of 18.2723.**
Follows directly from (1). The teacher's probabilities are self-consistent with their own sum.

**3 · Softmax probabilities, slide 105 (generated) — [0.72, 0.18, 0.07, 0.03].**
Recomputed from the same scores [3.5, 2.1, 0.8, 0.4]: **[0.74, 0.18, 0.05, 0.03]**. The method shown is correct;
the arithmetic drifts, and the printed four values sum to 1.00 only by rounding coincidence.

**4 · Slide 152 — an absolute error labelled as MSE.**
Prediction 88.5 against actual 92.0 is labelled *"LOSS: 3.5 (MSE)"*. 3.5 is the **absolute** error (MAE); the
squared error is 12.25, or 6.125 with the ½ convention. The arithmetic is right for what it computed; only the
label is wrong.

**5 · Perceptron example, slide 220 — z = 0.06 for Student B.**
With the bias of −0.20 stated two slides earlier, z = 0.10 + 0.04 + 0.09 − 0.07 − 0.20 = **−0.04**, which would
give y = 0 and require no update. The printed 0.06 is consistent with a bias of **−0.10**. The lecturer's
subsequent weight updates are internally consistent and correct for y = 1, so they are reproduced as given.

**6 · Slide 234 — σ(0.6) shown as 0.64.**
σ(0.6) = **0.6457**, which rounds to 0.65. The deck's downstream chain uses 0.64 and reaches 2.46 and 0.92, so
its final answer remains self-consistent.

**7 · Leaky ReLU α is given as two different values on adjacent slides.**
The lecturer's own slide 65 writes `f(x) = max(0.1x, x)`, i.e. **α = 0.1**. A generated recap slide (64) works an
example with **α = 0.01**, giving f(−3) = −0.03. Both are standard in the literature; state which you are using.

### Non-numerical issues also flagged on the relevant pages

- **The Module 1 linear-separability tables are separable on their second feature.** The deck's "Real Classroom"
  tables demonstrate that *attendance alone* cannot separate the classes — which is the lecturer's actual
  teaching point and is correct. But both tables remain separable on a single threshold of the other feature
  (study hours, then mobile usage), so they do not demonstrate full non-separability. The genuine
  non-separable case is XOR, which the site uses for that purpose.
- **The "XOR Reality" quadrant chart (slide 48) is not XOR.** Read literally it labels outcomes as a function of
  study hours alone, which is linearly separable. The interaction principle it is illustrating is correct; the
  chart does not illustrate it.
- **AlexNet layer count.** The deck's text says *"2 fully connected layers"* while its own diagram (slide 83)
  shows FC 4096 → FC 4096 → 1000-way softmax, i.e. three dense layers. Both readings are defensible depending on
  whether the softmax layer is counted.
- **The WRBEN mnemonic (slide 279)** labels its five letters W-R-B-E-N with Weight Decay, Batch Normalization,
  Early Stopping, Data Augmentation and Noise Addition — the letters do not match the labels after the first.
  The five methods themselves are correct.
- **Slide 159 prints the update as ΔW = η ∂E/∂W with no minus sign**, while slide 139 and every worked example
  subtract. Use `W_new = W_old − η·∂E/∂W`, which is what the lecturer's own numerical examples do.

---

## Gaps in the material — stated, not padded

- **"Perceptron Learning, Delta learning"** (Module 1 syllabus) — absent from the Module 1 deck; present only in
  the Module 2 deck, slides 214–230.
- **"Basic Terminologies of Deep Learning"** (Module 1 syllabus) — no slide carries this heading anywhere. The
  terms are each defined in passing in the Module 2 narrative (slides 4–18) but never gathered.
- **"Deep Networks: Brief History"** — thin. Only two dates are anchored (1943, 1958). Nothing on 1969, 1986 or
  2012 as history.
- **"Variants of basic Convolution function"** — four slides with diagrams and no worked numbers. The thinnest
  topic in scope, and the only one ranked `low`.
- **All self-learning topics** (Transfer Learning, Advanced Regularization, Hyperparameter Tuning, VGG→ResNet,
  Advanced CNN Architectures) — **no material at all**. No topic pages were invented for them.
- **No question bank, no past paper, no handwritten or class notes** of any kind.

---

## Testing

Three suites drive the real DOM through jsdom, by clicking, not by calling functions. **223 assertions, all passing.**

**`test.js` — 138 assertions, all passing.** Covers: every nav tab renders > 500 chars and marks itself active;
no Search tab; every module × sub-tab; topic-page section order; solutions hidden until revealed; the
back-to-module button at the bottom; Dashboard shape with no Study-next and no Weak areas and 0% on a fresh
browser; **readiness moving only for high-priority topics**; exactly one pill per topic card; a full
mark → unmark round trip restoring every figure exactly; the quiz rendering all 20 at once, scoring out of 20,
persisting, set independence, and Reset quiz leaving practice progress untouched; search returning results that
navigate to real pages; Exam Mode containing no formula block and no worked examples; the Plan's block time
totalling exactly 180 minutes; **import validation against 8 payloads** (`null`, `42`, `"hello"`, `[]`, `{}`,
`{hello:"world"}` all rejected; unknown-id and `c > n` files accepted with the bad fields discarded) plus an
export → import round trip; reset returning to 0%; **the whole suite re-run with `localStorage` throwing**;
zero jsdom errors and zero `console.error`; no dangling references; the duplication audit; the density audit;
and the coverage audit.

**`final.js` — 46 assertions, all passing.** The Phase 14 self-review: no seeded progress or hardcoded
percentage anywhere; every screen offers a next action; no card carries more than one pill; the Dashboard fits
one screen; the nav cannot scroll away and a single back-to-module button waits at the bottom of the longest
topic page (m2t5, 15.9 KB of HTML); all 9 quiz sets hold exactly 20 non-overlapping questions covering all 180
and mixing all three modules; readiness moving only for topics that can be on the paper; `/` and `Esc`
driving search from the keyboard; every topic naming the slides it came from; **no exam claim** matching
"guaranteed to appear", "definitely be asked", "100% coming", "last year's paper", "previous-year question" or
"sure-shot" (the only two "previous year" mentions are the required denial in Settings, and the seven uses of
"guarantee" are the perceptron convergence theorem and softmax properties); and all 56 topic pages parsing
into valid DOM with zero jsdom errors.

**`audit2.js` — 39 assertions, all passing.** Covers the banned-element list (no gradients, exactly one
permitted box-shadow, no radius above 10px except the mandated 999px pill/bar shape, no `outline:none`, no
animation beyond a 120 ms transition, no webfonts), all ten colour tokens on bare `:root` with dark mode defined
under both `prefers-color-scheme` and `[data-theme]`, **all 145 rendered tables inside `overflow-x:auto`
containers**, emoji discipline, and the accessibility set (`role="tab"` + `aria-selected`, `role="status"` +
`aria-live` on toasts, 32 px tap targets, status never by colour alone).

### Measured density

| Page | Measured | Budget |
|---|---|---|
| Dashboard | **579** chars | ~700 |
| Module tab, above the topic cards | **137** chars | ~2,000 |
| Exam Mode | **3,453** chars | ~3,500 |
| Plan tab | 12,188 chars | no cap — it is a document |

### Emoji

The only emoji on the site are the four priority markers **🔴 🟠 🟡 🟢** in the Plan tab's LO table, which are
data in a table and the single permitted exception. The `✓` (U+2713) and `⚑` (U+2691) characters used in
verification tables are typographic symbols, not emoji — neither carries the Unicode `Extended_Pictographic`
or `Emoji_Presentation` property, and both render in the body font. This is asserted by the audit.

---

## Publishing to GitHub Pages

```bash
git add index.html README.md _ORGANISATION.md _LO-MAP.md
git commit -m "Deep Learning MSE study site"
git push -u origin main
```

Then: repository **Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
The site appears at `https://<your-username>.github.io/<repo>/` within a minute or two.

It works identically opened straight from disk (`file://`) — there are no network requests and no build step.

---

## Keyboard

| Key | Action |
|---|---|
| `/` | Focus search |
| `Esc` | Close search |
| `Tab` | Move focus (a visible accent outline shows where it is) |
| `Enter` / `Space` | Activate the focused button or result |

No other shortcuts exist, and none are claimed that the UI does not have.
