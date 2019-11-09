var port = chrome.runtime.connect({name: "zeus-add"});
port.postMessage({from: 'helpspot'})
port.onMessage.addListener(function(message) {
  if (message.task == 'load'){
    var assignTo = '517';
    assignTicketTo();
    sub = subscribeTicketTo();
    subTo = '';
    if(sub != 0){
      subTo = `ms_select('ccstaff_public-select-multiple-` + sub + `','` + sub + `','ccstaff');`
    }
    $('#sFirstName').val(message.sendToFName);// TODO: Variable add here
    $('#sLastName').val(message.sendToLName);// TODO: Variable add here
    $('#Custom27').val("Order " + message.mac + " | " + message.ticketSum);// TODO: Variables add here
    $('#sUserId').val(message.customer);// TODO: Variable add here
    $('#sEmail').val(message.sendToEmail);// TODO: Variable add here
    $('#Custom2').val(message.account);// TODO: Variable add here
    $('#Custom19').val(message.mac);// TODO: Variable add here
    $('#fOpenedVia').val(12);
    $('#xStatus').val(38);
    $('#xCategory').val(13)
    $('#Custom1').val('P4 (MACD)');
    $('#Custom26').val('SD MACD');

    addLiveLookup = document.createElement('script');
    addLiveLookup.innerText += `
    categorySet();
    $jq('#customer_tabs > ul > li:nth-child(3) > a')[0].click();
    $jq('#ccstaff_button')[0].click();
    $jq("#ccstaff_public > div:nth-child(2) > div > input[type=checkbox]").prop('checked', true);
    `+ subTo + `
    function theLive(){
      var  custId, email, tr, magGlass,thePopup;
      email = $jq("#sEmail").val().toUpperCase();
      custId = $jq("#sUserId").val();
      tr = document.querySelectorAll(".tablerowon,.tablerowoff");
      for (j = 0; j < tr.length; j++) {
        let tdata = tr[j];
        let emailCheck = tdata.children[4].textContent.toUpperCase();
        let custIdCheck = tdata.children[1].textContent;
        if (tdata) {
          if (email==emailCheck && custId==custIdCheck) {
            magGlass = tdata.querySelector('a[onclick="ll_popup(this);return false;"]').getAttribute("id");
            thePopup = document.getElementById(magGlass);
          }
        }
      }
      ll_popup(thePopup);
      document.getElementById("xPersonAssignedTo_select").value ='` + assignTo + `';
      changeAssignment($F('xCategory'),$F('xPersonAssignedTo_select'));
      $jq('#cboxLoadedContent > div > div > button.btn.theme.nofloat').click();
    }
    timeoutID = window.setTimeout(theLive, 2000);
    `

    document.body.append(addLiveLookup);
    function assignTicketTo(){
      switch (message.assignTo) {
        case 'Aaron Mier':
          assignTo = '517';
          break;
          case 'Ben Gorton':
            assignTo = '685';
            break;
            case 'Gene McGovern':
              assignTo = '630';
              break;
              case 'Matt McKirgan':
                assignTo = '686';
                break;
                case 'Shane Fiek':
                  assignTo = '12';
                  break;
        default:
      }
    }
    function subscribeTicketTo(){
      subingTo = 0;
      nameList = [
        {
          "number": 351,
          "name": "*** Dont Use Yet - PW eMAC Support"
        },
        {
          "number": 637,
          "name": "Aaron Fairbairn"
        },
        {
          "number": 517,
          "name": "Aaron Mier"
        },
        {
          "number": 339,
          "name": "Aaron Pauley"
        },
        {
          "number": 343,
          "name": "Aaron Tekle"
        },
        {
          "number": 793,
          "name": "Abigail Schulz"
        },
        {
          "number": 308,
          "name": "Access NOC"
        },
        {
          "number": 24,
          "name": "Adam Baird"
        },
        {
          "number": 921,
          "name": "Adam King"
        },
        {
          "number": 591,
          "name": "Adam Raley"
        },
        {
          "number": 7,
          "name": "Adam Thompson"
        },
        {
          "number": 563,
          "name": "Adekunle Sanni"
        },
        {
          "number": 568,
          "name": "Adesoji Adedeji"
        },
        {
          "number": 307,
          "name": "Advanced Tech"
        },
        {
          "number": 328,
          "name": "Advanced Operations Engineering"
        },
        {
          "number": 644,
          "name": "Aime Ishimwe"
        },
        {
          "number": 622,
          "name": "Akixi SME Queue"
        },
        {
          "number": 248,
          "name": "Alan Marudas"
        },
        {
          "number": 180,
          "name": "Alberto Valencia"
        },
        {
          "number": 313,
          "name": "Alex Burns"
        },
        {
          "number": 389,
          "name": "Alex Katwaroo"
        },
        {
          "number": 573,
          "name": "Alex Laporte"
        },
        {
          "number": 462,
          "name": "Alex Rivera"
        },
        {
          "number": 856,
          "name": "Alex Walker"
        },
        {
          "number": 390,
          "name": "Alfred gonzalez"
        },
        {
          "number": 621,
          "name": "Alfred Lopez"
        },
        {
          "number": 621,
          "name": "Alfie Lopez"
        },
        {
          "number": 86,
          "name": "Alicia Wendel"
        },
        {
          "number": 410,
          "name": "Alif Jegham"
        },
        {
          "number": 176,
          "name": "Allison Alfano"
        },
        {
          "number": 821,
          "name": "Allison Liwosz"
        },
        {
          "number": 309,
          "name": "Alvin Walker"
        },
        {
          "number": 687,
          "name": "Aly Coundoul"
        },
        {
          "number": 495,
          "name": "Ameer Al-Taweel"
        },
        {
          "number": 368,
          "name": "Amy Dickey"
        },
        {
          "number": 543,
          "name": "Andrew Cofield"
        },
        {
          "number": 290,
          "name": "Andrew Fields"
        },
        {
          "number": 468,
          "name": "Andrew Kersh"
        },
        {
          "number": 595,
          "name": "Andrew Mosher"
        },
        {
          "number": 542,
          "name": "Andrew Webb"
        },
        {
          "number": 427,
          "name": "Angela Sanchez"
        },
        {
          "number": 365,
          "name": "Annette Vazquez"
        },
        {
          "number": 359,
          "name": "Anthony DePasquale"
        },
        {
          "number": 566,
          "name": "Anthony Foli"
        },
        {
          "number": 402,
          "name": "Anthony Incatasciato"
        },
        {
          "number": 923,
          "name": "Anthony Merendino"
        },
        {
          "number": 619,
          "name": "Anthony Tassotti"
        },
        {
          "number": 869,
          "name": "Antoine Burton"
        },
        {
          "number": 682,
          "name": "Aparna Sankuappan"
        },
        {
          "number": 114,
          "name": "API USER"
        },
        {
          "number": 409,
          "name": "Aqeel Shahid"
        },
        {
          "number": 828,
          "name": "Arnold Evans"
        },
        {
          "number": 777,
          "name": "Arya Divakaran"
        },
        {
          "number": 295,
          "name": "Arya Godard"
        },
        {
          "number": 521,
          "name": "Ashley Otremba"
        },
        {
          "number": 917,
          "name": "Austin Bass"
        },
        {
          "number": 669,
          "name": "Austin Percic"
        },
        {
          "number": 466,
          "name": "Austin Roberts"
        },
        {
          "number": 71,
          "name": "Automation User"
        },
        {
          "number": 931,
          "name": "Bao Le"
        },
        {
          "number": 15,
          "name": "Barry Jackson"
        },
        {
          "number": 99,
          "name": "Ben Eshleman"
        },
        {
          "number": 685,
          "name": "Ben Gorton"
        },
        {
          "number": 488,
          "name": "Bendy Megie"
        },
        {
          "number": 794,
          "name": "Benjamin Ascencio"
        },
        {
          "number": 391,
          "name": "Billy Miguel"
        },
        {
          "number": 730,
          "name": "Brad McMillan"
        },
        {
          "number": 896,
          "name": "Brad Osby"
        },
        {
          "number": 49,
          "name": "Brett Procop"
        },
        {
          "number": 748,
          "name": "Brian Aubry"
        },
        {
          "number": 918,
          "name": "Brian Clementi"
        },
        {
          "number": 168,
          "name": "Brian Kethley"
        },
        {
          "number": 288,
          "name": "Brian Stoneberger"
        },
        {
          "number": 380,
          "name": "Brian Williams"
        },
        {
          "number": 499,
          "name": "Brian Winsett"
        },
        {
          "number": 508,
          "name": "Bryce Hayes"
        },
        {
          "number": 182,
          "name": "Bryce Sherman"
        },
        {
          "number": 161,
          "name": "Cam Callender"
        },
        {
          "number": 592,
          "name": "Cameron Bell"
        },
        {
          "number": 175,
          "name": "Cameron Hutson"
        },
        {
          "number": 130,
          "name": "Carl Welch"
        },
        {
          "number": 377,
          "name": "Carlos Jimenez"
        },
        {
          "number": 817,
          "name": "Carlos Quintanilla"
        },
        {
          "number": 845,
          "name": "charisse Jones"
        },
        {
          "number": 870,
          "name": "Charles Lumia"
        },
        {
          "number": 603,
          "name": "Chris DeSanti"
        },
        {
          "number": 392,
          "name": "Chris Farrell"
        },
        {
          "number": 397,
          "name": "Chris Marrone"
        },
        {
          "number": 143,
          "name": "Chris Trubl"
        },
        {
          "number": 605,
          "name": "Christian Roach"
        },
        {
          "number": 897,
          "name": "Christine Thien-Romero"
        },
        {
          "number": 847,
          "name": "Christopher Altenbach"
        },
        {
          "number": 470,
          "name": "Christopher Cochran"
        },
        {
          "number": 548,
          "name": "Christopher Jones"
        },
        {
          "number": 549,
          "name": "Christopher King"
        },
        {
          "number": 935,
          "name": "Christopher Stroud"
        },
        {
          "number": 909,
          "name": "Christopher Urbanek"
        },
        {
          "number": 232,
          "name": "Chuck Mullers"
        },
        {
          "number": 544,
          "name": "Clay Beall"
        },
        {
          "number": 526,
          "name": "Clint McAfee"
        },
        {
          "number": 405,
          "name": "Close Monitor"
        },
        {
          "number": 570,
          "name": "Clyde Ames"
        },
        {
          "number": 799,
          "name": "Colin Brown"
        },
        {
          "number": 709,
          "name": "Colton Morris"
        },
        {
          "number": 742,
          "name": "Connor Hoffman"
        },
        {
          "number": 447,
          "name": "Corey Seburg"
        },
        {
          "number": 436,
          "name": "Courtney Douglas"
        },
        {
          "number": 903,
          "name": "CPE Troubleshooting Queue"
        },
        {
          "number": 95,
          "name": "Credit & Collections"
        },
        {
          "number": 791,
          "name": "CSR Team"
        },
        {
          "number": 893,
          "name": "CSS Queue"
        },
        {
          "number": 729,
          "name": "CSS Enterprise Team"
        },
        {
          "number": 633,
          "name": "Daffydd Williams"
        },
        {
          "number": 925,
          "name": "Dan Berry"
        },
        {
          "number": 119,
          "name": "Danielle David"
        },
        {
          "number": 265,
          "name": "Danielle Gaddis"
        },
        {
          "number": 381,
          "name": "David Flores"
        },
        {
          "number": 871,
          "name": "David Gamsby"
        },
        {
          "number": 934,
          "name": "David Hunsdon"
        },
        {
          "number": 723,
          "name": "David Kennedy"
        },
        {
          "number": 463,
          "name": "David Phelps"
        },
        {
          "number": 674,
          "name": "David Ruelas"
        },
        {
          "number": 764,
          "name": "David Williams"
        },
        {
          "number": 805,
          "name": "David Winters"
        },
        {
          "number": 872,
          "name": "David Zielinski"
        },
        {
          "number": 759,
          "name": "Dawn Chambers"
        },
        {
          "number": 197,
          "name": "Dawn Howard"
        },
        {
          "number": 437,
          "name": "Dennis Bangura"
        },
        {
          "number": 478,
          "name": "Dennis King"
        },
        {
          "number": 298,
          "name": "Dennis Rivera"
        },
        {
          "number": 853,
          "name": "Derek Smith"
        },
        {
          "number": 238,
          "name": "Diana Bidak"
        },
        {
          "number": 319,
          "name": "Dilxon Rodriguez"
        },
        {
          "number": 262,
          "name": "Dinah Taylor"
        },
        {
          "number": 873,
          "name": "Dioris Betances"
        },
        {
          "number": 76,
          "name": "Doug Milliron"
        },
        {
          "number": 835,
          "name": "Dulce Aguirre"
        },
        {
          "number": 714,
          "name": "Dustin Goss"
        },
        {
          "number": 902,
          "name": "Dylan Klemuk-San Martin"
        },
        {
          "number": 902,
          "name": "Dylan Klemuk"
        },
        {
          "number": 159,
          "name": "Edgardo Baltazar"
        },
        {
          "number": 840,
          "name": "Edson Segura"
        },
        {
          "number": 874,
          "name": "Edward Rupp"
        },
        {
          "number": 678,
          "name": "Edwin Roman"
        },
        {
          "number": 600,
          "name": "Elisabeth Heath"
        },
        {
          "number": 741,
          "name": "Elizabeth Goddard"
        },
        {
          "number": 677,
          "name": "Eloehi Omiyi"
        },
        {
          "number": 374,
          "name": "Emily Rosenberry"
        },
        {
          "number": 174,
          "name": "Emma Harleston"
        },
        {
          "number": 924,
          "name": "Emmanuel Tejuosho"
        },
        {
          "number": 820,
          "name": "Eric Kozicki"
        },
        {
          "number": 509,
          "name": "Eric Whitaker"
        },
        {
          "number": 210,
          "name": "Erica Wilkins"
        },
        {
          "number": 438,
          "name": "Erik Escalante"
        },
        {
          "number": 733,
          "name": "Executive Escalation Calls"
        },
        {
          "number": 824,
          "name": "Fernando Romero"
        },
        {
          "number": 850,
          "name": "Fernando Salazar"
        },
        {
          "number": 415,
          "name": "Finance - Disco / ETL Requests"
        },
        {
          "number": 875,
          "name": "Frantz Louis-Jacques"
        },
        {
          "number": 766,
          "name": "Fred Rung"
        },
        {
          "number": 623,
          "name": "French Support"
        },
        {
          "number": 364,
          "name": "Gabriel Guzman"
        },
        {
          "number": 561,
          "name": "Gabrielle Tawil"
        },
        {
          "number": 337,
          "name": "Garrett Stevens-Palmer"
        },
        {
          "number": 630,
          "name": "Gene McGovern"
        },
        {
          "number": 68,
          "name": "Geoff Hester"
        },
        {
          "number": 285,
          "name": "George Garcia"
        },
        {
          "number": 347,
          "name": "George Hales"
        },
        {
          "number": 838,
          "name": "Gerardo Pedraza"
        },
        {
          "number": 560,
          "name": "Glenn Knight"
        },
        {
          "number": 403,
          "name": "Glenn Lacy"
        },
        {
          "number": 93,
          "name": "Greg Hardy"
        },
        {
          "number": 393,
          "name": "Gregory Germain"
        },
        {
          "number": 367,
          "name": "Gregory Mann"
        },
        {
          "number": 681,
          "name": "Guoliang Cao"
        },
        {
          "number": 394,
          "name": "Hal Gullo"
        },
        {
          "number": 876,
          "name": "Hassan Elatab"
        },
        {
          "number": 556,
          "name": "Heather Wightman"
        },
        {
          "number": 673,
          "name": "Hedayat Raastin"
        },
        {
          "number": 581,
          "name": "Howard Yigdal"
        },
        {
          "number": 814,
          "name": "Ibrahim Thompson"
        },
        {
          "number": 798,
          "name": "inContact"
        },
        {
          "number": 412,
          "name": "Isai Vieyra"
        },
        {
          "number": 340,
          "name": "Issa Noorestani"
        },
        {
          "number": 83,
          "name": "IT Admin"
        },
        {
          "number": 287,
          "name": "J-Curve Voice Provisioning"
        },
        {
          "number": 700,
          "name": "Jacob Pruett"
        },
        {
          "number": 816,
          "name": "Jacob Raiford"
        },
        {
          "number": 796,
          "name": "Jacqueline Costello"
        },
        {
          "number": 796,
          "name": "Jacquie Costello"
        },
        {
          "number": 859,
          "name": "Jagadeson Sugumaran"
        },
        {
          "number": 382,
          "name": "Jaime Stark"
        },
        {
          "number": 535,
          "name": "Jake Stetson"
        },
        {
          "number": 760,
          "name": "Jake Vanderveer"
        },
        {
          "number": 333,
          "name": "Jamal Abbas"
        },
        {
          "number": 383,
          "name": "James Ellerbe"
        },
        {
          "number": 724,
          "name": "James Van Hoff"
        },
        {
          "number": 877,
          "name": "James Walsh"
        },
        {
          "number": 483,
          "name": "James F Henry"
        },
        {
          "number": 593,
          "name": "Jamie Fields"
        },
        {
          "number": 72,
          "name": "Janelle Pera"
        },
        {
          "number": 140,
          "name": "Jared Rieman"
        },
        {
          "number": 878,
          "name": "Jaroslaw Sakowicz"
        },
        {
          "number": 855,
          "name": "Jason Battaglia"
        },
        {
          "number": 399,
          "name": "Jason Caponetto"
        },
        {
          "number": 620,
          "name": "Jason Domm"
        },
        {
          "number": 731,
          "name": "Jason Keesecker"
        },
        {
          "number": 473,
          "name": "Jason Sucaciu"
        },
        {
          "number": 13,
          "name": "JCurve Support 1"
        },
        {
          "number": 582,
          "name": "Jeanette Pagano"
        },
        {
          "number": 736,
          "name": "Jeff Bruxvoort"
        },
        {
          "number": 384,
          "name": "Jeff Casper"
        },
        {
          "number": 135,
          "name": "Jeff Enteman"
        },
        {
          "number": 797,
          "name": "Jeff Lee"
        },
        {
          "number": 417,
          "name": "Jeffrey Beringer"
        },
        {
          "number": 879,
          "name": "Jeffrey Nation"
        },
        {
          "number": 357,
          "name": "Jeffrey Pilgrim"
        },
        {
          "number": 865,
          "name": "jeffrey Robienczak"
        },
        {
          "number": 701,
          "name": "Jeramie Raggio"
        },
        {
          "number": 194,
          "name": "Jeremy Bias"
        },
        {
          "number": 812,
          "name": "Jerry Owens"
        },
        {
          "number": 813,
          "name": "Jesse Salazar"
        },
        {
          "number": 498,
          "name": "Jessica Choe"
        },
        {
          "number": 745,
          "name": "Jie Zhang"
        },
        {
          "number": 846,
          "name": "Jinesh Barevadia"
        },
        {
          "number": 429,
          "name": "Joanne Padula"
        },
        {
          "number": 195,
          "name": "Joel Ellsworth"
        },
        {
          "number": 439,
          "name": "Joel Pearlman"
        },
        {
          "number": 244,
          "name": "Joey Magee"
        },
        {
          "number": 688,
          "name": "John Alappat"
        },
        {
          "number": 491,
          "name": "John Howard"
        },
        {
          "number": 268,
          "name": "John Jenkins"
        },
        {
          "number": 586,
          "name": "John McConnell"
        },
        {
          "number": 263,
          "name": "John Morey"
        },
        {
          "number": 768,
          "name": "Joi Staten"
        },
        {
          "number": 296,
          "name": "Jon Murray"
        },
        {
          "number": 825,
          "name": "Jonathan Brewington"
        },
        {
          "number": 719,
          "name": "Jonathan Davidson"
        },
        {
          "number": 108,
          "name": "Jonathan Lewis"
        },
        {
          "number": 809,
          "name": "Jonathan Rundle"
        },
        {
          "number": 559,
          "name": "Jonathan Thomas"
        },
        {
          "number": 725,
          "name": "Jong Kyu Kim"
        },
        {
          "number": 335,
          "name": "Joon Choi"
        },
        {
          "number": 938,
          "name": "Jose Espinoza"
        },
        {
          "number": 784,
          "name": "Joseph Bouley"
        },
        {
          "number": 550,
          "name": "Joseph Dancs"
        },
        {
          "number": 587,
          "name": "Joseph Hernandez"
        },
        {
          "number": 843,
          "name": "Joshua Clinebell"
        },
        {
          "number": 588,
          "name": "Joshua Sanchez"
        },
        {
          "number": 243,
          "name": "Juan Garibay"
        },
        {
          "number": 866,
          "name": "Julian Cabral-Ramirez"
        },
        {
          "number": 780,
          "name": "Junaid HabibUllah"
        },
        {
          "number": 932,
          "name": "Justus Brown"
        },
        {
          "number": 676,
          "name": "Kamoo Cortes"
        },
        {
          "number": 589,
          "name": "Karen Angel"
        },
        {
          "number": 743,
          "name": "Karen McKay"
        },
        {
          "number": 276,
          "name": "Karina Kevorkov"
        },
        {
          "number": 316,
          "name": "Karl Jurgens"
        },
        {
          "number": 169,
          "name": "Karl Putland"
        },
        {
          "number": 913,
          "name": "Kathleen Sullivan"
        },
        {
          "number": 373,
          "name": "Kathy Minervini"
        },
        {
          "number": 553,
          "name": "Katya Makarov"
        },
        {
          "number": 98,
          "name": "Kavanas, Christopher"
        },
        {
          "number": 213,
          "name": "Keith Martin"
        },
        {
          "number": 626,
          "name": "Kevin Chebo"
        },
        {
          "number": 880,
          "name": "Kevin Dancs"
        },
        {
          "number": 67,
          "name": "Kevin Knoll"
        },
        {
          "number": 301,
          "name": "Kevin Lamb"
        },
        {
          "number": 418,
          "name": "Kim Stoddard"
        },
        {
          "number": 579,
          "name": "Kimberly Jones"
        },
        {
          "number": 624,
          "name": "Kit Haden"
        },
        {
          "number": 425,
          "name": "Ko Forte"
        },
        {
          "number": 848,
          "name": "konstantin Vaysbeyn"
        },
        {
          "number": 484,
          "name": "Korey Carr"
        },
        {
          "number": 92,
          "name": "Kris Thornton"
        },
        {
          "number": 430,
          "name": "Kristi Poehls"
        },
        {
          "number": 534,
          "name": "Kumudu Suriyaarachchi"
        },
        {
          "number": 728,
          "name": "Kyle Booth"
        },
        {
          "number": 708,
          "name": "Kyle Burke"
        },
        {
          "number": 664,
          "name": "Lance Tamchin"
        },
        {
          "number": 116,
          "name": "Larry Abare"
        },
        {
          "number": 35,
          "name": "Larry Low"
        },
        {
          "number": 516,
          "name": "Latea Allen"
        },
        {
          "number": 639,
          "name": "Latea Staton"
        },
        {
          "number": 209,
          "name": "Latifa Kohout"
        },
        {
          "number": 575,
          "name": "Lauren Jackson"
        },
        {
          "number": 356,
          "name": "Lauren Pylant"
        },
        {
          "number": 844,
          "name": "Leann Griller"
        },
        {
          "number": 74,
          "name": "Level 2 User"
        },
        {
          "number": 892,
          "name": "Lisa Bates"
        },
        {
          "number": 881,
          "name": "Louis Ocampo"
        },
        {
          "number": 331,
          "name": "Luis Hoyos"
        },
        {
          "number": 82,
          "name": "MACD Request"
        },
        {
          "number": 552,
          "name": "Madison Morones"
        },
        {
          "number": 907,
          "name": "Manojkumar ChandraSekaran"
        },
        {
          "number": 121,
          "name": "Marc Bergman"
        },
        {
          "number": 882,
          "name": "Marc Gagnon"
        },
        {
          "number": 236,
          "name": "Marco Sandoval"
        },
        {
          "number": 282,
          "name": "Marcus Cole"
        },
        {
          "number": 758,
          "name": "Marcus Winner"
        },
        {
          "number": 326,
          "name": "Mark Barrett"
        },
        {
          "number": 372,
          "name": "Mark Bland"
        },
        {
          "number": 158,
          "name": "Marsalis Lesure"
        },
        {
          "number": 502,
          "name": "Martin Jewell"
        },
        {
          "number": 883,
          "name": "Martin Rogers"
        },
        {
          "number": 864,
          "name": "Mary Ann Csizmadia"
        },
        {
          "number": 490,
          "name": "Matt Abatemarco"
        },
        {
          "number": 717,
          "name": "Matt Beard"
        },
        {
          "number": 831,
          "name": "Matt Kirbos"
        },
        {
          "number": 686,
          "name": "Matt McKirgan"
        },
        {
          "number": 894,
          "name": "Matthew Miller"
        },
        {
          "number": 894,
          "name": "Matt Miller"
        },
        {
          "number": 915,
          "name": "Matt Ryan"
        },
        {
          "number": 401,
          "name": "Matteo Giordano"
        },
        {
          "number": 884,
          "name": "Matthew Cox"
        },
        {
          "number": 348,
          "name": "Matthew McCarthy"
        },
        {
          "number": 489,
          "name": "Matthew Ratcliff"
        },
        {
          "number": 385,
          "name": "Matthew Riley"
        },
        {
          "number": 192,
          "name": "Matthew Rinkeviczie"
        },
        {
          "number": 914,
          "name": "Mauro Oliveira"
        },
        {
          "number": 642,
          "name": "Max Calvo"
        },
        {
          "number": 133,
          "name": "Max Dominguez"
        },
        {
          "number": 386,
          "name": "Melissa Daneman"
        },
        {
          "number": 583,
          "name": "Meredith Price"
        },
        {
          "number": 645,
          "name": "Mian Mamy"
        },
        {
          "number": 212,
          "name": "Michael Clark"
        },
        {
          "number": 461,
          "name": "Michael Harris"
        },
        {
          "number": 576,
          "name": "Michael Hernandez"
        },
        {
          "number": 120,
          "name": "Michael Kranick"
        },
        {
          "number": 898,
          "name": "Michael Miller"
        },
        {
          "number": 315,
          "name": "Michael Paras"
        },
        {
          "number": 450,
          "name": "Michael Suleski"
        },
        {
          "number": 886,
          "name": "Michael Torres"
        },
        {
          "number": 454,
          "name": "Michael E.S. Sonier"
        },
        {
          "number": 424,
          "name": "Michelle Park"
        },
        {
          "number": 715,
          "name": "Mid- Market"
        },
        {
          "number": 857,
          "name": "Mike De La Victoria"
        },
        {
          "number": 493,
          "name": "Mike Lill"
        },
        {
          "number": 787,
          "name": "Mike Porter"
        },
        {
          "number": 545,
          "name": "Mike Thomas"
        },
        {
          "number": 860,
          "name": "Mithun Prabhu"
        },
        {
          "number": 567,
          "name": "Muhammad Ali"
        },
        {
          "number": 916,
          "name": "Muhammad Irfan"
        },
        {
          "number": 842,
          "name": "Muzakkir Ahmed"
        },
        {
          "number": 683,
          "name": "Nandita Yadav"
        },
        {
          "number": 746,
          "name": "Nathan Goldstein"
        },
        {
          "number": 757,
          "name": "Nathaniel Clements"
        },
        {
          "number": 396,
          "name": "Navinder Singh"
        },
        {
          "number": 761,
          "name": "NetCool Monitoring"
        },
        {
          "number": 239,
          "name": "Network Engineering"
        },
        {
          "number": 249,
          "name": "New DID Tickets"
        },
        {
          "number": 737,
          "name": "Nicholas Picciolo"
        },
        {
          "number": 641,
          "name": "Nick Evans"
        },
        {
          "number": 455,
          "name": "Nick Koons"
        },
        {
          "number": 854,
          "name": "Nick Luiten"
        },
        {
          "number": 936,
          "name": "Nikki Pabon"
        },
        {
          "number": 851,
          "name": "Nina Hunter"
        },
        {
          "number": 775,
          "name": "Nirmal.Loganathan Loganathan"
        },
        {
          "number": 779,
          "name": "nishith narayanan"
        },
        {
          "number": 823,
          "name": "Nitesh Bhadauria"
        },
        {
          "number": 815,
          "name": "Nykolas James"
        },
        {
          "number": 555,
          "name": "Pam Englund"
        },
        {
          "number": 19,
          "name": "Pam Mathis"
        },
        {
          "number": 58,
          "name": "Patrick Beatty"
        },
        {
          "number": 20,
          "name": "Patrick Etheridge"
        },
        {
          "number": 778,
          "name": "pavithra girirajanna"
        },
        {
          "number": 284,
          "name": "Payton Garcia"
        },
        {
          "number": 927,
          "name": "Perry Robinson"
        },
        {
          "number": 609,
          "name": "Peter Fabian"
        },
        {
          "number": 810,
          "name": "Philip Gibson"
        },
        {
          "number": 698,
          "name": "Pravin Pratap"
        },
        {
          "number": 818,
          "name": "Priscilla Grainger"
        },
        {
          "number": 162,
          "name": "Project Managers"
        },
        {
          "number": 142,
          "name": "Provisioning - Data"
        },
        {
          "number": 145,
          "name": "Provisioning - Telco"
        },
        {
          "number": 863,
          "name": "Pruthviraj Dhananjay Chavan"
        },
        {
          "number": 522,
          "name": "PW Escalations"
        },
        {
          "number": 274,
          "name": "PW VIP Support"
        },
        {
          "number": 366,
          "name": "Quality Assurance"
        },
        {
          "number": 887,
          "name": "Rachel Feuerstein"
        },
        {
          "number": 858,
          "name": "Rafal Glaz"
        },
        {
          "number": 781,
          "name": "Rahime Lala"
        },
        {
          "number": 920,
          "name": "Rakesh Manjunatha Jain"
        },
        {
          "number": 795,
          "name": "Ralph Chance"
        },
        {
          "number": 404,
          "name": "Ralph Spiotta"
        },
        {
          "number": 519,
          "name": "Ramon Sy"
        },
        {
          "number": 908,
          "name": "Ranjith Raman"
        },
        {
          "number": 376,
          "name": "Raul Ted Mier"
        },
        {
          "number": 803,
          "name": "Realogy MAC Queue"
        },
        {
          "number": 247,
          "name": "Rediatu Lessanework"
        },
        {
          "number": 211,
          "name": "Reggie Garner"
        },
        {
          "number": 136,
          "name": "Revenue Assurance"
        },
        {
          "number": 441,
          "name": "Richard Caperon"
        },
        {
          "number": 324,
          "name": "Rick Delgado"
        },
        {
          "number": 597,
          "name": "Rick Reid"
        },
        {
          "number": 657,
          "name": "Rob Dibenedetto"
        },
        {
          "number": 469,
          "name": "Robert Goddard"
        },
        {
          "number": 448,
          "name": "Robert Lowman"
        },
        {
          "number": 257,
          "name": "Robert Pank"
        },
        {
          "number": 267,
          "name": "Rochelle Brown"
        },
        {
          "number": 515,
          "name": "Roland Ochoa"
        },
        {
          "number": 352,
          "name": "Roli Points"
        },
        {
          "number": 767,
          "name": "Ronald Ippolito"
        },
        {
          "number": 413,
          "name": "Ruben Candelaria"
        },
        {
          "number": 895,
          "name": "Rusty Hoge"
        },
        {
          "number": 801,
          "name": "Sabrina Susuras"
        },
        {
          "number": 640,
          "name": "Sakun Pradhan"
        },
        {
          "number": 198,
          "name": "Sales Engineer"
        },
        {
          "number": 203,
          "name": "Sales GM"
        },
        {
          "number": 922,
          "name": "Salvatore Amato"
        },
        {
          "number": 338,
          "name": "Samantha Coston"
        },
        {
          "number": 919,
          "name": "Samer Khaled"
        },
        {
          "number": 37,
          "name": "Sanjay Srinivasan"
        },
        {
          "number": 690,
          "name": "Sanyasi Yadla"
        },
        {
          "number": 771,
          "name": "saravanakumar sambamoorthy"
        },
        {
          "number": 910,
          "name": "Satharak Selvaraj"
        },
        {
          "number": 204,
          "name": "Scott Priemer"
        },
        {
          "number": 465,
          "name": "Scott Roberts"
        },
        {
          "number": 271,
          "name": "Scott Sharples"
        },
        {
          "number": 38,
          "name": "Scott Stoddard"
        },
        {
          "number": 242,
          "name": "Sean Middleton"
        },
        {
          "number": 186,
          "name": "Sebastian M Rede"
        },
        {
          "number": 416,
          "name": "Service Delivery - Disco / ETL Requests"
        },
        {
          "number": 891,
          "name": "Service Delivery Sup/Mgr - Disco / ETL Requests"
        },
        {
          "number": 230,
          "name": "Seth Elwonger"
        },
        {
          "number": 930,
          "name": "Shalease Harris"
        },
        {
          "number": 12,
          "name": "Shane Fiek"
        },
        {
          "number": 322,
          "name": "Shane Smith"
        },
        {
          "number": 564,
          "name": "Shareef El-Amin"
        },
        {
          "number": 387,
          "name": "Shawn Grimm"
        },
        {
          "number": 833,
          "name": "Shefalee Shah"
        },
        {
          "number": 822,
          "name": "Shivraj Hiremath"
        },
        {
          "number": 349,
          "name": "Simon Weaver"
        },
        {
          "number": 375,
          "name": "SMB CSA"
        },
        {
          "number": 776,
          "name": "Srikamatchi Sreenivasan"
        },
        {
          "number": 565,
          "name": "Stacy Collins"
        },
        {
          "number": 699,
          "name": "Stefan Curry"
        },
        {
          "number": 235,
          "name": "Steve Hamvas"
        },
        {
          "number": 22,
          "name": "Steve Lenhart"
        },
        {
          "number": 928,
          "name": "Steve Narro"
        },
        {
          "number": 668,
          "name": "Steven Metzger"
        },
        {
          "number": 584,
          "name": "Steven Randolph"
        },
        {
          "number": 671,
          "name": "Stormi Dangberg"
        },
        {
          "number": 868,
          "name": "Subhadeep reddy Buchupally"
        },
        {
          "number": 774,
          "name": "Sunder Veerasamy"
        },
        {
          "number": 684,
          "name": "Sunish Podiyan"
        },
        {
          "number": 214,
          "name": "Suonpisith Chhim"
        },
        {
          "number": 696,
          "name": "Suraj Kudale"
        },
        {
          "number": 147,
          "name": "Suzanne Ledo"
        },
        {
          "number": 172,
          "name": "Systems Engineering"
        },
        {
          "number": 346,
          "name": "Tajuana Selby"
        },
        {
          "number": 769,
          "name": "Tamilkumaran Vezhavendan"
        },
        {
          "number": 904,
          "name": "Tammy Green"
        },
        {
          "number": 906,
          "name": "Tasmere Petersen"
        },
        {
          "number": 628,
          "name": "Taylor Barrera"
        },
        {
          "number": 226,
          "name": "Taylor Pierce"
        },
        {
          "number": 428,
          "name": "Terrence Williams"
        },
        {
          "number": 861,
          "name": "Thea Rasmussen"
        },
        {
          "number": 899,
          "name": "Thomas Barton"
        },
        {
          "number": 546,
          "name": "Thomas Buscema"
        },
        {
          "number": 558,
          "name": "Thomas Lawless"
        },
        {
          "number": 937,
          "name": "Thomas Phillips"
        },
        {
          "number": 888,
          "name": "Thomas Schlund"
        },
        {
          "number": 123,
          "name": "Tom Melchionna"
        },
        {
          "number": 929,
          "name": "Travis Hill"
        },
        {
          "number": 629,
          "name": "Trent Diamond"
        },
        {
          "number": 716,
          "name": "Trent Herring"
        },
        {
          "number": 388,
          "name": "Tricia Rhodes"
        },
        {
          "number": 783,
          "name": "Troy Davis"
        },
        {
          "number": 456,
          "name": "Tyler Desaulniers"
        },
        {
          "number": 234,
          "name": "Tyler Owen"
        },
        {
          "number": 497,
          "name": "Tyrel Knudsen"
        },
        {
          "number": 154,
          "name": "Ujjval Karihaloo"
        },
        {
          "number": 905,
          "name": "Uttam Kumar"
        },
        {
          "number": 829,
          "name": "Venkata Rajesh Nedunuri"
        },
        {
          "number": 889,
          "name": "Victor Alave"
        },
        {
          "number": 819,
          "name": "Vimal Mahendiran"
        },
        {
          "number": 345,
          "name": "Vincent DePasquale"
        },
        {
          "number": 252,
          "name": "Voice Automation Team"
        },
        {
          "number": 231,
          "name": "Vonage NOC Holmdel"
        },
        {
          "number": 73,
          "name": "Vonage Premier Billing"
        },
        {
          "number": 14,
          "name": "Vonage Support 2"
        },
        {
          "number": 562,
          "name": "Wayne Saunders"
        },
        {
          "number": 832,
          "name": "Wendy Richardson"
        },
        {
          "number": 551,
          "name": "Wendy Steele"
        },
        {
          "number": 773,
          "name": "Wesley Porpatham"
        },
        {
          "number": 511,
          "name": "Zeus QA"
        },
        {
          "number": 912,
          "name": "Zeus Team"
        }
      ];
      for(i in nameList){
        let thename = nameList[i].name;
        let number = nameList[i].number;
        console.log(thename)
        if($.trim(message.subscribeTo.toUpperCase()) == $.trim(thename.toUpperCase())){
          subingTo = number;
        }
      }
      return subingTo
    }
  }else if(message.task =='insert sow'){
    var helpspotiFrame = document.querySelector(".ephox-hare-content-iframe");
      if(helpspotiFrame != null){
        sow = message.sow.replace(/\n/g, '<br/>');
          helpspotiFrame.contentDocument.body.innerHTML = '<strong>SOW:</strong></br>' + (message.services).join("</br>") + '</br></br>' + sow;
      }
  }
});
