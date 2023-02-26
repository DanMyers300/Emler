function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('WBO/Eval List').getDataRange().getValues();
  
  for (var i = 2; i < sheet.length; i++) {
    var dataC = sheet[i][2];
    var dataJ = sheet[i][9];
    
    if (dataC == '' || dataJ == '') {
      Logger.log('no data');
    } else {
      Logger.log('data in column C: ' + dataC);
      Logger.log('data in column J: ' + dataJ);
    }
  }
}
