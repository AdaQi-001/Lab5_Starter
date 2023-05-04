// explore.js

// window.addEventListener('DOMContentLoaded', init);

// function init() {
//   // TODO
// }

const synth = window.speechSynthesis();

const inputTxt = document.querySelector('#explore textarea');
const voiceSelect = document.getElementById('voice-select');
const button_talk = document.querySelector('#explore button');

function populateVoiceList() {
  if (typeof speechSynthesis === 'undefined') {
    return;
  }
  const voices = speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += ' — DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}

populateVoiceList();
if (
  typeof speechSynthesis !== 'undefined' &&
  speechSynthesis.onvoiceschanged !== undefined
) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
