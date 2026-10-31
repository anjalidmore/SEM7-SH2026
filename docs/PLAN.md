# End Sem plan — Semester 7

Written 31 Oct 2026. The aim is one place to study for all five End Sem papers, in the MSE format,
with just enough content to score full marks. Build the system now and add content last, as notes arrive.

Live site: <https://anjalidmore.github.io/SEM7-SH2026/>

To split the work across chats, give each chat one workstream from [`IMPLEMENTATION.md`](IMPLEMENTATION.md).

## The exam window

Every paper is 50 marks, 2 hours, 10:30–12:30. Studying starts Mon 16 Nov.

| Days | Study for | Paper | Time available |
|---|---|---|---|
| Mon 16 – Wed 18 | AI | Thu 19 Nov | 3 days |
| Thu 19 (pm) – Fri 20 | NLP | Sat 21 Nov | 1.5 days |
| Sat 21 (pm) – Tue 24 | ADS | Wed 25 Nov | 3.5 days |
| Wed 25 (pm) – Thu 26 | OR | Fri 27 Nov | 1.5 days |
| Fri 27 (pm) – Sun 29 | DL | Mon 30 Nov | 2.5 days |

NLP and OR get about a day and a half each. Their content has to fit that, which is what the
**Core** tier (Phase 3, F2) is for.

## Where things stand

| Subject | In the site now | Still to build | Material in hand |
|---|---|---|---|
| AI | Modules 1–6 (4–6 ported from the End Sem draft on 31 Oct) | ESE paper pattern only | Everything |
| NLP | Modules 1–3 | 4 Semantic Analysis & Word Representations · 5 Discourse & Advanced NLP · 6 Applications & Ethics | Textbooks only for 4–6 |
| ADS | Modules 1–2 | 3 Inferential Statistics · 4 Regression · 5 Anomaly Detection · 6 Time Series Forecasting | **Module 3–6 PDFs are already in `ADS B/`**, so this can start now |
| OR | Modules 1, 2, 5 (Module 1 theory only) | Module 1 numericals · 3 Simulation · 4 Dynamic Programming · 6 Inventory | Module 1 decks + notes; nothing for 3, 4, 6 |
| DL | Modules 1–3 | 4 Autoencoders · 5 RNN · 6 Emerging Trends | Nothing for 4–6 |

## Phases

### Phase 0 — Foundation ✅ done (31 Oct)
Monorepo, semester hub, progress bridge, one shared design system across all five subjects
(the README calls these steps Phases 1–4).

### Phase 1 — One repo, published (31 Oct – 1 Nov)
- [x] History rewritten so every commit is yours alone, with no co-author lines
- [x] `anjalidmore/SEM7-SH2026` created, public, GitHub Pages on `main` / root
- [ ] Check the hub and all five subjects on the live URL (phone and laptop)
- [ ] Delete the five old repos (`AI-SH2026`, `NLP-SH2026`, `ADS-SH2026`, `OR-SH2026`, `HMC-SH2026`).
      Progress is unaffected: it belongs to `anjalidmore.github.io`, not to the repo path.

### Phase 2 — Every subject ESE-shaped, before content ✅ done (31 Oct)
No notes needed. Everything here comes from the syllabus PDFs we already have.
1. **Modules 1–6 everywhere.** Each subject lists all six modules. A module without material shows its
   syllabus topics and LOs verbatim, marked "Material pending", so the full checklist exists from day one.
2. **ESE paper config per subject.** 50 marks, 120 minutes, and a slot for the paper pattern
   (module → marks → question format). Until a pattern arrives, priorities are LO-based and labelled
   *provisional*.
3. **Progress continuity.** MSE progress carries over untouched (same storage keys and topic ids).
   Percentages are now over Modules 1–6.
4. **Content readiness on the hub.** Separate from study progress: per subject, which modules are
   built and which still wait for material. This replaces keeping track in your head.

Done: `shared/syllabus.js` holds all 30 modules (topics + LOs for the 13 pending ones, `paper:null`
per subject). Every subject shows Modules 1–6, pending ones open a shared "Material pending" page.
All six dashboards (hub + five subjects) were rebuilt on shared parts with icons and no intro text.
Still open from this phase: the paper pattern itself, which arrives with the patterns.

### Phase 3 — Study features (3 – 7 Nov)
Kept small on purpose. Each one removes a decision you would otherwise make while studying.

| # | Feature | What it does for you |
|---|---|---|
| F1 | **Exam-window planner** | *Started:* the hub now shows the fixed 16–30 Nov window above. *Next:* Each day shows morning / afternoon / evening blocks, each linked to a concrete list, plus "core work left vs. time left" so you know if you are on track. |
| F2 | **Core / Extra tiers** | Every question is tagged *Core* (needed for full marks on the paper pattern) or *Extra*. A "Core only" switch on every subject hides the rest. Hub progress counts Core. This is the "just enough" mode. |
| F3 | **Last-look sheet** | A one- or two-page printable page per subject, for the exam morning: formulas, must-know definitions, common mistakes and the Core question list. Built from data the sites already hold. |
| F4 | **Shaky list** | One tap marks any item as shaky. The hub gathers shaky items from all subjects into one list for the night before each paper. |
| F5 | **Answer timing** | Each question shows its time budget (2.4 min per mark at 50 marks / 120 min). Optional timer in mock mode. |
| F6 | **One-click backup** | Export and import all five subjects' progress in one file from the hub, with a reminder if there has been no backup in 3 days. Guards against a cleared browser in exam week. |
| F7 | *Optional:* **Works offline** | Opens without internet on phone and laptop once visited. Only if time allows. |

### Phase 4 — Content (as material arrives, ~4 – 14 Nov)
Order follows the exams, except that ADS can start right away because its material is here.

1. **AI:** apply the paper pattern to the priorities (no new content)
2. **ADS** Modules 3–6 (start now)
3. **NLP** Modules 4–6
4. **OR:** Module 1 numericals, then Modules 3, 4, 6
5. **DL** Modules 4–6

Each module follows the MSE recipe: LOs verbatim → topics → for each topic the concept, an answer
at exam length, a worked example and common mistakes → quiz and flashcards → Core / Extra tag →
a row in the coverage table. Your notes take precedence over decks, and decks over textbooks.
Errors in the source get flagged instead of copied, and gaps get reported instead of invented.

**What to send, per subject:** the ESE paper pattern (all five), plus:
- NLP: Module 4–6 decks / notes
- OR: Module 3, 4, 6 decks / notes
- DL: Module 4–6 decks / notes
- ADS, AI: any newer notes than what is already in `_resources/`

Drop files into `_resources/<code>/` (they stay local and are never published).

### Phase 5 — Freeze and dry run (14 – 15 Nov)
- Full check on phone and laptop, light and dark, every subject
- Export a backup (F6)
- Content freeze: after this, only fixes. Study starts 16 Nov.

## Open items

- [ ] ESE paper pattern for each subject
- [ ] Old repos deleted (needs one GitHub permission step, see the README's Deployment section)
- [ ] Missing material for NLP 4–6, OR 3/4/6, DL 4–6
