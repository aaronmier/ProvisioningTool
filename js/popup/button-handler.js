console.log('button-handler loaded');
$('#newTicketBtn').click(function () {
  var port = chrome.runtime.connect({name: "zeus-add"});

  port.postMessage({from:'popup', account: $('#acc').val()});
})
$("#macBtn").click(function(){
  checkAccMAC();
});
$("#sugarSearchBtn").click(function(){
    customer = $('#customer').val();
  chrome.tabs.create({url: 'http://sugarcurve:8080/vonage/index.php?action=UnifiedSearch&module=Home&search_form=false&advanced=false&query_string=' + customer,active: true});

});
$("#sugarFillBtn").click(function(){
  var port = chrome.runtime.connect({name: "sugar"});
  port.postMessage('popup');
});
$("#openTicketBtn").click(function(){
  chrome.tabs.create({url: 'https://zeus.telesphere.com/ticket/viewHS/ticket_id:' + $('#ticket').val() ,active: true, pinned:false});
});


$("#clearBtn").click(function(){
  $('#mac').val('');
  $('#acc').val('');
  $('#customer').val('');
  $('#group').val('');
  $('#sow').val('');
  $('#assignTo').val('Aaron Mier');
  $('#ticket').val('');

});
$("#clearBtn-NetX").click(function(){
  $('#url').val('');
  $('#fName').val('');
  $('#lName').val('');
  $('#phoneNumber').val('');
  $('#email').val('');
  $('#street').val('');
  $('#city').val('');
  $('#st').val('');
  $('#zip').val('');
});
$('#NetXFillOrderBtn').click(function(){
  var port = chrome.runtime.connect({name: "popup"});
  port.postMessage({
    subject: 'NetXFillOrder',
    mac: $('#mac').val(),
    ticket: $('#ticket').val(),
    account:   $('#acc').val()
  })
})
$('#NetXFillAddressBtn').click(function(){
  var port = chrome.runtime.connect({name: "popup"});
  port.postMessage({
    subject: 'NetXFillAddress',
    fName: $('#fName').val(),
    lName: $('#lName').val(),
    customer: $('#customer').val(),
    street: $('#street').val(),
    city: $('#city').val(),
    st: $('#st').val(),
    zip: $('#zip').val(),
    phoneNumber: $('#phoneNumber').val()
  })
})
$('#orderBtn').click(function(){
  switch ($('#phone').val()[0]) {
    case '311':
      chrome.tabs.create({url: 'https://www.netxusa.com/products.php?view=product&path=manufacturer&pindex=15383',active: true, pinned:false});
      break;
      case '411':
        chrome.tabs.create({url: 'https://www.netxusa.com/products.php?view=product&path=manufacturer&pindex=15379',active: true, pinned:false});
        break;
    default:
  }
})
$("#assignTo").change(function () {
  var port = chrome.runtime.connect({name: "popup"});
  port.postMessage({subject:"macChange",assignTo: $("#assignTo").val()});
  console.log($("#assignTo").val())
   });
$("#copyTracking").click(function () {
 copyText = document.createElement("textarea");
 copyText.value = '=HYPERLINK("https://www.fedex.com/apps/fedextrack/?action=track&ascend_header=1&clienttype=dotcom&cntry_code=us&language=english&tracknumbers=' + $("#trackingNum").val() +`","Tracking: ` + $("#trackingNum").val() + `")`
 copyText.style.position = 'fixed';
 copyText.style.top = 0;
 copyText.style.left = 0;
 copyText.style.width = '2em';
 copyText.style.height = '2em';
 copyText.style.padding = 0;
 copyText.style.border = 'none';
 copyText.style.outline = 'none';
 copyText.style.boxShadow = 'none';
 copyText.style.background = 'transparent';
 document.body.appendChild(copyText);
 copyText.focus();
 copyText.select();
 document.execCommand('copy');
 document.body.removeChild(copyText);
 console.log('tracking clicked');
  });
  $("#clear-tools-Btn").click(function () {
    $("#trackingNum").val('')
    });

function checkAccMAC(){
  mac = $('#mac').val();
  account = $('#acc').val();
  if(mac !=""){
    if($.isNumeric(mac) && mac.length==6){
      if(account!=""){
        if($.isNumeric(account) && account.length > 4){
          chrome.tabs.create({url: 'https://zeus.telesphere.com/quote/view/customer_id:' + account + ',quote_num:' + mac,active: false});
          removeAlerts();
        }else{addAlert(3);}
      }else {chrome.tabs.create({url: 'https://zeus.telesphere.com/project/search/search:' + mac,active: false});}
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
