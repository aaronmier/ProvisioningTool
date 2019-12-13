bw_port = "";
chrome.runtime.onConnect.addListener(function(port){
  switch (port.name) {
    case 'bw':
      bw_port = port;
      console.log("port connected",bw_port);
      break;
      case 'popup':
      bw_port.postMessage("go")
        break;
    default:

  }


});
