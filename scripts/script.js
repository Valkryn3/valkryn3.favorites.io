var greeting = "Hello and welcome to my website! This site contains some of my favorite movies and games!";
var el = document.getElementById('greeting');
el.textContent = greeting;

  var expiryMsg; 
  var today;
  var elEnds;
  function offerExpires(today) {
    var weekFromToday, day, date, month, year, dayNames, monthNames;

    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();

    expiryMsg = 'Offer expires next ';
    expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
    return expiryMsg;
  }

  today = new Date();
  elEnds = document.getElementById('offerEnds'); 
  elEnds.innerHTML = offerExpires(today);

var table = 3;
var operator = 'addition';
var i = 1;
var msg = "";

if (operator === 'addition'){
  while (i < 11) {
    msg += i + ' + ' table + ' = ' + (i + table) + '<br />';
    i++;
  }
} else {
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
}

var el = document.getElementById('blackboard');
el.innerHTML = msg;
