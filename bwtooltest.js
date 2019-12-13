var port = chrome.runtime.connect({name: "bw"});
if(window.location.href == "https://myavoice.telesphere.com/Login/"){
  console.log("loaded");
  if($('a:contains("Login")')){

  }
}

port.onMessage.addListener(function(message) {
  switch (message) {
    case "go":
    if(window.location.href == "http://myavoice.telesphere.com/Common/folder_contents.jsp?menuId=0"){
      console.log('loaded');

      AssignSvc = $('a:contains("Assign Services")')[0];
      if(AssignSvc.textContent == "Assign Services"){
        AssignSvc.click();
      }else {
        console.log('Could not find assigned services')
      }
    }
      break;
    default:

  }
});

/* -- User page --
http://myavoice.telesphere.com/Common/folder_contents.jsp?menuId=0
*/


/*
-- Add Jquery to console --
var jqry = document.createElement('script');
jqry.src = "https://code.jquery.com/jquery-3.3.1.min.js";
document.getElementsByTagName('head')[0].appendChild(jqry);

-- Deselect all selected services --
$("option:selected").removeAttr("selected");

-- Select services --
PremierUC = $('option:contains("Premier UC 1.0")');
PremierUC.prop('selected', true);

-- Click add button --
AddBtn = $('input[class="bwbutton"][type="button"][value="Add\u00a0>"]')[0];
AddBtn.click();

-- Click ok button --
OkBtn = $('input[class="bwbutton"][type="submit"][value="OK"]');
OkBtn.click();


*/
