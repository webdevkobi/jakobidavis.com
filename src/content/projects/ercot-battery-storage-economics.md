---
order: 2
title: "Utility-scale battery economics at DeCordova"
result: "$166.79 per MWh. The main reason is the design. The plant isn't modular."
course: "CEE 5200"
semester: "Spring 2025"
team: "Jakobi Davis, Adigun Olusola"
myPart: "Project lead. I did all of the levelized cost of storage math, and delivered most of the final presentation."
tools: ["Python (LCOS analysis on 2023 ERCOT real-time market data)", "Excel"]
cardSummary: "Why one Texas battery plant costs what it does, and how much of that is the market rules."
description: "Cornell CEE 5200. Utility-scale battery storage economics at DeCordova, comparing ERCOT and CAISO, with a levelized cost of storage of $166.79 per MWh."
problem: |
  People often blame market rules for holding big batteries back. I wanted to test that on one real plant. We took the DeCordova battery facility in Granbury, Texas, broke down what it actually costs, and checked how much of that the rules explain.
approach: |
  I calculated the levelized cost of storage for DeCordova in Python, using 2023 ERCOT real-time market data. Then we compared it to Moss Landing in California's CAISO market, and worked through ERCOT's NPRR 1186 and the storage incentives in the Inflation Reduction Act.
resultNote: |
  DeCordova comes out to $166.79 per MWh, well above the market average. The main reason is the design. The plant isn't modular, so it carries costs a modular build would avoid.

  Moss Landing runs into the same problems in a completely different market. The rules shape how a battery gets paid. They don't explain why this one costs so much to build and run.
limits: |
  This is one facility, so the number isn't an industry average. The rules have also kept changing since we did this, which could shift how a plant like this earns money. It wouldn't change what it costs.
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
