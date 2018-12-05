# googleFormNotification
Receive an email notification when a new questionnaire is submitted.

Change bold snippet to the form's key in the URL

var form = FormApp.openById('**ENTER_FORM_ID_HERE**');	// INSERT FORM ID HERE

Change bold fake emails to your choosing

MailApp.sendEmail('**setme1@example.com**, **setMe2@example.com**', 'New PPC Client Questionnaire: ' + companyName , buildStringFromResponses());
