const keys = Array.from(document.querySelectorAll('.key'))

function removeTransistion(e) {
    if (e.propertyName !== 'transform') return
    e.target.classList.remove('playing')
}

keys.forEach(key => key.addEventListener('transitionend', removeTransistion))
window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key=${e.code}]`)
    const key = document.querySelector(`div[data-key=${e.code}]`)
    if (!audio) return
    audio.play()
    audio.currentTime = 0
    key.classList.add('playing')
})

