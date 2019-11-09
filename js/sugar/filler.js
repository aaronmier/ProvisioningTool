var port = chrome.runtime.connect({name: "sugar"});
port.postMessage('sugar');
port.onMessage.addListener(function(message) {
  $('input#name').val(message.customer + ' - MACD');
  $('#vonage_account_number_c').val(message.account);
  $('#vonage_project_id_c').val(message.mac);
  $('#helpspot_ticket_c').val(message.ticket);
  $('#type').val('MACDSupport');
  $('#status').val('InProgress');
  $('#assigned_user_name').val(message.assignTo);
  $('#macd_submitted_by_c').val('ShaneFiek');
  $('#telesphere_macd_c').prop('checked', true)
  $('#macd_note_c').val('SOW: ' + message.sow);

});
