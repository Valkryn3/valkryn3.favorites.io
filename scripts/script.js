var greeting = "Hello and welcome to my website! This site contains some of my favorite movies and games!";
var el = document.getElementById('greeting');
el.textContent = greeting;


(function() {
  var expiryMsg;
  var today;
  var elEnds;

  function offerExpires(today){
    var weekFromToday, day, date, month, year, dayNames, monthNames;
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    day = dayNames[weekFromToday.getDay()];
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();
    expiryMsg = 'Offer expires next ';
    expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ' ' + ')';
    return expiryMsg;
  }
  today = new Date();
  elEnds = document.getElementById('offerEnds');
  elEnds.innerHTML = offerExpires(today);
}());
