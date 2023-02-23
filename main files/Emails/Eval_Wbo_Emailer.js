// This function is currently failing because m, d, and y are returning NAN. It seems like it's a parsing error from google sheets

function sendEmail() {
  const sheet = SpreadsheetApp.getActive().getSheetByName('WBO/Eval List');
  const dataRange = sheet.getDataRange();
  const values = dataRange.getValues();
  const lastRow = dataRange.getLastRow();

  for (let i = 2; i < lastRow+1; i++) {
    let today = new Date();
    let y0 = today.getFullYear();
    let m0 = today.getMonth() + 1;
    let d0 = today.getDate();
    
    x = Date.parse(values[i]);
    const date = new Date(x);
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDate();
    
    if(y0 === y && m0 === m && d0 === d) {
    const emailAddress = `contact@danmyers.net`; // Read email in column J
    const message = "Hello world!";
    const subject = "Hello world!";

    console.log(emailAddress, message, subject);
    //MailApp.sendEmail(emailAddress, subject, message);

    } console.log(m,d,y,y0,m0,d0)
  }
}
