# Family Gathering 2026 — Setup notes

## File layout

```
familygathering/
├── index.html          ← Practical info (home page)
├── register.html       ← Registration form (one person per submission)
├── about.html          ← About Druskininkai & Lithuania
├── family.html         ← Family map (edit FAMILY array to add members)
├── organizer.html      ← Token-gated dashboard (don't link from public nav)
├── styles.css          ← Shared styles
├── shared.js           ← Shared i18n + nav + lang switcher
├── google-apps-script.gs   ← Backend: Google Sheet writer
└── SETUP.md            ← this file
```

The four public pages (home, register, about, family) share a header with
top-level navigation between them. `organizer.html` is intentionally not
in the public nav — only people with the URL and the token can use it.

The site works **as-is** without any backend (the form falls back to
email + JSON download). To collect responses automatically into a Google
Sheet, follow the steps below.

---

## 1. Try the page locally

Open `index.html` in your browser. You can already:

- switch language (LT / EN / DE) — auto-detected from the browser on first load
- navigate the four sections
- fill in the registration form and submit (without a backend it offers
  an email link + JSON download)

For the inline links between pages to work, the files all need to live
together in the same folder. Just keep them as-is.

---

## 2. Connect a Google Sheet (recommended)

### a. Create the sheet

1. Open Google Drive → **New → Google Sheet**.
2. Rename it (e.g. `Family Gathering 2026 — Registrations`).
3. Copy the long ID from the URL — the part between `/d/` and `/edit`.

### b. Add the script

1. In the sheet: **Extensions → Apps Script**.
2. Delete the default code, paste the contents of `google-apps-script.gs`.
3. At the top of the script, fill in:
   - `SHEET_ID`: paste the ID from step a.
   - `ORGANIZER_TOKEN`: pick a private string (e.g. `gathering-2026-secret`). You'll need this to view the organizer dashboard.
   - `NOTIFY_EMAIL` (optional): your email to receive a ping for every submission.
4. Save (the disk icon).

### c. Deploy as a web app

1. Click **Deploy → New deployment**.
2. Gear icon → **Web app**.
3. Description: `Family Gathering 2026 Registration`.
4. **Execute as:** Me.
5. **Who has access:** Anyone.
6. Click **Deploy**, authorise when prompted.
7. Copy the **Web app URL** that appears (looks like `https://script.google.com/macros/s/.../exec`).

### d. Plug the URL into the page

Open `shared.js`, find this block at the top:

```js
const CONFIG = {
  endpoint: "",
  organizerEmail: "linas@adaptagency.com",
  buildDate: "2026-04-27"
};
```

Paste your Web app URL into `endpoint`, save, and re-open the page.
Submissions will now go straight into your Google Sheet.

---

## 3. How the sheet is structured

One submission = one person = one row.

Columns, in order:

```
submission_id   submittedAt   lang
name            email         phone     country   city   age_group
langs           langs_other
arrival         mean          departure departure_time   diet
accommodation   accommodation_other
activities
notes
consent
```

Each registration creates a new row. If a parent is registering several
people (themselves, a kid, a grandparent), they fill the form once per
person — that's three rows.

---

## 4. Organizer dashboard

Open `organizer.html` directly in the browser. It asks for the token
once — paste the same `ORGANIZER_TOKEN` you set in the Apps Script.

The dashboard shows live counts (persons registered, by mean of arrival,
by accommodation type, dietary needs) plus a CSV export.

The token is stored in `localStorage` on your device only.
Don't link to `organizer.html` from any of the public pages — keep the
URL private.

---

## 5. Family map

Edit the `FAMILY` array near the top of `family.html`'s inline script.
Each entry is `{ name, city, country, lat, lng }` — there's a quick
lat/lng cheatsheet for common cities right above the array.

The map covers Europe (lon −20°..+60°, lat 35°..70°). Anything outside
that box still renders, but it'll sit at the edge.

If you'd later like the map to auto-populate from registrations (using
the city/country fields from the form), that's a small extension —
ping me.

---

## 6. Photos on the About page

The page uses public photos from
[Wikimedia Commons](https://commons.wikimedia.org/wiki/Druskininkai)
(via stable thumbnail URLs). You don't need to download anything.

To replace any photo with your own:

1. Drop a JPG into a new `images/` folder next to the HTML files.
2. In `about.html`, find the `<img src="...wikimedia.org...">` you want
   to replace and change `src` to `images/your-file.jpg`.
3. Update the matching `data-i18n="about.photo.*"` caption text in
   `shared.js` if you want to change the wording — or just drop the
   `data-i18n` attribute and write a static caption inline.

---

## 7. Hosting

Static site, four/five HTML pages and a couple of asset files. Host
anywhere:

- **Cheapest / free:** GitHub Pages, Netlify Drop, Cloudflare Pages —
  drag-and-drop the whole folder.
- **Already have a domain:** upload all the files to your web host,
  keeping the same folder structure.
- **Just share with the family:** Dropbox / Google Drive shared link
  works too, though some browsers block form submissions from `file:`
  URLs. Hosting it (any free option above) avoids that.

---

## 8. Updating content later

All visible text lives inside the `I18N` object in `shared.js`. To
change a sentence:

1. Find the `data-i18n="..."` (or `data-i18n-ph="..."`) key on the
   element you want to change.
2. Edit the matching string in the EN / LT / DE blocks of `I18N`.

The "Last updated" stamp on every page is auto-generated from
`CONFIG.buildDate` in `shared.js`. Bump that string when you push a new
version.

---

## 9. What's not included (deliberately)

- Online payments
- Automatic room assignment
- Live chat
- Multi-step invitation/reminder automation
- "Not coming" branch — the form only accepts registrations; if someone
  isn't coming, they just don't fill it in.

---

## 10. Future enhancements (easy follow-ups)

- **Edit-by-link:** add a `?id=...` parameter that pre-fills the form so
  people can update their answers (uses the `submission_id` already in
  the sheet).
- **Reminder emails:** add a Calendar-trigger function in the Apps
  Script to nudge non-responders.
- **Map / directions:** drop an `<iframe>` from Google Maps into the
  practical-info section once a venue is chosen.
- **Auto-populated family map:** pull `name / city / country` from the
  Sheet (with a no-PII public endpoint on the script).

---

Questions, or want help wiring up any of the above? Ping me.
