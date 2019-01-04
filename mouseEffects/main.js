const hot = document.querySelector(".hot");
const text = hot.querySelector("h1");
const walk = 600;

function shadow(e) {
  const width = hot.offsetWidth;
  const height = hot.offsetHeight;
  let { offsetX: x, offsetY: y } = e;

  //normalize the offset inside the 'hot' class
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 red,
  ${-xWalk}px ${yWalk}px 0 orange,
  ${-xWalk}px ${-yWalk}px 0 darkRed,
  ${xWalk}px ${-yWalk}px 0 yellow`;
}

hot.addEventListener("mousemove", shadow);
