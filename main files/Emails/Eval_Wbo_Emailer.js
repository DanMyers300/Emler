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
      
      if (dateC > today) {
        var emailAddress = dataJ;
        var subject = 'Evaluation Confirmation';
        var message = 
          '<p>Hello Emler Family,</p>'
            +
          '<p>This is a confirmation email for your upcoming evaluation. We are very excited to start swimming with you!</p>' 
            +
          '<p>Please let us know if you have any questions or concerns.</p>'
          +
          '<p>Swimcerely,<br>Emler Swim School</br><br>Preston Forest</br></p>';

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
