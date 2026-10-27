---
order: 1
title: "NYISO capacity expansion under a carbon tax"
result: "A $55 per ton carbon price reaches 70% renewables in an average year. Guaranteeing 70% in a poor resource year takes $120."
course: "CEE 4880 capstone"
semester: "Spring 2025"
team: "Grace Raab, Jakobi Davis, Nick Norris"
myPart: "Project lead. I ran the project from scope to final results and delivered most of the final presentation to the class and faculty."
tools: ["AMPL"]
cardSummary: "What carbon price moves New York to 70% renewables, and what it costs to guarantee that share in a bad wind and solar year."
description: "Cornell CEE 4880 capstone. A NYISO capacity expansion model under a carbon tax, built in AMPL. $55 a ton reaches 70% renewables; guaranteeing it takes $120."
problem: |
  New York has a renewable share target but no single answer for what carbon price delivers it. A price that works in an average wind and solar year can fall short in a poor one, and planning on the average quietly accepts a shortfall in the years that matter most.

  The question is two-sided: what price reaches 70% renewables in a typical year, and what price holds that share when the resource year is bad.
approach: |
  We built a capacity expansion model of the NYISO system in AMPL. The model chooses what generation capacity to build and retire under a carbon price, subject to meeting load.

  We ran it across a sweep of carbon prices and across resource years, so the renewable share could be read as a function of price in both an average year and a poor one rather than as a single point estimate.
resultNote: |
  The two prices are far apart. $55 per ton reaches 70% renewables in an average resource year. In a poor resource year the same price lands at 56%. Holding 70% in that poor year takes $120 per ton.

  The gap is the cost of a guarantee rather than an expectation, and it is more than double the average-year price.
limits: |
  The result is a model output, not a forecast. It depends on the cost assumptions for new capacity, the load trajectory, and the specific resource years used to define an average year and a poor one. A different poor-year definition moves the $120 figure.

  The model also treats the system at a planning level. It does not resolve transmission constraints, unit commitment, or intra-hour operations, all of which can raise the real cost of a high renewable share.
numbers:
  - value: "$55/t"
    label: "Reaches 70% renewables, average year"
  - value: "56%"
    label: "Renewable share at $55/t, poor year"
  - value: "$120/t"
    label: "Guarantees 70% in a poor year"
figure:
  alt: "Renewable share against carbon price, average and poor resource years"
  caption: "Renewable share against carbon price, average year against poor resource year."
downloads:
  - label: "Capstone paper"
    kind: "PDF"
    href: "/papers/nyiso-capacity-expansion-carbon-tax-paper.pdf"
  - label: "Presentation slides"
    kind: "PDF"
    href: "/papers/nyiso-capacity-expansion-carbon-tax-slides.pdf"
---

The carbon price slider on the [Models](/models/) page runs on this project's
results directly: every $5 step from $0 to $55 is one of the model runs in
Table 1, with the stress test and the $120 figure from the sensitivity
analysis.
