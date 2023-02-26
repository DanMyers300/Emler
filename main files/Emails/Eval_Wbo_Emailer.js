function sendEmails() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(`WBO/Eval List`);

  const startRow = 2; // Start at second row to skip header row
  const numRows = sheet.getLastRow() - 1; // Number of rows to process

  for (var i = 0; i < numRows; i++) {
    var row = sheet.getRange(startRow + i, 1, 1, sheet.getLastColumn()).getValues()[0];
    var dateValue = row[2];
    var email = row[9];

    // Skip row if email is empty
    if (!email) {
      continue;
    }

    if (dateValue instanceof Date && dateValue.getTime() > new Date().getTime()) {
      // Send email
      var subject = "Reminder: Upcoming Event";
      var body = "This is a reminder that the event is coming up soon.";
      //MailApp.sendEmail(email, subject, body);
      console.log(row);
    }
  }
  console.log("end of data");
}
