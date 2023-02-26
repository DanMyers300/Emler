function sendEmails() {
  var spreadsheet = SpreadsheetApp.openById("1VOrghqm-GxEsdgcuXBHt8neC8mTBtlhqiSsy-VyWKCU");
  var sheet = spreadsheet.getSheetByName("WBO/Eval List");
  var startRow = 2; // Start at second row to skip header row
  var numRows = sheet.getLastRow() - 1; // Number of rows to process
  
  // Iterate through rows
  for (var i = 0; i < numRows; i++) {
    var row = sheet.getRange(startRow + i, 1, 1, sheet.getLastColumn()).getValues()[0];
    var dateValue = row[1];
    var email = row[9];
    
    // Check if date is later than today's date
    if (dateValue instanceof Date && dateValue.getTime() > new Date().getTime()) {
      // Send email
      var subject = "Reminder: Upcoming Event";
      var body = "This is a reminder that the event is coming up soon.";
      MailApp.sendEmail(email, subject, body);
      console.log(dateValue);
    }
  }
}
