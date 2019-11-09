console.log('loaded')
chrome.runtime.onMessage.addListener(function(message) {
  console.log('got message')
$('#sFirstName').val(message.fName);
$('#sLastName').val(message.lName);
$('#sCompany').val(message.customer);
$('#sAddress1').val(message.street);
$('#sState').val(message.st); // (Cap. Abbr..)
$('#sCity').val(message.city);
$('#sZip').val(message.zip);
$('sCountry').val(); // (Cap. Abbr..)
$('#sPhone').val(message.phoneNumber);

});
