const progress_bard = document.getElementById('progress-bard')
const btn_prev = document.getElementById('previous')
const btn_next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1;

btn_next.addEventListener('click', ()=> {
    currentActive++

    if(currentActive > circles.length)
    {
        currentActive = circles.length
    }

    updateProgress()
})

btn_prev.addEventListener('click', ()=> {
    currentActive--

    if(currentActive < 1)
    {
        currentActive = 1
    }

    updateProgress()
})

function updateProgress() {
    circles.forEach( (circle, idx) => {
        if(idx < currentActive)
        {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const circles_actives = document.querySelectorAll('.active')

    progress_bard.style.width = (circles_actives.length - 1) / (circles.length - 1) * (100 - 5) + '%';

    if(currentActive === 1)
    {
        btn_prev.disabled = true
    } else if(currentActive === circles.length) {
        btn_next.disabled = true
    } else {
        btn_prev.disabled = false
        btn_next.disabled = false
    }
}