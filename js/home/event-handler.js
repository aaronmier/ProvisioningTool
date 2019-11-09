chrome.tabs.update({pinned:true})
$('#pid').focus();
$('#main-container').on('keypress',function(e) {
  if(e.which == 13) {
    if($('#pid').is(":focus") || $('#account').is(":focus")){
      checkInputs();
    }

  }
});
$('#goBtn').click(function(){
  console.log('clicked')
  checkInputs();
});
$('#sugar-icon').click(function(){
  chrome.tabs.create({url: 'http://sugarcurve:8080/vonage/', active: true});
});
$('#palladion-icon').click(function(){
  chrome.tabs.create({url: 'https://ocom1.vonagenetworks.net/me/', active: true});
});

function checkInputs(){
  project = $('#pid').val();
  acc = $('#account').val();
  switch (project) {
    case "":
      if(acc==""){
        $('.alerts').remove();
        $('#box').prepend('<div class="d-flex justify-content-center alerts">Enter a Project or Account</div>')
      }else if(acc.length >0){
        $('.alerts').remove();
        chrome.tabs.create({url: chrome.runtime.getURL('home/notes.html'), active: true});
        chrome.tabs.create({url: 'https://zeus.telesphere.com/customer/search/search:' + acc, active: false});
      }else{
        $('.alerts').remove();
        $('#box').prepend('<div class="d-flex justify-content-center p-1 alerts">Enter a valid Account</div>')
      }
      break;
    default:
      if($.isNumeric(project) && project.length >3){
        $('.alerts').remove();
        chrome.tabs.create({url: 'https://zeus.telesphere.com/project/view/project_id:' + project, active: false})
      }else if(acc != ""){
        $('.alerts').remove();
        $('#box').prepend('<div class="d-flex justify-content-center m-2 alerts">Enter a valid Project or Account</div>')
      }else{
        $('.alerts').remove();
        $('#box').prepend('<div class="d-flex justify-content-center m-2 alerts">Enter a valid Project</div>')
      }
      break;
  }
}
