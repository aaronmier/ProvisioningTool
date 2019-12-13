console.log('loaded');
var port = chrome.runtime.connect({name: "mac"});
chrome.runtime.onMessage.addListener(function(message) {
  $("#quote > div > div.panel-body > div:nth-child(7) > div.panel-body > div:nth-child(1) > div > select").val(message)
});
      // Next we are finding the services for the MAC
      // Find the table
      table = $("#ptable");
      // Find the table body
      body = $("#ptable > tbody");
      //Find the rows of table
      rows = body.children();
      // Check to make sure table and items are there
services = [];
      if(table){
        if(body){
          if(rows){
            for(j=0; j < rows.length; j++){
              let product = [];
              let quantity = [];
              //product = rows[j].querySelectorAll('input[class="form-control input-sm product tt-input"]')[0].value;
              product = rows[j].querySelectorAll('input[class="form-control input-sm product  tt-input"')[0].value;
                quantity = rows[j].children[1].children[0].value;
              services[j] = quantity + " " + product;
            }
          }
        }
      }
    address = $('#address').val();
    lines = address.split(/\r?\n/);
    addressArray = lines[1].split(',');
    street = lines[0].trim();
    console.log($.trim(addressArray[2]))

    name = document.getElementById("quote[AuthorizedBy]").options[document.getElementById("quote[AuthorizedBy]").selectedIndex].text,
    nameArray = name.split(',');
      //Sending info to storage


      port.postMessage({
        subject: "mac_info",
        state: 'has data',
        mac: $.trim(document.querySelector('#header_crumbs > li.active').textContent),
        customer: document.querySelector('#header_hint > li:nth-child(2)').textContent,
        account: document.querySelector('input[name="customer_id"]').value,
        ticketSum: document.getElementById("quote[name]").value,
        subscribeTo: document.querySelector('#quote > div > div.panel-body > div:nth-child(6) > div.panel-body > div:nth-child(2) > div > dl > dd:nth-child(4)').textContent,
        sendToFName: $.trim(nameArray[1]),
        sendToLName: $.trim(nameArray[0]),
        street: street,
        city: $.trim(addressArray[0]),
        st: $.trim(addressArray[1]),
        zip: $.trim(addressArray[2]),
        sendToEmail: document.querySelector('#quote > div > div.panel-body > div:nth-child(6) > div.panel-body > div:nth-child(2) > div > dl > dd:nth-child(6)').textContent,
        sow: document.querySelector('textarea[class="form-control input-sm"]').innerHTML,
        assignTo: $.trim($("#quote > div > div.panel-body > div:nth-child(7) > div.panel-body > div:nth-child(1) > div > select").val()),
        services: services,
        ticket: getTicket()
      });
      port.postMessage({subject: 'getTicketInfo', ticket: getTicket()})
function getTicket(){
    ticket = $("#quote\\[description\\]").val().replace(/\D/g,'')
    test = ticket.substring(0, 2);
    if(test==11){
        ticket = ticket.substring(0, 7);
        if(ticket.length !== 7){
          ticket = "No ticket in Notes"
        }
    }else{
        ticket = "No ticket in Notes"
    }
   return ticket
}
