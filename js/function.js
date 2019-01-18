function ClearTable() {
  document.getElementById('myBody').innerHTML = "";
}


function Counter() {
  setInterval(function () {
    ClearTable();
    TableCreator();
    console.log("Calling for Data");
  }, 240000);
}


function proof()  {
  var inc = document.getElementsByClassName("issues").innerHTML;



  if (inc != "") {
    let notification = new Notification("An error has occurred!", {
    body: 'Es ist ein Fehler Aufgetreten, bitte überprüfe die Fehlerbenachrichtigung! ',
    icon: '../icon128.png',
    tag: '1337',
    dir: 'auto',
    lang: 'de'
    });
  }
  else {
    return;
  }



}



function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function wertSetzen (Bezeichner, Wert, Verfall) {
  var jetzt = new Date();
  var Auszeit = new Date(jetzt.getTime() + Verfall);
  document.cookie = Bezeichner + "=" + Wert + "; expires=" + Auszeit.toGMTString() + ";";
}



function notifierCreate(){
  new Notification(
    'Achtung!', {
      icon: '../icon128.png',
      body: 'Es sind ein oder mehrere Server Ausgefallen oder in Wartung',
    });
}

function cleanRoom() {
  wertSetzen("Status_1", "Ausgefallen", 1000 * 60 * 60 * 24 * 0);
  wertSetzen("Status_2", "Wartungsarbeiten", 1000 * 60 * 60 * 24 * 0);
}


function goodMorningV(stat_name, name) {

  var status_name;
  var name;

    if (stat_name === "Ausgefallen") {

      wertSetzen("Status_1", "Ausgefallen", 1000 * 60 * 60 * 24 * 1);

    /*new Notification(
      'Warnung!', {
        icon: '../icon128.png',
        body: 'Der Server ' + name + ' ist Ausgefallen',
      });*/
    }

    else if (stat_name === "Wartungsarbeiten") {


      wertSetzen("Status_2", "Wartungsarbeiten", 1000 * 60 * 60 * 24 * 1);

      /*new Notification(
        'Wichtig!', {
          icon: '../icon128.png',
          body: 'Der Server ' + name + ' ist in Wartung',
        });*/
      }

      //console.log("Cookie: " + document.cookie);

  }

function ChangeMe() {
  setInterval(function () {
    let cookies = document.cookie;
    cookies.onchange = function(){
      notifierCreate();
      cleanRoom();
    }
  }, 10000);
}
