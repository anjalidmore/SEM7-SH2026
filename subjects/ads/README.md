# ADS Study Hub — CEPEC7041 Applied Data Science

Mid-semester exam preparation for **CEPEC7041 Applied Data Science**, built for **COMP B**.

**Scope:** Module 1 and Module 2, all topics · 30 marks · 1.5 hours.

Open `index.html` in any browser, or publish it with GitHub Pages. It is a single
self-contained static file — no backend, no build step, no dependencies.

---

## What it is

A study system rather than a set of notes. Each of the 24 topics follows the same
structure: what it is → what you need to know → **how to recognise the question** →
how to approach it → concept → solved examples → exam answer at three lengths →
common mistakes → practice → mark complete.

| | |
|---|---|
| Topics | 24 (8 in Module 1, 16 in Module 2) |
| Solved examples | 36, each with recognition clues, steps, and the trap |
| Practice questions | 79, with hints and hidden solutions |
| Important questions | 95, labelled by source vs prediction |
| Quiz questions | 68, tagged by skill and topic |
| Flashcards | 45 |
| Formulas | 61, each linked to its topic |

Sections: Dashboard · Modules · Solved Examples · Question Recognition · Practice ·
Important Questions · Quiz · Quick Revision · Formulae · Flashcards · COMP A vs COMP B ·
Exam Mode · Search · Settings.

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
Questions taken from the source material are labelled *From source material*; everything
else is labelled *Likely exam pattern*. Nothing is presented as a guaranteed question.

---

## COMP A vs COMP B

Both divisions follow the same syllabus, so at **topic** level the coverage is identical —
all 24 topics are taught to COMP B, and 24 of 24 also appear in the COMP A material.

The real differences are **inside** topics, at sub-topic level. The site records
**14 sub-topics that appear in the COMP B material only** (weighted mean, coefficient of
variation, the normal distribution equation and empirical rule, CRISP-DM/SEMMA/DMAIC/KDD,
stratified k-fold, leave-P-out, ensemble modeling, Lorenz curve, and others), and
**4 places where COMP A goes further** (the Apollo Hospital case study, validation-split
numericals, the Out-of-Bag term, and heavier coverage of ogives).

Each is called out on its own topic page, so you never have to guess which half of a
topic is which. The **COMP A vs COMP B** page has the full map.

---

## Progress tracking

Progress is stored in your browser's `localStorage` under `ads_study_hub_cepec7041_v1`.

- **Shared by everyone:** all study content, questions, examples, quizzes.
- **Private to each browser:** completion states, quiz scores, reviewed examples,
  attempted practice, weak-topic detection, streak.

Nothing is sent to a server and no account is needed. A fresh browser starts at 0% —
no progress is hard-coded, and every percentage is computed at render time.

Opening a page never marks it complete. Only the explicit ☐ / ◐ / ✓ buttons do.

**Export / Import** (Settings) moves progress between browsers or devices as a JSON file.
Imported files are validated field-by-field before being applied, so a malformed or
tampered file cannot corrupt the app — unknown topic ids, invalid statuses and impossible
quiz scores are all discarded.

**Reset** clears progress in the current browser only.

---

## Publishing to GitHub Pages

```
git add index.html README.md
git commit -m "ADS study hub"
git push
```

Then in the repository: **Settings → Pages → Source: deploy from branch → `main` / root**.

The site will be served at `https://<username>.github.io/<repo>/`. Because everything
lives in `index.html`, no further configuration is required, and it works equally well
opened directly from disk with `file://`.

---

## Keyboard shortcuts

| Key | Action |
|---|---|
| `/` | Jump to search |
| `←` `→` | Previous / next flashcard |
| `Enter` / `Space` | Activate a focused search result or flashcard |

---

## Verification

The build was checked before release:

- **56 numerical results** — every mean, median, mode, quartile, standard deviation,
  skewness coefficient, kurtosis and correlation in the site — were recomputed
  independently and matched.
- All 14 views and all 24 topic pages render without console errors.
- Progress persistence, export/import validation and reset were tested through the UI.
- Five malformed import payloads were rejected safely.
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
