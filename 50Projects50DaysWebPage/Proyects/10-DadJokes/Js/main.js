const joke_Paragraft = document.getElementById('joke')
const btn_Get_Jokes = document.getElementById('btn-change-joke')

btn_Get_Jokes.addEventListener('click', generateNewJoke)

generateNewJoke()

async function generateNewJoke() {
    const opt = {
        headers: {
            Accept: 'application/json', 
        },
    }

    const res = await  fetch('https://icanhazdadjoke.com', opt)
    const data = await res.json()

    joke_Paragraft.innerHTML = data.joke
}
