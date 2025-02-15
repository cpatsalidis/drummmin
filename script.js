window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key=${e.code}]`)
    const key = document.querySelector(`div[data-key=${e.code}]`)
    if (!audio) return
    console.log(audio)
    audio.play()
    audio.currentTime = 0
    key.classList.add('playing')

})