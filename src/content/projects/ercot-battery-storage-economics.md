---
order: 2
title: "Utility-scale battery economics at DeCordova"
result: "A levelized cost of storage of $166.79 per MWh, traced to non-modular design rather than to regulation."
course: "CEE 5200"
semester: "Spring 2025"
team: "Jakobi Davis, Adigun Olusola"
myPart: "Project lead. I did all of the levelized cost of storage math, and delivered most of the final presentation."
tools: ["Python (LCOS analysis on 2023 ERCOT real-time market data)", "Excel"]
cardSummary: "Why the DeCordova battery facility costs what it does, and what ERCOT and CAISO market rules do and do not explain."
description: "Cornell CEE 5200. Utility-scale battery storage economics at DeCordova, comparing ERCOT and CAISO, with a levelized cost of storage of $166.79 per MWh."
problem: |
  Utility-scale batteries are often described as held back by market rules. That framing is easy to assert and hard to check, because the cost of a specific facility and the rules it operates under tend to get discussed separately.

  We took one real facility, the DeCordova battery installation, asked what its cost actually consists of, then asked which market structure suits it better.
approach: |
  We built a levelized cost of storage figure for the facility from its capital and operating components, then compared how the same asset earns under ERCOT and under CAISO market design.

  On the regulatory side we worked through ERCOT NPRR 1186 and the storage provisions of the Inflation Reduction Act, to separate what the rules change from what the hardware fixes.
resultNote: |
  The levelized cost of storage comes out at $166.79 per MWh. Decomposing that figure points at the design rather than the rulebook: the installation is not modular, so costs that a modular build would spread or avoid are carried in full.

  Regulation shapes the revenue side and the tax treatment. It does not explain the cost side.
limits: |
  The levelized figure rests on cost inputs for a single facility, plus a chosen discount rate and cycle life. Facilities differ widely, so this number should not be read as an industry average.

  The ERCOT and CAISO comparison uses market design as of the course term. NPRR 1186 and Inflation Reduction Act implementation have both moved since, and either can shift the revenue conclusion without touching the cost conclusion.
numbers:
  - value: "$166.79"
    label: "Levelized cost of storage, per MWh"
  - value: "NPRR 1186"
    label: "ERCOT rule examined"
  - value: "2 markets"
    label: "ERCOT compared against CAISO"
figure:
  alt: "Breakdown of levelized cost of storage by component for the DeCordova facility"
  caption: "Levelized cost of storage by component, DeCordova facility."
downloads:
  - label: "Project paper"
    kind: "PDF"
    href: "/papers/ercot-battery-storage-economics-paper.pdf"
  - label: "Presentation slides"
    kind: "PDF"
---
