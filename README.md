# googleFormNotification
Receive an email notification when a new questionnaire is submitted.

This is a container bound script. Go to the form you would like to apply it to and go to the "...", then click Script editor and add the code here.

Change the bold code snippets to your specifications

Line 8 - Change bold snippet to the form's key in the URL

> var form = FormApp.openById('**ENTER_FORM_ID_HERE**');	// INSERT FORM ID HERE

Line 41 - Change bold fake emails to your choosing

> MailApp.sendEmail('**setme1@example.com**, **setMe2@example.com**', 'New PPC Client Questionnaire: ' + companyName , buildStringFromResponses());
