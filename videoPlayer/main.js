const player = document.querySelector(".player");
const video = player.querySelector("video");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress_filled");
const playBtn = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player_slider");

console.log(video);

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateBtn() {
  playBtn.textContent = video.paused ? "⏵" : "⏸";
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateBtn);
video.addEventListener("pause", updateBtn);
playBtn.addEventListener("click", togglePlay);
skipButtons.forEach(button => button.addEventListener("click", skip));
ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));
ranges.forEach(range => range.addEventListener("mousemove", handleRangeUpdate));
video.addEventListener("timeupdate", handleProgress);
progress.addEventListener("click", scrub);
let mousedown = false;
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
progress.addEventListener("mousemove", e => mousedown && scrub(e));
