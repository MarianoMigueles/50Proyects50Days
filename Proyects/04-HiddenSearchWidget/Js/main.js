const searcher = document.getElementById('input-text')
const btn_searcher = document.getElementById('btn-search-icon')

btn_searcher.addEventListener('click', ()=> {
    if(searcher.classList.contains('active'))
    {
        searcher.classList.remove('active')
    } else {
        searcher.classList.add('active')
    }
})