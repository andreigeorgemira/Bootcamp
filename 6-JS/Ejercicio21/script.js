// Object containing the mapping of keys to sound files
const sounds = {
    'W': 'sounds/Darbuka1.mp3',
    'E': 'sounds/Darbuka2.mp3',
    'R': 'sounds/Darbuka3.mp3',
    'S': 'sounds/Darbuka4.mp3',
    'A': 'sounds/Darbuka5.mp3'
};

function playSound(sound) {
    const audio = new Audio(sound);
    audio.play();
}

document.querySelectorAll('.sound-button').forEach(button => {
    button.addEventListener('click', () => {
        const sound = sounds[button.id];
        playSound(sound);
    });
});

document.addEventListener('keydown', (event) => {
    const sound = sounds[event.key.toUpperCase()];
    if (sound) {
        playSound(sound);
    }
});
