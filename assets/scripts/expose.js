// expose.js

// window.addEventListener('DOMContentLoaded', init);

// function init() {
//   // TODO
// }

const selectImage = document.getElementById('horn-select');
const image = document.querySelector('#expose img');
const sound = document.querySelector('#expose audio');
const button = document.querySelector('button');
const vol = document.getElementById('volume');
const vol_img = document.querySelector('#volume-controls img');
const jsConfetti = new JSConfetti();

selectImage.addEventListener('change', change_img);
button.addEventListener('click', play_sound);
vol.addEventListener('input', change_volume);

function change_img() {
  const selectedValue = selectImage.value;
  if (selectedValue === 'air-horn') {
    image.src = 'assets/images/air-horn.svg';
    sound.src = 'assets/audio/air-horn.mp3';

  } else if (selectedValue === 'car-horn') {
    image.src = 'assets/images/car-horn.svg';
    sound.src = 'assets/audio/car-horn.mp3';

  } else if (selectedValue === 'party-horn') {
    image.src = 'assets/images/party-horn.svg';
    sound.src = 'assets/audio/party-horn.mp3';

  }
}

function play_sound() {
  sound.play();
  if (selectImage.value === 'party-horn') {
    jsConfetti.addConfetti();
  }
}

function change_volume() {
  const changedVolume = vol.value;
  sound.volume = changedVolume / 100;
  if (changedVolume < 1) {
    vol_img.src = 'assets/icons/volume-level-0.svg';
  } else if (changedVolume < 33) {
    vol_img.src = 'assets/icons/volume-level-1.svg';
  } else if (changedVolume < 67) {
    vol_img.src = 'assets/icons/volume-level-2.svg';
  } else {
    vol_img.src = 'assets/icons/volume-level-3.svg';
  }
}