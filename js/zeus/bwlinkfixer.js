as = [
  '',
  {
    newSrc: {ent:'', group: ''},
    originSrc:
    {
      ent: $("body > div.container-fluid > div > div:nth-child(4) > div.panel-body > div:nth-child(1) > div:nth-child(1) > p > a"),
      group: $("body > div.container-fluid > div > div:nth-child(4) > div.panel-body > div:nth-child(1) > div.col-sm-4.form-group > p > a")
    }
  },
  {
    newSrc: {ent:'', group: ''},
    originSrc: {
      ent: $("body > div.container-fluid > div > div:nth-child(7) > div.panel-body > div:nth-child(1) > div:nth-child(1) > p > a"),
      group: $("body > div.container-fluid > div > div:nth-child(7) > div.panel-body > div:nth-child(1) > div.col-sm-4.form-group > p > a")
    }
  },
  '',
  {
    newSrc: {ent:'', group: ''},
    originSrc:
    {
      ent: $("body > div.container-fluid > div > div:nth-child(9) > div.panel-body > div:nth-child(1) > div:nth-child(1) > p > a"),
      group: $("body > div.container-fluid > div > div:nth-child(9) > div.panel-body > div:nth-child(1) > div.col-sm-4.form-group > p > a")
    }
  }
]
//Set sources
for(i=1; i<=4;i++){
  if(i!==3){
    if(as[i].originSrc.ent.attr("href")){
      as[i].newSrc.ent = as[i].originSrc.ent.attr("href");
      as[i].newSrc.group = as[i].originSrc.group.attr("href");
    }else{
      as[i].originSrc.ent = 'no source'
      as[i].originSrc.group = 'no source'
    }
  }
}
//Change sources
for(i=1;i<=4;i++){
  if(i!==3){
    if(as[i].originSrc.ent !== 'no source'){
      if((as[i].newSrc.ent[31] !== "/")||(as[i].newSrc.ent[32] !== "/")){
        correctSrc(i);
      }
    }
  }
}

function correctSrc(i){
  switch (i) {
    case 1:
    newLeft = as[i].newSrc.ent.substring(0, 31);
    newRight = as[i].newSrc.ent.substring(31, as[i].newSrc.ent.length);
    as[i].originSrc.ent.attr('href',newLeft + '/' + newRight);
    newLeft = as[i].newSrc.group.substring(0, 31);
    newRight = as[i].newSrc.group.substring(31, as[i].newSrc.group.length);
    as[i].originSrc.group.attr('href',newLeft + '/' + newRight);
      break;
      case 2:
      case 4:
      newLeft = as[i].newSrc.ent.substring(0, 32);
      newRight = as[i].newSrc.ent.substring(32, as[i].newSrc.ent.length);
      as[i].originSrc.ent.attr('href',newLeft + '/' + newRight);
      newLeft = as[i].newSrc.group.substring(0, 32);
      newRight = as[i].newSrc.group.substring(32, as[i].newSrc.group.length);
      as[i].originSrc.group.attr('href',newLeft + '/' + newRight);
          break;
    default:
  }
}
