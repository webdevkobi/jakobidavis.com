---
order: 1
title: "NYISO capacity expansion under a carbon tax"
result: "A $55 per ton carbon price reaches 70% renewables in an average year. Guaranteeing 70% in a poor resource year takes $120."
course: "CEE 4880 capstone"
semester: "Spring 2025"
team: "Grace Raab, Jakobi Davis, Nick Norris"
myPart: "Project lead. I ran the project from scope to final results and delivered most of the final presentation to the class and faculty."
tools: ["AMPL"]
cardSummary: "What carbon price gets New York to 70% renewables, and what it takes to hold that in a bad weather year."
description: "Cornell CEE 4880 capstone. A NYISO capacity expansion model under a carbon tax, built in AMPL. $55 a ton reaches 70% renewables; guaranteeing it takes $120."
problem: |
  New York wants 70% of its power from renewables by 2030. A carbon tax is one way to push it there, but nobody had a clean answer for how high the tax needs to be. And a price that works in a normal weather year can come up short in a bad one.

  So we asked two things. What price gets New York to 70% in a typical year? And what price holds it there when the wind and sun don't show up?
approach: |
  We built a capacity expansion model of the NYISO grid in AMPL: 11 zones, one year of data, fixed demand, and the existing transmission limits. The model picks what to build (solar, wind, gas, and 4-hour batteries, with existing nuclear kept on) to meet demand at the lowest cost.

  We added a carbon tax to the objective and raised it in $5 steps until the grid hit 70%. Then we stress tested that price by scaling renewable output down 30% for a bad year and up 30% for a good one.
resultNote: |
  $55 a ton gets New York to 70% renewables in a normal year. Total system cost goes from $9.18 billion to $10.6 billion, about 15% more.

  In a bad weather year, that same $55 only gets you to 56%. To hold 70% when the weather doesn't cooperate, you need $120 a ton. That's more than double.
limits: |
  It's a model, not a forecast. It uses one year of data, fixed demand, and no new transmission or new nuclear, and the weather test scales every zone and hour by the same 30%. Change any of those and the numbers move.

  We also saw transmission bottlenecks between upstate and downstate. New lines would likely lower the price needed, and this model doesn't build any.
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

The slider on the [Models](/models/) page runs on this project. Every $5 step
from $0 to $55 is a real model run.
