/* Redirects URL to custom page

*/

var callback = function (details) {
  let _redirectURL = "";
  return {redirectUrl: chrome.runtime.getURL('index.html')}
};
var filter ={urls: ["http://provisioning.com/*", "https://provisioning.com/*", "http://www.provisioning.com/","https://www.provisioning.com/"]};
var opt_extraInfoSpec = ["blocking"];
chrome.webRequest.onBeforeRequest.addListener(callback, filter, opt_extraInfoSpec);
