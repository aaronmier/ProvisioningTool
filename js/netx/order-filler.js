console.log('loaded')
chrome.runtime.onMessage.addListener(function(message) {
    mac = message.mac + '-V-'
    order = message.mac + '-{' + message.ticket + '}'
    $("#PO").val(mac)
    $("#order\\[customFieldsValues\\]\\[customerPO\\]").val(order)
    $("#order\\[customFieldsValues\\]\\[customerID\\]").val(message.account)
    $("#emails").val($("#emails").val() + '\n' + 'tsp-support@vonage.com')
  });
