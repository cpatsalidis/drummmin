window.addEventListener('keydown', (e) => {
    console.log(e.code)
    const key = document.querySelector(`audio[data-key="${e.code}"]`)
})