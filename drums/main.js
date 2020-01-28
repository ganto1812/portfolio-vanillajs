window.addEventListener("keydown", playSound)

function playSound(e) {

  let keyCode;
  if (e.type === 'touchstart') {
    e.keyCode = e.currentTarget.dataset.key;
  } else {
    e.keyCode = e.keyCode;
  }

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  let playing = document.querySelector(".playing");
  if (playing !== null) {
    playing.classList.remove("playing");
  }
  if (!audio) return; //stop
  audio.currentTime = 0; //reset
  audio.play();
  key.classList.add("playing");
}

document.querySelectorAll('.key').forEach(item => {
  key = item.dataset.key;
  item.addEventListener('touchstart', playSound)
})

