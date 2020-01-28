var secondsHand = document.querySelector(".second");
var minutesHand = document.querySelector(".minute");
var hoursHand = document.querySelector(".hour");
var body = document.getElementsByTagName("BODY")[0];

var indicators = document.querySelectorAll(".indicator");

let previous = 0;
indicators.forEach(indicator => {
  indicator.style.transform = `rotateZ(${previous}deg)`;
  previous += 6;
});

function setDate() {
  var now = new Date();
  var seconds = now.getSeconds();
  var minutes = now.getMinutes();
  var hours = now.getHours();
  var secondsDegree = (seconds * 360) / 60 + 90;
  var minutesDegree = (minutes * 360) / 60 + 90;
  var hoursDegree = (hours * 360) / 12 + 90;
  secondsHand.style.transform = `rotate(${secondsDegree}deg)`;
  minutesHand.style.transform = `rotate(${minutesDegree}deg)`;
  hoursHand.style.transform = `rotate(${hoursDegree}deg)`;

  document.getElementById('time').innerHTML = (`${hours}:${minutes}`);

  changeBackground();
  function changeBackground() {
    if (hours >= 20 || hours < 5) {
      // LATE NIGHT
      body.style.background = "linear-gradient(0deg, rgba(255,228,196,1) 0%, rgba(0,87,94,1) 50%, rgba(0,0,0,1) 100%)";
    } else if (hours >= 12 && hours < 20) {
      // AFTERNOON
      body.style.background = "linear-gradient(0deg, rgba(245,77,0,1) 0%, rgba(255,226,0,1) 50%, rgba(0,236,255,1) 100%)";
    } else {
      // EARLY MORNING
      body.style.background = "linear-gradient(0deg, rgba(0,138,149,1) 0%, rgba(255,255,255,1) 100%)";
    }
  }
}

setInterval(setDate, 1000);
