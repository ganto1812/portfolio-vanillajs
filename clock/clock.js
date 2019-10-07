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

  var text = document.querySelector(".text");
  changeBackground();
  function changeBackground() {
    if (hours >= 20 || hours < 5) {
      body.style.backgroundImage = "linear-gradient(darkblue, black)";
      text.style.color = "white";
      text.style.textShadow = "2px 2px 100px white";
    } else if (hours >= 12 && hours < 20) {
      body.style.backgroundImage = "linear-gradient(yellow, orange)";
    } else {
      body.style.backgroundImage = "linear-gradient(lightSkyBlue, white)";
    }
  }
}

setInterval(setDate, 1000);
