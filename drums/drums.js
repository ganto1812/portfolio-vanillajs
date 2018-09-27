
window.addEventListener('keydown', function(e) {
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    let playing = this.document.querySelector('.playing');
    if(playing !==null) {
        playing.classList.remove('playing');
    };
    if(!audio) return; //stop
    audio.currentTime = 0; //reset
    audio.play();
    key.classList.add('playing');
});

