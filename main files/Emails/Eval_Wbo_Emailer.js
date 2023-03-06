function sendEvaluationWaterBabyOrientationEmails() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('WBO/Eval List').getDataRange().getValues();
  
  for (var i = 2; i < sheet.length; i++) {
    var dataC = sheet[i][2];
    var dataJ = sheet[i][9];
    
    if (dataC == '' || dataJ == '') {
      Logger.log('no data');
    } else {
      var today = new Date();
      var dateC = new Date(dataC);
      var readableDate = Utilities.formatDate(dateC, "CST", "MM-dd-YYYY");

      if (dateC > today) {
        var emailAddress = dataJ;
        var subject = 'Evaluation/Waterbaby Orientation Confirmation';
        var message = 
          '<p>Hello Emler Family,</p>'
            +
          `<p>This is a confirmation email for your upcoming evaluation or Waterbaby orientation for ${readableDate}. We are very excited to start swimming with you!</p>` 
            +
          '<p>Please let us know if you have any questions or concerns.</p>'
            +
          '<p>Swimcerely,<br>Emler Swim School</br><br>Preston Forest</br><p><small>Contact Us:<ul><li>Call: (972) 851-7946</li><li>Text: (469) 663-5083</li><li>Email: Prestonforest@emlerswimschool.com</li></ul></p></small></p>';

        // create an HTML template
        var template = HtmlService.createHtmlOutput(message);

        MailApp.sendEmail({
          to: emailAddress,
          subject: subject,
          htmlBody: template.getContent()
        });
        Logger.log('Reminder email sent to ' + emailAddress);
      } else {
        Logger.log('Date in column C is not in the future');
      }
    }
  }
}
