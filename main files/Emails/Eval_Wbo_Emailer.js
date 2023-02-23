function sendEmail() {
  const sheet = SpreadsheetApp.getActive().getSheetByName('WBO/Eval List');
  const dataRange = sheet.getDataRange();
  const values = dataRange.getValues();
  const lastRow = dataRange.getLastRow();

  let today = new Date();
  let y0 = today.getFullYear();
  let m0 = today.getMonth() + 1;
  let d0 = today.getDate();

// This is currently failing because of JS NAN error

  for (let i = 2; i < lastRow+1; i++) {
    x = Date.parse(values[i]);
    const date = new Date(x);
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();

    if(y0 === y && m0 === m && d0 === d) {
    const emailAddress = `contact@danmyers.net`; // Read email in column J
    const message = "Hello world!";
    const subject = "Hello world!";

    // console.log(emailAddress, message, subject);
    //MailApp.sendEmail(emailAddress, subject, message);
    } else {
      console.log(`failed`);
    }
  }
