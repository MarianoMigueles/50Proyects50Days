const textArea = document.querySelector('textarea');
const choiceContainer = document.getElementById('choice-container');

document.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter') {
        randomChoice();
    }
})

textArea.addEventListener('input', ()=> {
    const text = textArea.value;

    text.length == 0? choiceContainer.innerHTML = '' : null;

    choiceContainer.innerHTML = text.split(',').map((word, idx)=>{
        if(word.replace(/\s/g, '').length > 0) {
            return `<div id="choice-${idx}" class="choice">${word}</div>`;
        } else {
            return'';
        }
    }).join('');
})

function randomChoice() {
    const choices = document.querySelectorAll('.choice');

    choices.forEach((choice)=>{
        choice.classList.remove('selected');
    })

    let i = 0;
    let totalTime =  choices.length * 200;

    let intervalID = setInterval(()=>{  
        choices[i].classList.add('selected');
        setTimeout(()=> {    
            choices[i].classList.remove('selected');
        }, 10);    
        i === choices.length - 1? i = 0 : i++;    
    }, 100);

    setTimeout(()=>{
        clearInterval(intervalID);
        // Reset the index to avoid errors if the random option was 0
        i = -1; 

        choices.forEach((choice)=>{
            choice.classList.remove('selected');
        })

        let randomIndex = getRandomInt(0, choices.length - 1);
        choices[randomIndex].classList.add('selected');
    }, totalTime); 
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

