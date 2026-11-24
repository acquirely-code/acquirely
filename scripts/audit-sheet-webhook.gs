/** @OnlyCurrentDoc */
// Google Apps Script for the "Lead Gen Audit" sheet. Receives /lead-gen audit applications from the website's
// server (app/api/lead/audit) and adds each one as a row on the first tab. Setup: docs/audit-form.md.
// After pasting a new version: Deploy > Manage deployments > Edit > Version: New version > Deploy (same URL).
const COLUMNS = [
  ['submittedAt', 'Submitted at'], ['outcome', 'Bucket'], ['name', 'Full name'], ['email', 'Work email'],
  ['phone', 'Phone (WhatsApp)'], ['website', 'Company website'], ['revenue', 'Monthly revenue'],
  ['adSpend', 'Monthly ad spend'], ['problem', 'Main problem'], ['budget', '₹75K + GST works?'],
  ['landingPageUrl', 'Landing page'], ['utm_source', 'utm_source'], ['utm_medium', 'utm_medium'],
  ['utm_campaign', 'utm_campaign'], ['utm_content', 'utm_content'], ['utm_term', 'utm_term'], ['utm_id', 'utm_id'],
  ['id', 'Lead ID'],
];

// Other header names a column may already have, e.g. one typed in by hand.
const ALIASES = { phone: ['phone number', 'phone', 'whatsapp', 'contact number'], id: ['lead id'] };

// The URL is public once deployed: limit length. Each new row is formatted as plain text before writing, so a phone
// number like "+91 98765 43210" stays text instead of becoming a formula (#ERROR!). A leading = or @ also gets a '
// in front, so nothing is ever written as a formula.
function clean(value) {
  const text = String(value === undefined || value === null ? '' : value).slice(0, 500);
  return text.charAt(0) === '=' || text.charAt(0) === '@' ? "'" + text : text;
}

function respond(ok) {
  return ContentService.createTextOutput(JSON.stringify({ ok: ok })).setMimeType(ContentService.MimeType.JSON);
}

function norm(text) {
  return String(text).toLowerCase().split(' ').filter(Boolean).join(' ').trim();
}

// Values go under the matching header, whatever order the sheet's columns are in, so a reordered, renamed or
// hand-made header row can't shift data. A header matches by its label, its key (e.g. "phone") or an alias,
// ignoring case and extra spaces. A field with no column yet gets a new column at the end.
function doPost(e) {
  var data;
  try { data = JSON.parse(e.postData.contents); } catch (err) { return respond(false); }
  if (!data.id || !data.name || !data.email || !data.phone) return respond(false);

  // Two near-simultaneous submissions could both add a header or a column; the lock keeps them in turn.
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(COLUMNS.map(function (c) { return c[1]; }));
      sheet.setFrozenRows(1);
    }
    var width = Math.max(sheet.getLastColumn(), 1);
    var headers = sheet.getRange(1, 1, 1, width).getValues()[0].map(norm);
    var row = new Array(headers.length).fill('');
    COLUMNS.forEach(function (c) {
      var names = [norm(c[1]), norm(c[0])].concat(ALIASES[c[0]] || []);
      var at = -1;
      names.forEach(function (name) { if (at < 0) at = headers.indexOf(name); });
      if (at < 0) {
        headers.push(norm(c[1]));
        row.push('');
        at = headers.length - 1;
        sheet.getRange(1, at + 1).setValue(c[1]);
      }
      row[at] = clean(data[c[0]]);
    });
    var target = sheet.getRange(sheet.getLastRow() + 1, 1, 1, row.length);
    target.setNumberFormat('@');
    target.setValues([row]);
  } finally {
    lock.releaseLock();
  }
  return respond(true);
}
