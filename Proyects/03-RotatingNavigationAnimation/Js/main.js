const btn_open_menu = document.getElementById('btn-burguer')
const btn_close_menu = document.getElementById('btn-close')
const container = document.querySelector('.container') 

btn_open_menu.addEventListener('click', ()=> container.classList.add('show-nav'))

btn_close_menu.addEventListener('click', ()=> container.classList.remove('show-nav'))