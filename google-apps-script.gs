/**
 * Family Gathering 2026 — Registration backend (v3)
 * Receives one-person-per-submission registrations from register.html
 * and stores them in a Google Sheet — one row per submission.
 *
 * SETUP:
 *  1. Create a new Google Sheet. Note its ID from the URL
 *     (the long string between /d/ and /edit).
 *  2. In the Sheet, go to Extensions → Apps Script.
 *  3. Replace the default Code.gs with this file's contents.
 *  4. Update the CONFIG block below — paste your Sheet ID and a token
 *     of your choice (used to gate the organizer view).
 *  5. Click Deploy → New deployment → Type: Web app.
 *       Description: Family Gathering 2026 Registration
 *       Execute as: Me
 *       Who has access: Anyone
 *  6. Copy the resulting Web App URL.
 *  7. Open shared.js in the site files and paste the URL into
 *     CONFIG.endpoint near the top.
 *  8. (Optional) Set CONFIG.NOTIFY_EMAIL to receive an email per submission.
 */

const CONFIG = {
  SHEET_ID: "PASTE_YOUR_SHEET_ID_HERE",
  SHEET_NAME: "Registrations",
  ORGANIZER_TOKEN: "change-me-pick-a-secret",   // used in organizer.html to view data
  NOTIFY_EMAIL: ""                              // leave empty to skip email notifications
};

/**
 * Columns written to the sheet, in this exact order.
 * Each row = one person registered (one submission).
 */
const COLS = [
  "submission_id", "submittedAt", "lang",
  "name", "email", "phone", "country", "city", "age_group",
  "langs", "langs_other",
  "arrival", "mean", "departure", "departure_time", "diet",
  "accommodation", "accommodation_other",
  "activities",
  "notes",
  "consent"
];

/* ================================================================
   POST — receives a registration and appends one row
================================================================ */
function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    const sheet = getSheet_();

    // Header row — write once if missing
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(COLS);
      sheet.getRange(1, 1, 1, COLS.length).setFontWeight("bold").setBackground("#e8efdc");
      sheet.setFrozenRows(1);
    }

    const submissionId = payload.submission_id || makeSubmissionId_(payload);
    const submittedAt  = payload.submittedAt  || new Date().toISOString();
    const lang         = payload.lang         || "";

    const langs      = Array.isArray(payload.langs)      ? payload.langs.join(", ")      : (payload.langs || "");
    const activities = Array.isArray(payload.activities) ? payload.activities.join(", ") : (payload.activities || "");

    const valuesByCol = {
      submission_id:       submissionId,
      submittedAt:         submittedAt,
      lang:                lang,
      name:                payload.name || "",
      email:               payload.email || "",
      phone:               payload.phone || "",
      country:             payload.country || "",
      city:                payload.city || "",
      age_group:           payload.age_group || "",
      langs:               langs,
      langs_other:         payload.langs_other || "",
      arrival:             payload.arrival || "",
      mean:                payload.mean || "",
      departure:           payload.departure || "",
      departure_time:      payload.departure_time || "",
      diet:                payload.diet || "",
      accommodation:       payload.accommodation || "",
      accommodation_other: payload.accommodation_other || "",
      activities:          activities,
      notes:               payload.notes || "",
      consent:             payload.consent ? "yes" : "no"
    };

    const row = COLS.map(c => valuesByCol[c] != null ? valuesByCol[c] : "");
    sheet.appendRow(row);

    if (CONFIG.NOTIFY_EMAIL) {
      try { onNewResponse_(payload, submissionId); } catch (err) { console.error(err); }
    }
    return jsonOut_({ ok: true, submission_id: submissionId });
  } catch (err) {
    return jsonOut_({ ok: false, error: String(err && err.message || err) });
  }
}

/* ================================================================
   GET — returns all rows for the organizer view (token-gated)
================================================================ */
function doGet(e) {
  const token = (e && e.parameter && e.parameter.token) || "";
  if (!CONFIG.ORGANIZER_TOKEN || token !== CONFIG.ORGANIZER_TOKEN) {
    return jsonOut_({ ok: false, error: "unauthorized" });
  }
  const sheet = getSheet_();
  if (sheet.getLastRow() < 2) return jsonOut_({ rows: [] });
  const values = sheet.getRange(1, 1, sheet.getLastRow(), COLS.length).getValues();
  const headers = values.shift();
  const rows = values.map(v => {
    const o = {};
    headers.forEach((h, i) => { o[h] = v[i]; });
    if (o.submittedAt instanceof Date) o.submittedAt = o.submittedAt.toISOString();
    if (o.arrival instanceof Date)     o.arrival = isoDate_(o.arrival);
    if (o.departure instanceof Date)   o.departure = isoDate_(o.departure);
    return o;
  });
  return jsonOut_({ rows: rows });
}

/* ================================================================
   Helpers
================================================================ */
function getSheet_() {
  const ss = SpreadsheetApp.openById(CONFIG.SHEET_ID);
  let sh = ss.getSheetByName(CONFIG.SHEET_NAME);
  if (!sh) sh = ss.insertSheet(CONFIG.SHEET_NAME);
  return sh;
}
function jsonOut_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
function makeSubmissionId_(payload) {
  const ts = (payload.submittedAt || new Date().toISOString()).replace(/[^0-9]/g, "").slice(0, 14);
  const slug = String(payload.email || payload.name || "anon")
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 24);
  return ts + "-" + (slug || "anon");
}
function isoDate_(d) {
  return Utilities.formatDate(d, Session.getScriptTimeZone() || "UTC", "yyyy-MM-dd");
}
function onNewResponse_(payload, submissionId) {
  const subj = "New registration — " + (payload.name || "?");
  const lines = [
    "A new registration just came in for the Family Gathering 2026.",
    "",
    "Submission ID: " + submissionId,
    "Name:          " + (payload.name || ""),
    "Email:         " + (payload.email || ""),
    "Phone:         " + (payload.phone || ""),
    "Country / City: " + (payload.country || "") + " / " + (payload.city || ""),
    "Age group:     " + (payload.age_group || ""),
    "Languages:     " + ((payload.langs || []).join(", ") + (payload.langs_other ? " / " + payload.langs_other : "")),
    "",
    "Arrival:       " + (payload.arrival || "") + " (" + (payload.mean || "") + ")",
    "Departure:     " + (payload.departure || "") + " " + (payload.departure_time || ""),
    "Diet:          " + (payload.diet || ""),
    "",
    "Accommodation: " + (payload.accommodation || "")
      + (payload.accommodation_other ? " (" + payload.accommodation_other + ")" : ""),
    "Activities:    " + ((payload.activities || []).join(", ") || "-"),
    "",
    "Notes: " + (payload.notes || "-"),
    "",
    "Submitted: " + (payload.submittedAt || ""),
    "Language:  " + (payload.lang || "")
  ];
  MailApp.sendEmail(CONFIG.NOTIFY_EMAIL, subj, lines.join("\n"));
}
