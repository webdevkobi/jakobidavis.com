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
cardSummary: "Forecast the wind, size the reservoir, then dispatch it. Three methods stacked into one system for Chicago."
description: "Cornell CEE 4800. Pumped storage sized with NSGA-II and dispatched with model predictive control against forecast wind, cutting unmet demand by up to 51%."
problem: |
  Wind supply and electricity demand do not line up hour to hour, and in Chicago that mismatch leaves demand unmet even when annual wind energy looks sufficient.

  Storage closes some of the gap, but sizing it and operating it are different problems. A reservoir sized for an average week is wrong for a bad one, and a reservoir operated without a view of coming wind gives back much of its value.
approach: |
  We built the system in three stages. An autoregressive model forecasts wind output. NSGA-II searches reservoir and turbine sizing across competing objectives rather than collapsing them into a single cost number. Model predictive control then dispatches the sized system against the rolling forecast.

  Stacking the three means the sizing decision is made against how the system will actually be operated, not against a simplified dispatch rule.
resultNote: |
  The sized and dispatched system reduces unmet demand by up to 51% compared with wind alone.

  The multi-objective sizing step matters to that number. Points along the NSGA-II frontier trade capital cost against unmet demand, so 51% is the favorable end of a range rather than a single design answer.
limits: |
  The autoregressive forecast is the weak link. Model predictive control performs only as well as the forecast it is given, and forecast error at longer horizons erodes the dispatch advantage.

  Siting is treated as given. Pumped storage needs specific geography and head, and the Chicago area constrains both heavily. The study does not carry a site feasibility assessment.
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
