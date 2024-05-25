const soundsList = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

soundsList.forEach(sound => {
    const newBtn = document.createElement('button')
    newBtn.classList.add('btn')

    newBtn.innerHTML = sound

    newBtn.addEventListener('click', ()=> {
        stopSong()

        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(newBtn)
});

function stopSong() {
    soundsList.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0
    })
}