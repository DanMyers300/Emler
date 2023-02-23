// This function is to automatically email the evals and wbos that are enrolled in the future

{/* REMOVE TO ACTIVATE

// At the moment this function only loops through the rows. For every row it sends the same email to the same email address.

function sendEmail() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet1 = ss.getSheetByName('WBO/Eval List');
  const n = sheet1.getLastRow();
  
  // Calculate the date and then format it into mm/dd/yyyy
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  const formattedToday = mm + '/' + dd + '/' + yyyy;

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
