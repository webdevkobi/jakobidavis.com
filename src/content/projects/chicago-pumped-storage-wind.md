---
order: 3
title: "Pumped storage against wind intermittency in Chicago"
metaTitle: "Pumped storage against wind in Chicago"
result: "Sized and dispatched pumped storage that cuts unmet demand by up to 51% against wind alone."
course: "CEE 4800"
semester: "Spring 2025"
team: "Jakobi Davis, Ali Shabazz, Max Jensen"
myPart: "Project lead. I collected and scraped all of the wind and demand data, helped build the model predictive control, and delivered most of the final presentation. Teammates led the forecasting model and the graphing."
tools: ["Python (autoregressive forecasting, NSGA-II, model predictive control)"]
cardSummary: "Forecast the wind, size the storage, then run it. Three methods stacked into one system."
description: "Cornell CEE 4800. Pumped storage sized with NSGA-II and dispatched with model predictive control against forecast wind, cutting unmet demand by up to 51%."
problem: |
  Wind doesn't blow on demand's schedule. In Chicago, that mismatch leaves people short on power even in years when total wind output looks like plenty.

  Pumped storage can cover the gap, but you have to get two things right: how big to build it, and when to pump and release.
approach: |
  Three pieces. An autoregressive model forecasts the wind. A genetic algorithm (NSGA-II, run for 1,000 generations) sizes the pumping rate, release rate, and reservoir to minimize unmet demand. Then model predictive control decides hour by hour when to pump and when to release, using the forecast.

  I pulled and scraped all the wind and demand data and worked on the model predictive control.
resultNote: |
  The system cuts unmet demand by up to 51% compared with wind alone. Re-running the optimization more often made it even better.

  The catch is cost. The levelized cost of storage came out to $498.87 per MWh, higher than typical pumped storage.
limits: |
  Everything depends on the wind forecast. When the forecast is off, the dispatch gets worse. The genetic algorithm also has some randomness in it, so the exact numbers shift a little run to run.

  We also didn't do a real site study. Pumped storage needs elevation and water, and the Chicago area doesn't have much of either.
numbers:
  - value: "51%"
    label: "Maximum reduction in unmet demand"
  - value: "NSGA-II"
    label: "Multi-objective sizing method"
  - value: "MPC"
    label: "Dispatch against rolling forecast"
figure:
  alt: "Unmet demand over time for wind alone against wind with pumped storage"
  caption: "Unmet demand, wind alone against wind with pumped storage."
downloads:
  - label: "Project paper"
    kind: "PDF"
    href: "/papers/chicago-pumped-storage-wind-paper.pdf"
  - label: "Presentation slides"
    kind: "PDF"
---
