const blur_animation = document.querySelector('.blur-animation')
const loading_text = document.querySelector('.loading-text')

let textCounter = 0

function loadingAnimation(i) {
    if(i >= 0)
    {
        setTimeout( ()=> {
            blur_animation.style.filter = `blur(${i}px)`
            loading_text.style.opacity = `${i}%`
            loading_text.textContent = textCounter + '%'
            textCounter++
            loadingAnimation(i - 1)
        }, 20);
    }

}

loadingAnimation(100)