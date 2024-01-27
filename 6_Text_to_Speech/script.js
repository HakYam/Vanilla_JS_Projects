let speech = new SpeechSynthesisUtterance();

let voices = [];
let voicesSelected = document.querySelector('select');

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];  // Set the default voice

    voices.forEach((voice, i) => {
        voicesSelected.options[i] = new Option(voice.name, voice.name);  // Populate the select dropdown
    });
};

voicesSelected.addEventListener('change', () => {
    speech.voice = voices[voicesSelected.value];
})

document.querySelector('button').addEventListener('click', () => {
    speech.text = document.querySelector('textarea').value;
    speech.voice = voices.find(voice => voice.name === voicesSelected.value);  // Set the selected voice
    window.speechSynthesis.speak(speech);
});
