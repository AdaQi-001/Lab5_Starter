// explore.js

// window.addEventListener('DOMContentLoaded', init);

// function init() {
//   // TODO
// }

const inputTxt = document.getElementById('text-to-speak');
const voiceSelect = document.getElementById('voice-select');
const button_talk = document.querySelector('button');


function populateVoiceList() {
  if (typeof speechSynthesis === 'undefined') {
    return;
  }
  const voices = window.speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    // console.log(option.textContent)

    option.setAttribute('value', voices[i].lang+voices[i].name);
    option.setAttribute('id', voices[i].name);

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





button_talk.addEventListener('click', readText);

function readText() {
  const textToRead = inputTxt.value;
  console.log(textToRead);
  const utterance = new SpeechSynthesisUtterance(textToRead); 
  // if (voiceSelect.value === 'select') {
  //   return;
  // }
  // utterance.voice = voiceSelect.value;
  // console.log(voice);
  // console.log(voiceSelect.value);
  const selectedOption = voiceSelect.selectedOptions[0];
  console.log(selectedOption);
  const voices = window.speechSynthesis.getVoices();
  for (let i = 0; i < voices.length; i ++) {
    if (voices[i].name === selectedOption.id) {
      utterance.voice = voices[i];
    }
  }
  window.speechSynthesis.speak(utterance);
}