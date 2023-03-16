function sendEmail() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1').getDataRange().getValues();
  
  for (var i = 1; i < sheet.length; i++) {
    var parentEmail = sheet[i][1];
    var parentName = sheet[i][0]
    
    if (parentEmail == ``) {
      Logger.log(`No Email`);
    } else {
        var emailAddress = parentEmail;
        var subject = `Subject`;
        var message = `Message`;

        // create an HTML template
        var template = HtmlService.createHtmlOutput(message);

        MailApp.sendEmail({
          to: emailAddress,
          subject: subject,
          htmlBody: template.getContent()
        });
        Logger.log('Reminder email sent to ' + emailAddress);
    }
  }
}
