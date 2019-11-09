var port = chrome.runtime.connect({name: "popup"});
$('#MainTab').click(function(){
  openCity('clicked', "Main",$('#MainTab'));
  console.log(event)
  port.postMessage({
    subject: 'tabs',
    state: 'has data',
    tabName: 'MainTab'
  })
});

$('#NetXTab').click(function(){
  openCity('clicked', "NetX", $('#NetXTab'));
  port.postMessage({
    subject: 'tabs',
    state: 'has data',
    tabName: 'NetXTab'
  })
});

$('#ToolsTab').click(function(){
  openCity('clicked', "Tools", $('#ToolsTab'));
  port.postMessage({
    subject: 'tabs',
    state: 'has data',
    tabName: 'ToolsTab'
  })
  console.log(event)
});

$('.js-example-basic-multiple').select2({width: '100%'});
function openCity(evt, cityName, ct) {
// Declare all variables
var i, tabcontent, tablinks;

// Get all elements with class="tabcontent" and hide them
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
tabcontent[i].style.display = "none";
}

// Get all elements with class="tablinks" and remove the class "active"
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
tablinks[i].className = tablinks[i].className.replace(" active", "");
}

// Show the current tab, and add an "active" class to the button that opened the tab
document.getElementById(cityName).style.display = "block";
if(evt !== 'clicked'){
  ct.click()
}
ct.addClass("active");


}
port.postMessage({subject:'tabCheck'});
port.onMessage.addListener(function(message){
  if(message.tabName){
    test = '#' + message.tabName;
    openCity("saved", message.tabName, $(test));
  }else{
    openCity("saved", 'Main', $('#MainTab'));
  }


});

//openCity("init", "Main");
