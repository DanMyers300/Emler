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
        var message = 'Reminder: The date in column C is in the future.';
        var subject = 'Future Date Reminder';
        MailApp.sendEmail(emailAddress, subject, message);
        Logger.log('Reminder email sent to ' + emailAddress);
      } else {
        Logger.log('Date in column C is not in the future');
      }
    }
  }
}
