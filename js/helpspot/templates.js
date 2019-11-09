/*if(document.title){
  console.dir("Page loaded: " + document.title);
}else{
  console.dir("Blank page loaded: " + document.title);
  var s = new XMLSerializer().serializeToString(contentDocument);
  console.dir("Blank page loaded content: " + s);
} */
if(document.URL == "about:blank"){
  var script = document.createElement('script')
  script.textContent = `\n
  function changeResponse(input){\n
    var text = document.createElement("p");\n
    text.innerHTML = input\n
    document.querySelector("body").removeChild(document.querySelector("body").childNodes[0]);\n
    document.querySelector("body").append(text);\n
  };\n
    var evt = document.createEvent('Event');\n
    evt.initEvent('myCustomEvent', true, false);\n
    \n
    document.dispatchEvent(evt);\n`
  document.head.appendChild(script)
  document.addEventListener('myCustomEvent', function() {
    alert();
  });
}

//body[class="ephox-candy-mountain ephox-candy-mountain-active"
