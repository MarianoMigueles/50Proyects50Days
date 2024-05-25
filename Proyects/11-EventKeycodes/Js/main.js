const key_Container = document.getElementById('key-container')
const press_Key = document.getElementById('press-key')



document.addEventListener('keydown', (event)=> {
    press_Key.style.display = 'none'

    key_Container.innerHTML = createNewKeyDiv(event)

    
})

function createNewKeyDiv(event) {
    const newDiv = `
    <div class="key">
    ${event.key === ' '? 'Space' : event.key}
    <small>event.key</small>
    </div>

    <div class="key">
    ${event.keyCode}
    <small>event.keyCode</small>
    </div>

    <div class="key">
    ${event.code}
    <small>event.code</small>
    </div>
    `;

    return newDiv;
}