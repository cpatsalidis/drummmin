# Keyboard Sound & Animation

## Overview
This project adds sound effects and visual feedback when specific keys are pressed on the keyboard. It listens for keydown events, plays corresponding audio, and applies a transition effect to highlight the pressed key.

## Features
- Plays a sound when a mapped key is pressed.
- Adds a visual animation effect when a key is pressed.
- Removes the animation after the transition ends.

## How It Works
1. **Listening for Key Presses:**
   - The script listens for `keydown` events on the window.
   - It checks if an audio element exists for the pressed key.
   - If found, it resets the audio time and plays it.
   - The corresponding key element receives a `playing` class for animation.

2. **Handling Transitions:**
   - When the transition ends, the `playing` class is removed to reset the visual effect.

## Example HTML Structure
```html
<div class="key" data-key="KeyA">A</div>
<audio data-key="KeyA" src="sounds/a.mp3"></audio>
```

## Notes
- Ensure your browser supports `event.code` as `keyCode` is deprecated.
- Sound files should be properly linked in the `audio` elements.

## License
This project is open-source and free to use for learning purposes.

