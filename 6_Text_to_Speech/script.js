document.addEventListener('DOMContentLoaded', function() {
let speech = new SpeechSynthesisUtterance();
        let voices = [];
        let voicesSelected = document.querySelector('#voice-selection');

        function populateVoices() {
            voices = window.speechSynthesis.getVoices();
            voicesSelected.innerHTML = ''; // Clear existing options

            voices.forEach((voice) => {
                let option = new Option(voice.name, voice.name);
                voicesSelected.appendChild(option);
            });
        }

        window.speechSynthesis.onvoiceschanged = populateVoices;

        // Initial call in case voices are already loaded
        populateVoices();

        document.querySelector('#speak-button').addEventListener('click', () => {
            speech.text = document.querySelector('#text-to-speak').value;
            let selectedVoiceName = voicesSelected.value;

            let selectedVoice = voices.find(voice => voice.name === selectedVoiceName);
            if (selectedVoice) {
                speech.voice = selectedVoice;
            } else {
                console.error("Selected voice not found in available voices");
            }

            window.speechSynthesis.cancel(); // Cancel any ongoing speech
            window.speechSynthesis.speak(speech); // Speak with the new voice
        });

    });