/*  This will interact with frames with the source:
    https: //zeus.telesphere.com/ticket/add/customer_id:*
    Tasks:
    - It will open port and send messge - "New Ticket" to frame:
      https://support3.telesphere.com/admin.php?pg=request*
    -
*/
console.log('loaded zeus');
var port = chrome.runtime.connect({name: "zeus-add"});
port.postMessage({
  from: 'zeus',
  task: 'loaded',
});
