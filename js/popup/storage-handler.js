console.log('storage-handler loaded');
// Establish connection with Storage 'request-handler.js'
var port = chrome.runtime.connect({name: "popup"});
var alert = [
  '<p class="alerted">Please enter a MAC</p>',
  '<p class="alerted">Please enter a valid MAC</p>',
  '<p class="alerted">Please enter a account number</p>',
  '<p class="alerted">Please enter a valid account</p>'
]
// Send message when popup opened to get infor
port.postMessage({subject: 'opened'});
port.onMessage.addListener(function(message){
// If data is not empty
  if(message.state!='none'){
    $('#mac').val(message.mac);
    $('#acc').val(message.account);
    $('#customer').val(message.customer);
    $('#group').val(message.group);
    $('#sow').val(message.sow);
    $('#ticket').val(message.ticket);
    $('#url').val($('#url').val() + message.enterprise.toLowerCase());
    $('#fName').val(message.sendToFName);
    $('#lName').val(message.sendToLName);
    $('#phoneNumber').val(message.phoneNumber);
    $('#email').val(message.sendToEmail);
    $('#street').val(message.street);
    $('#city').val(message.city);
    $('#st').val(message.st);
    $('#zip').val(message.zip);
    $('#trackingNum').val(message.tracking);


    console.log('group: ' + message.group +' ent: ' + message.enterprise + ' st: ' + message.st)


    if(message.assignTo != null){
      $('#assignTo').val(message.assignTo);
    }
    console.log('test')


  }
});

/*  $('#updateBtn').click(function(){
  port.postMessage(saveValues());
}); */

$('.container').on('change keyup paste',function(){
  message = {
    subject: 'save',
    state: 'has data',
    mac: $('#mac').val(),
    account: $('#acc').val(),
    customer: $('#customer').val(),
    sow: $('#sow').val(),
    assignTo: $('#assignTo').val(),
    ticket: $('#ticket').val(),
    sendToEmail: $('#email').val(),
    street: $('#street').val(),
    city: $('#city').val(),
    st: $('#state').val(),
    zip: $('#zip').val(),
    phoneNumber: $('#phoneNumber').val(),
    tracking: $('#trackingNum').val()

  };
  port.postMessage(message);
});


function saveValues(){
  switch (whatToSave) {
    case 0:
      break;
      case 1:
        break;
        case 2:
          break;
          case 3:
            break;
    default:

  }
}
function isValid(){
  mac = $('#mac').val();
  account = $('#acc').val();
  if(mac !=""){
    if($.isNumeric(mac) && mac.length==6){
      if(account!=""){
        if($.isNumeric(account) && account.length > 4){
          removeAlerts();
        }else{addAlert(3);}
      }else {addAlert(2);}
    }else{addAlert(1);}
  }else{addAlert(0);}

  function addAlert(type) {
    removeAlerts();
    $( ".alerts" ).prepend(alert[type]);
  }
  function removeAlerts(){
    $('.alerted').remove();
  }
}
