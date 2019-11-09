var zeus = 0, popup = 0;
chrome.runtime.onConnect.addListener(function(port){

  // Name of who is sending the request
  switch (port.name) {
  // Popup sending request
    case "popup":
      port.onMessage.addListener(function(message){
        switch (message.subject) {
          case "opened":
            pullData(['state','mac','account','customer','sow','ticket','assignTo','sendToEmail','street','city','st','zip','sendToFName','sendToLName','phoneNumber','group','enterprise','tracking']);
            break;
            case "save":
              saveData(message);
              break;
              case "tabs":
                chrome.storage.sync.set({tabName: message.tabName})
                break;
                case "tabCheck":
                  chrome.storage.sync.get(['tabName'], function(result) {
                    port.postMessage(result);
                  });
                  break;
                  case "NetXFillOrder":
                  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                  var activeTab = tabs[0];
                  chrome.tabs.sendMessage(activeTab.id, message);
                });
                    break;
                    case "NetXFillAddress":
                    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                    var activeTab = tabs[0];
                    chrome.tabs.sendMessage(activeTab.id, message);
                  });
                      break;
            case "macChange":
            assignTo = message.assignTo;
              chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
              var activeTab = tabs[0];
              chrome.tabs.sendMessage(activeTab.id, assignTo);
            });
              break;
              default:
        }//End of: Switch Message
      });//Message Listener - Closed
    break;
    case "sugar":
    port.onMessage.addListener(function(message){
      if(message=='popup'){
        chrome.storage.sync.get(['account','mac','ticket','customer','assignTo','sow'], function(result) {
          window.sugar_port.postMessage(result);
        });
    }else if(message =='sugar'){
       window.sugar_port = port;
    }
    });
    break;
    case "mac":
      port.onMessage.addListener(function(message){
        switch (message.subject) {
          case 'mac_info':
            saveData(message);
            break;
            case 'getTicketInfo':
            console.log(message.ticket)
              if(message.ticket.length == 7){
                ticketUrl = 'https://support3.telesphere.com/admin.php?pg=request&reqid=' + message.ticket
                $.ajax({
                  url: ticketUrl,
                  contentType: 'text/html; charset=UTF-8',
                  dataType: "text", //was text
                  crossDomain: true,
                  success: function(data){
                    var phoneNum = $(data).find("#sPhone")[0].value;
                    chrome.storage.sync.set({phoneNumber: phoneNum});
                  },
                  fail: function(xhr, textStatus, errorThrown){
                    console.log('request to get phone number failed');
                  }
                });
                $.ajax({
                  url: 'https://zeus.telesphere.com/ticket/viewHS/ticket_id:' + message.ticket,
                  contentType: 'text/html; charset=UTF-8',
                  dataType: "text", //was text
                  crossDomain: true,
                  success: function(data){
                    var group = $(data).find("#customer_info > div:nth-child(1) > div:nth-child(4) > p > a")[0].textContent.trim()
                    var enterprise = $(data).find("#customer_info > div:nth-child(1) > div:nth-child(3) > p > a")[0].textContent.trim()
                    chrome.storage.sync.set({group: group, enterprise: enterprise});
                  },
                  fail: function(xhr, textStatus, errorThrown){
                    console.log('request to get group failed');
                  }
                });
              }else{
                console.log("Did not query for Group, Enterprise, or Phone Number because invalid ticket");
              }

              break;
          default:

        }

      });
    break;
      case "zeus-add":
        port.onMessage.addListener(function(message){
          switch (message.from) {
            case 'popup':
              popup += 1;
              chrome.tabs.create({url: 'https://zeus.telesphere.com/ticket/add/customer_id:'+message.account,active:true});
              break;
            case 'zeus':
            console.log('zeus case')
              zeus += 1;
              break;
              case 'helpspot':
              if(zeus > 0 && popup > 0){
                var ticketInfo;

                data = ['mac','ticketSum','subscribeTo','sendToFName','sendToLName','sendToEmail','account', 'customer', 'assignTo','sow','services'];
              chrome.storage.sync.get(data, function(result) {
                port.postMessage({
                  task: 'load',
                  mac: result.mac,
                  ticketSum: result.ticketSum,
                  subscribeTo: result.subscribeTo,
                  sendToFName: result.sendToFName,
                  sendToLName: result.sendToLName,
                  sendToEmail: result.sendToEmail,
                  account: result.account,
                  customer: result.customer,
                  assignTo: result.assignTo,
                });
                setTimeout(function(){port.postMessage({
                  task: 'insert sow',
                  sow: result.sow,
                  services: result.services
                })}, 3000)
              });
                zeus = 0;
                popup = 0;
              }
        }
      });
        break;
        case 'netx':
            port.onMessage.addListener(function(message){
              switch (message) {
                case 'button pressed':
                  chrome.storage.sync.get([''], function(result) {

                  });
                  break;
                default:

              }
            });
          break;
    default:

  }//End of: Switch Popup

//  - Functions -
  function pullData(data){
    chrome.storage.sync.get(data, function(result) {
      if(result.state!=null){
        port.postMessage(result)
      }else{
        port.postMessage({state: 'none'})
      }
    });
  }
  function saveData(data){
    chrome.storage.sync.set(
      {
        state: data.state,
        mac: data.mac,
        account: data.account,
        customer: data.customer,
        sow: data.sow,
        assignTo: data.assignTo,
        services: data.services,
        ticketSum: data.ticketSum,
        sendToFName: data.sendToFName,
        sendToLName: data.sendToLName,
        sendToEmail: data.sendToEmail,
        subscribeTo: data.subscribeTo,
        email: data.email,
        street: data.street,
        city: data.city,
        st: data.st,
        zip: data.zip,
        ticket: data.ticket,
        tracking: data.tracking


      }, function() {
      console.log('saved');
    });
  }
});
