// This function is to automatically email the evals and wbos that are enrolled in the future

{/* REMOVE TO ACTIVATE

// At the moment this function only loops through the rows. For every row it sends the same email to the same email address.

function sendEmail() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet1 = ss.getSheetByName('WBO/Eval List');
  const n = sheet1.getLastRow();

  // Add an If statement to the next set of code so that it only sends a message if the date is past the current date. If it's not then it returns: "Failed"

  for (let i = 2; i < n+1; i++) {

    // Change this line so that it picks the email out of J instead of just sending it to myself.

    const emailAddress = `contact@danmyers.net`;


    // This can stay the same
    const message = "Hello world!";
    const subject = "Hello world!";

    MailApp.sendEmail(emailAddress, subject, message);
  }
}

*/} //REMOVE TO ACTIVATE
