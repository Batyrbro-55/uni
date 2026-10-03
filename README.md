# Admissions Atlas · Fall 2027

University research and application planner with 232 university records, official source links, application platforms, funding notes, deadline filters, comparison, hidden universities, application checklists, notes and CSV export.

## Deploy on Vercel

1. Import this GitHub repository in Vercel.
2. Framework preset: **Next.js**. Root directory: repository root.
3. Keep the default install command. Build command: `npm run build`.
4. Deploy. No environment variables or external database are required.

Use Node.js 22 or later. Locally: `npm install`, then `npm run dev`.

## Data and persistence

The research catalog is stored in `data/universities.json`. All 232 records are available by default; no “Recently added” switch is needed. The latest batch contains 100 additional US institutions with Common App profiles.

Personal notes, hidden universities, checklists and application statuses are stored in **localStorage in each browser**, not on a shared server. Clearing browser storage removes that progress. Devices and domains do not sync. Progress from the original Cloudflare-hosted site is not included or automatically transferred. CSV export provides a readable snapshot of the current filtered list and notes.

Research dates and source links are attached to individual records. Confirmed Fall 2027 dates are distinguished from recurring dates and unknown dates. Common App membership or an aid flag is not proof of full funding for international students. Review official program and aid instructions before applying; admission and a zero family contribution are not guaranteed.

This is a standalone Next.js export. It does not require Cloudflare D1, Sites authentication, or the original hosting runtime. A public Vercel deployment exposes the research catalog; personal browser progress stays on the device. The original applicant’s identifying profile, scores and activities are excluded from this export.
