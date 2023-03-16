function sendEmail() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1').getDataRange().getValues();
  
  for (var i = 1; i < sheet.length; i++) {
    var parentEmail = sheet[i][1];
    var parentName = sheet[i][0]
    
    if (parentEmail == ``) {
      Logger.log(`No Email`);
    } else {
        var emailAddress = `prestonforest@emlerswimschool.com`;
        var subject = `${parentEmail}`;
        var message = `<!DOCTYPE html>
<html>
<head>
	<title>Emler Swim School Daily Lessons</title>
	<style>
		body {
			font-family: Arial, sans-serif;
			background-color: #f4f4f4;
			padding: 20px;
		}

		h1 {
			color: #333;
			font-size: 28px;
			margin-bottom: 20px;
		}

		p {
			color: #3260a8;
			font-size: 16px;
			line-height: 1.5;
			margin-bottom: 20px;
		}

		img {
			max-width: 100%;
			height: auto;
			margin-bottom: 20px;
		}
	</style>
</head>
<body>
	<h1>Hello ${parentName},</h1>
	<p>Summer 2023 is just around the corner, and we at Emler Swim School want to make sure your child is safe and confident in the water.
	<br /> As a previous enrollee in our summer daily lessons, we know that you understand the value of quality swim instruction.</p>
	<p>Our summer daily lessons are designed to give your child the individual attention and support they need to develop critical swim skills.
	<br />With our proven teaching methods, your child will progress quickly and gain the confidence they need to enjoy the water safely.</p>
	<p>Enrolling your child is easy. Here are some ways you can sign up for our 2023 summer daily lessons:</p>
	<ul>
		<li>
			<form action="https://app.iclasspro.com/portal/emlerdallas" method="get" target="_blank">
         			<button type="submit">On the Parent Portal</button>
      			</form>
		</li>
		<li>Respond to this email and we'll be happy to help you with the enrollment process</li>
		<li>Give us a call at (469) 847-9401 and we'll be happy to assist you over the phone</li>
	</ul>
	<p>Don't wait until it's too late to enroll. Secure your child's spot in our summer daily lessons today!</p>
	<img src="https://emlerswimschool.com/wp-content/uploads/2017/11/waterbaby.jpg" style="height: 200px; width: 400px;" alt="Child Swimming in Water">
</body>
</html>
`;

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
