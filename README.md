
# BTU Tech Hub — Launch Plan

An informational single-file site that presents the BTU Tech Hub winter-semester launch plan, interactive roadmap, core tracks, team structure, and how to join. The UI is a lightweight static HTML page (`BTU_Tech_Hub.html`) styled with Tailwind and enhanced with Chart.js for an interactive Gantt-style timeline.

## Contents

- `BTU_Tech_Hub.html` — Single-page site with mission, roadmap (interactive chart), tracks, team, and join sections.

## Quick start

No build is required. The project is a static HTML file that uses CDN-hosted libraries (Tailwind CSS, Chart.js, date-fns). To view it:

PowerShell (from the repository root):

```powershell
Start-Process -FilePath "$(Resolve-Path .\BTU_Tech_Hub.html)"
```

Or open `BTU_Tech_Hub.html` directly in your browser (double-click the file or use your editor's Live Preview / Live Server extension).

## What you'll find in the page

- Mission — brief description emphasizing building, local collaboration, and an entrepreneurial mindset.
- Roadmap — an interactive horizontal timeline (Chart.js) showing setup, project sprints, career cohorts, and social events. Filter buttons let you view "All", "Projects", or "Careers".
- Core Tracks — summary cards describing the two main focus areas (Projects & Careers).
- Team — core roles and structure in card format.
- Join — call-to-action and sign-up link.

## Tech notes

- Single-file static site: no server required.
- Uses CDN dependencies (so online access is required to load Tailwind, Chart.js and date-fns). If you need offline usage, download the vendor files and update the `<script>` / `<link>` tags in `BTU_Tech_Hub.html`.
- The interactive timeline is implemented with Chart.js using a horizontal bar chart with a time scale and custom dataset mapping.

## Roadmap (high level)

- Oct 1–15, 2025: Team setup, infrastructure and promotion, inaugural meeting on Oct 15.
- Oct 15–Dec 13, 2025: GenAI Sprint phases and project work, culminating in Project Demo Day (Dec 13).
- Oct–Dec 2025: Careers cohorts (impact resume, portfolio strategy, interview prep, networking).
- Dec 19, 2025: End-of-semester social.

## How to edit

- Open `BTU_Tech_Hub.html` in your editor.
- The timeline events are defined in the `allEvents` array in the embedded script. Edit dates, labels, or categories there and refresh the page to see updates.

Example: change an event date inside the `allEvents` array:

```js
// in BTU_Tech_Hub.html
const allEvents = [
	{ category: 'setup', label: 'Finalize Core Team', start: '2025-10-01', end: '2025-10-04' },
	// ...
];
```

## Contributing

Contributions are welcome. If you'd like to propose content changes or improvements:

1. Fork the repository (or create a branch).
2. Edit `BTU_Tech_Hub.html` and test locally.
3. Submit a pull request with a summary of your change and why it helps the launch.

If you prefer, open an issue describing what you'd like to change and we'll coordinate.

## Contact

For questions or coordination, please open an issue in this repository or reach out to the project maintainer listed on the repository profile.

## License

This repository uses the MIT license by default — update the file or add a `LICENSE` if you need a different license.
