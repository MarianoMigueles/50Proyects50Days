const btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {
    const x = e.pageX;
    const y = e.pageY;

    const btnTop = e.target.offsetTop;
    const btnLeft = e.target.offsetLeft;

    const xIncide = x - btnLeft;
    const yIncide = y - btnTop;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = `${yIncide}px`;
    circle.style.left = `${xIncide}px`;

    btn.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
});