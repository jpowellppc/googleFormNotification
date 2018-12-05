/*
Email Notification Script:
Sends an email notification w/ details when a New Client Questionnaire is filled out. 
Author: Joseph Powell
*/

// Initialize form and retrieve questions/responses
var form = FormApp.openById('ENTER_FORM_ID_HERE');	// INSERT FORM ID HERE
var formResponses = form.getResponses();
var formResponse = formResponses[formResponses.length - 1];
var itemResponses = formResponse.getItemResponses();
var companyName = itemResponses[0].getResponse();

// -----------------------------------------------------------------------------
// Activate upon form submission
function doPost(form) {
  buildStringFromResponses();
  sendEmail();
} // end doPost

// -----------------------------------------------------------------------------
// Build single string containing all most-recent questions/responses
function buildStringFromResponses() {
  var stringBuilder = "";
  
  for (var j = 0; j < itemResponses.length; j++) {
    var itemResponse = itemResponses[j];
    stringBuilder += itemResponse.getItem().getTitle();
    stringBuilder += ' -- ';
    stringBuilder += itemResponse.getResponse();
    stringBuilder += '\n';
  }
  return stringBuilder;
}// end buildStringFromResponses

// ----------------------------------------------------------------------------
// Sends notification email w/ stringBuilder
function sendEmail () {
  
  // CHANGEME
  MailApp.sendEmail('setme1@example.com, setMe2@example.com', 'New PPC Client Questionnaire: ' + companyName , buildStringFromResponses());
  
} // end sendEmail
