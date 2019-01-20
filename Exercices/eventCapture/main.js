const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

function logText(e) {
  console.log(this.classList.value);
  //stop bubbling
  e.stopPropagation();
}

divs.forEach(div =>
  div.addEventListener("click", logText, {
    //start from the most parent
    // capture: true
  })
);

button.addEventListener(
  "click",
  () => {
    console.log("Click!");
  },
  {
    //only click it once
    once: true
  }
);
