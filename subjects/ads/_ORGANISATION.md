# `_ORGANISATION.md` — Folder organisation & gap report
**CEPEC7041 Applied Data Science** · exam 25 Nov 2026 · regenerated 12 Nov 2026

Resources are filed as **subject → division → module**: `_resources/ads/<Comp A|Comp B>/<Module N - title>/`. Division rule: **Comp A** = the file's content is in the `Comp A Sem 7` download; **Comp B** = everything else. Course-level folders (`_Syllabus`, `_Books`, `_Notes`, `_CIA`, ...) sit inside each division. Every move is logged in `_resources/_REORG-LOG.md`.

---

## 1 · Module folders and file counts

| Module folder | Comp A | Comp B |
|---|---|---|
| Module 1 - Introduction to Data Science | 1 | 2 |
| Module 2 - Data Exploration, Descriptive Statistics | 2 | 1 |
| Module 3 - Data Exploration, Inferential Statistics | 1 | 2 |
| Module 4 - Regression Analysis | 3 | 1 |
| Module 5 - Anomaly Detection | 1 | 1 |
| Module 6 - Time Series | 0 | 3 |
| `_Books` | 3 | 0 |
| `_Course project` | 0 | 1 |
| `_Duplicates (identical, safe to delete)` | 0 | 1 |
| `_Formulae` | 1 | 1 |
| `_Syllabus` | 3 | 0 |

## 2 · Gaps

- Module 6: nothing in Comp A (material exists in the other division).

## 3 · Findings from the audit

- The source was split by faculty (COMP A / COMP B); it is now split by division, then module. Comp B has Module 6 (time series + two decomposition videos); Comp A has none.
- `4.01`/`4.02` in Comp A are regression decks from an older course (CSDLO6013, Sem IV 2025); they cover the same Module 4 topics.
- The formula sheet `F1` is Comp A (original COMP A folder, although absent from the Downloads copy); `F2` is Comp B. An identical copy of `F2` is parked in `_Duplicates`.
- `_Course project/ADS Course Project` is an empty folder; only the group/dataset list exists.
