/** @OnlyCurrentDoc */
// Google Apps Script for the "Lead Gen Audit" sheet. Receives /lead-gen audit applications from the website's
// server (app/api/lead/audit) and adds each one as a row on the first tab. Setup: docs/audit-form.md.
const COLUMNS = [
  ['submittedAt', 'Submitted at'], ['outcome', 'Bucket'], ['name', 'Full name'], ['email', 'Work email'],
  ['phone', 'Phone (WhatsApp)'], ['website', 'Company website'], ['revenue', 'Monthly revenue'],
  ['adSpend', 'Monthly ad spend'], ['problem', 'Main problem'], ['budget', '₹75K + GST works?'],
  ['landingPageUrl', 'Landing page'], ['utm_source', 'utm_source'], ['utm_medium', 'utm_medium'],
  ['utm_campaign', 'utm_campaign'], ['utm_content', 'utm_content'], ['utm_term', 'utm_term'], ['utm_id', 'utm_id'],
  ['id', 'Lead ID'],
];

// The URL is public once deployed: limit length, and stop values being read as spreadsheet formulas.
// Sheets treats anything starting with = + - @ as a formula, including a phone number like "+91 98765 43210"
// (which shows #ERROR!). A leading ' stores it as plain text; Sheets hides the ' in the cell.
function clean(value) {
  const text = String(value === undefined || value === null ? '' : value).slice(0, 500);
  return /^[=+\-@\t\r]/.test(text) ? "'" + text : text;
}

function respond(ok) {
  return ContentService.createTextOutput(JSON.stringify({ ok: ok })).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var data;
  try { data = JSON.parse(e.postData.contents); } catch (err) { return respond(false); }
  if (!data.id || !data.name || !data.email || !data.phone) return respond(false);

  // Two near-simultaneous submissions could both see an empty sheet; the lock keeps one header and whole rows.
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(COLUMNS.map(function (c) { return c[1]; }));
      sheet.setFrozenRows(1);
    }
    sheet.appendRow(COLUMNS.map(function (c) { return clean(data[c[0]]); }));
  } finally {
    lock.releaseLock();
  }
  return respond(true);
}
