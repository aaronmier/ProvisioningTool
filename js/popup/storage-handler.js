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
    if(message.mac){
      $('#mac').val(message.mac);
    }
    if(message.account){
      $('#acc').val(message.account);
    }
    if(message.customer){
      $('#customer').val(message.customer);
    }
    if(message.sow){
      $('#sow').val(message.sow);
    }
    if(message.ticket){
      $('#ticket').val(message.ticket);
    }
    if(message.enterprise){
      $('#url').val($('#url').val() + message.enterprise.toLowerCase());
    }
    if(message.sendToFName){
      $('#fName').val(message.sendToFName);
    }
    if(message.sendToLName){
      $('#lName').val(message.sendToLName);
    }
    if(message.sendToEmail){
      $('#email').val(message.sendToEmail);
    }
    if(message.street){
      $('#street').val(message.street);
    }
    if(message.city){
      $('#city').val(message.city);
    }
    if(message.zip){
      $('#zip').val(message.zip);
    }
    if(message.tracking){
      $('#trackingNum').val(message.tracking);
    }
    if(message.assignTo){
      $('#assignTo').val(message.assignTo);
    }
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
