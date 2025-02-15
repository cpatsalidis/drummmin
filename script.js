// Select all elements with the class 'key' and convert NodeList to an array
const keys = Array.from(document.querySelectorAll('.key'));

// Function to remove the 'playing' class after the transition ends
function removeTransistion(e) {
    if (e.propertyName !== 'transform') return; // Only proceed if the property transitioned is 'transform'
    e.target.classList.remove('playing'); // Remove the 'playing' class
}

// Attach event listener to each key to remove transition effect once completed
keys.forEach(key => key.addEventListener('transitionend', removeTransistion));

// Listen for keydown events to play corresponding audio and apply animation
window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key=${e.code}]`); // Select audio element based on key pressed
    const key = document.querySelector(`div[data-key=${e.code}]`); // Select corresponding key div

    if (!audio) return; // Exit if no matching audio element exists

    audio.currentTime = 0; // Reset audio to start for rapid key presses
    audio.play(); // Play the audio

    key.classList.add('playing'); // Add 'playing' class for visual feedback
});
