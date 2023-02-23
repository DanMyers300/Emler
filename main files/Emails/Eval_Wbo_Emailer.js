{/* REMOVE TO ACTIVATE

function sendEmail() {
  const sheet = SpreadsheetApp.getActive().getSheetByName('WBO/Eval List');
  const dataRange = sheet.getDataRange();
  const lastRow = data_range.getLastRow();

  const todaysDate = Utilities.formatDate(new Date(), "GMT+1". "MM/dd/yyyy");

  const evalDate = // To-Do: read values from column 

  for (let i = 2; i < lastRow+1; i++) {
    if(todaysDate < evalDate) {
    const emailAddress = `contact@danmyers.net`; // Read email in column J
    const message = "Hello world!";
    const subject = "Hello world!";

    MailApp.sendEmail(emailAddress, subject, message);
    }
    console.log(`Failed`);
  }
}
REMOVE TO ACTIVATE */}
