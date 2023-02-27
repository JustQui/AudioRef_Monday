// colect all of the album covers into a variable
const   albumCovers = document.querySelectorAll("#album-art img"),
        theAudioEl = document.querySelector('audio'),
        playButton = document.querySelector('#playButton'),
        pauseButton = document.querySelector('#pauseButton'),
        rewindButton = document.querySelector('#rewindButton'),
        volSlider = document.querySelector ('#volumeControl');


// load the new audio source
function loadAudio() {
    let currentSrc = `audio/${this.dataset.trackref}.mp3`;
    // set the new audio source
    theAudioEl.src = currentSrc
    // load the new audio source
    theAudioEl.load();
    // play the new audio source
    playAudio();
}

// tell the audio element to play
function restartAudio() {
    theAudioEl.currentTime = 0;
}
function pauseAudio() {
    theAudioEl.pause();
}
function playAudio() {
    theAudioEl.play();
}

function setVolume() {
    // get the numeric value of the volume slider between 0 (min) and 100 (max)
    // that/s what the volume of the audio should be set to
    console.log(this.value);

    //divide the value by 100 to get a floating point number betweeen 0 and 1
    // and then set the audio element's volume level to match
    theAudioEl.volume = this.value/100;
}


// add event handling to the album covers (listen for a click event)
albumCovers.forEach(cover => cover.addEventListener('click', loadAudio));

// add event handling for the custom controls
playButton.addEventListener('click', playAudio);
pauseButton.addEventListener('click', pauseAudio);
rewindButton.addEventListener('click', restartAudio);

volSlider.addEventListener('change', setVolume);