# ADS MSE Study Guide — CEPEC7041 Applied Data Science

> **Folder layout (same in every subject):** `index.html` the site · `README.md` this file ·
> `_ORGANISATION.md` how the resources are filed and what is missing · `_LO-MAP.md` learning outcomes and
> files per module. Resources: `_resources/ads/<division>/<module>/` (local only, gitignored).

Mid-semester exam preparation for **CEPEC7041 Applied Data Science**, built for **COMP B**.
Scope: Module 1 and Module 2, all topics · 30 marks · 1.5 hours.

Open `index.html` in any browser, or publish it with GitHub Pages. It is a single
self-contained static file — no backend, no build step, no dependencies.

---

## How the site is organised

Eight tabs, in a nav bar that stays pinned while you scroll. Everything lives in one of
them, and nothing is repeated across them.

| Tab | What is in it |
|---|---|
| **Dashboard** | Overall / numericals / theory readiness, per-module readiness, and one "study next" suggestion |
| **Module 1** | Sub-tabs: Theory · Numericals · Quick Review |
| **Module 2** | Sub-tabs: Theory · Numericals · Quick Review |
| **Recognition** | The three-stage habit, three decision trees, and a clue → topic lookup table |
| **Quiz** | 68 questions with explanations, feeding weak-topic detection |
| **Formulae** | 61 formulas in 10 groups, each with what it means and when to use it |
| **Exam Mode** | Timing rules and a prioritised running order — no formulas or worked examples, they already exist elsewhere |
| **A vs B** | The one place COMP A / COMP B differences are discussed |

Search (`/`) and Settings sit in the top-right icons.

### Inside a topic

Every topic page runs in the same order:

1. **Concept** — what it is, how it works, what you must be able to do
2. **How to write the answer** — at 2–3, 5 and 10 marks
3. **Common mistakes**
4. **Practice** — worked examples and practice questions together, *every solution hidden
   until you ask for it*, so the worked examples double as practice
5. **Question recognition** — clues, exam wording, the trap
6. **Likely exam questions**

Topics carry a single **priority** tag, derived from the learning outcomes. There are no
per-topic marks tags, no A/B tags, and no separate Practice, Important-Questions,
Flashcards or Revision tabs — the questions are in the modules, and priority already says
what matters.

---

## Contents

| | |
|---|---|
| Topics | 24 — 8 in Module 1, 16 in Module 2 |
| Split by track | 14 numerical, 10 theory |
| Worked examples | 36, each with recognition clues, steps and the trap |
| Practice questions | 79, with hints and hidden solutions |
| **Total markable questions** | **115** |
| Likely exam questions | 95 — 88 from the source material, 7 labelled predictions |
| Quiz questions | 68 |
| Formulas | 61 |
| Quick-review cards | 8 |
| Learning outcomes covered | 10 of 10 |

---

## Sources

Everything is traceable to the uploaded material:

- The official syllabus (`SYLLABUS_APPLIED DATA SCIENCE.pdf`) — module contents, learning outcomes
- The MSE syllabus sheet (`Syllabus for MSE-SH-26.docx`) — exam scope and the official "Focus on" list
- COMP B Module 1 and Module 2 lecture decks
- COMP A Module 1 and Module 2 decks, plus the Central Tendency deck — used for the comparison map
- The teacher's formula sheet (`Formulae_updated.pdf`)
- The handwritten class notes (`ADS Notes.pdf`)
- `CIA-2.pdf` — a real class assessment, worked in full

**Honesty about predictions.** No previous-year MSE paper was in the material provided.
Questions taken from the source material are labelled *From source material*; the seven
that are not are labelled *Likely exam pattern*. Nothing is presented as a guaranteed or
previous-year question.

---

## COMP A vs COMP B

Both divisions follow the same syllabus, so at **topic** level the coverage is identical —
all 24 topics appear in both sets of material. The real differences are *inside* topics:
**14 sub-topics appear in the COMP B material only** (weighted mean, coefficient of
variation, the normal distribution equation and empirical rule, CRISP-DM/SEMMA/DMAIC/KDD,
stratified k-fold, leave-P-out, ensemble modeling, Lorenz curve, and others), and there are
**4 places where COMP A goes further** (the Apollo Hospital case study, validation-split
numericals, the Out-of-Bag term, and heavier coverage of ogives).

This is confined to the **A vs B** tab. It does not clutter the rest of the site.

---

## Progress tracking

Progress is stored in your browser's `localStorage` under `ads_study_guide_cepec7041_v2`.

- **Shared by everyone:** all study content, questions, examples, quizzes.
- **Private to each browser:** which questions you have marked done, quiz scores,
  weak-topic detection, streak.

**Progress is derived from individual questions, never from topics.** Marking a worked
example or a practice question done is the only thing that moves a percentage; a topic
counts as finished when all of its questions are marked. Opening a page never marks
anything. Every percentage — overall, numericals, theory, per module, per topic — is
computed at render time from those marks, so a fresh browser starts at 0% and no progress
value is hard-coded anywhere.

**Export / Import** (Settings) moves progress between browsers or devices as a JSON file.
Imported files are validated field-by-field before being applied, so a malformed or
tampered file cannot corrupt the app — unknown ids and impossible quiz scores are discarded.

**Reset** clears progress in the current browser only. The material is untouched and no
one else is affected.

Nothing is sent to a server and no account is needed. If `localStorage` is unavailable
(private mode, strict `file://`), the site still renders and works — progress simply is
not saved.

---

## Publishing to GitHub Pages

```
git add index.html README.md
git commit -m "ADS MSE study guide"
git push
```

Then in the repository: **Settings → Pages → Source: deploy from branch → `main` / root**.

The site is served at `https://<username>.github.io/<repo>/`. Because everything lives in
`index.html`, no further configuration is required, and it works equally well opened
directly from disk.

---

## Keyboard shortcuts

| Key | Action |
|---|---|
| `/` | Jump to search |
| `Enter` / `Space` | Open the focused search result |

---

## Verification

- **56 numerical results** — every mean, median, mode, quartile, standard deviation,
  skewness coefficient, kurtosis and correlation in the site — were recomputed
  independently in Python and matched.
- All 11 views, both module pages with all three sub-tabs each, and all 24 topic pages
  render without console errors.
- Progress was driven through the UI: marking a question raises every affected percentage,
  unmarking it returns them exactly, and reset returns the browser to 0%.
- Export/import validation was tested with nine payloads: unrelated JSON, arrays, strings,
  numbers and empty objects are rejected outright; recognised files with unknown ids,
  impossible quiz scores or bad field types are accepted with those fields discarded.
- The site was re-tested with `localStorage` throwing on access; it still renders.
- All 10 learning outcomes have at least one topic covering them.

## A note on the source material

Two internal inconsistencies in the provided material are flagged where they appear,
rather than silently propagated:

1. **Kurtosis summary table** — on the kurtosis slide and the formula sheet, the *Shape*
   and *Meaning* columns are shifted by one row against the β₂ column. The β₂ ↔ name
   mapping is correct, and every worked example in the deck uses it correctly; only the
   descriptor columns are misaligned. The site presents the corrected table and explains
   the discrepancy.
2. **Quartile deviation on inclusive classes** — one worked example uses the stated class
   limits directly rather than applying the correction factor the notes teach elsewhere.
   The teacher's numbers are presented as authoritative, with a note on when the
   correction factor is required.
