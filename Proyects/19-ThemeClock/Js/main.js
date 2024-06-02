const hourClock = document.querySelector('.hour');
const minutesClock = document.querySelector('.minute');
const secondsClock = document.querySelector('.second');
const timeClock = document.querySelector('.time');
const dateClock = document.querySelector('.date');

const toggleTheme = document.getElementById('toggle-theme');
const clockImg = document.getElementById('clock');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggleTheme.addEventListener('click', (e) => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        e.target.innerText = 'Dark mode';
        clockImg.classList.remove('light');
    } else {
        document.documentElement.classList.add('dark');
        e.target.innerText = 'Light mode';
        clockImg.classList.add('light');
    }
});

function updateTime() {
    const time = new Date();
    const hours = time.getHours();
    const hoursForClock = hours >= 12? hours % 12 : hours;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const date = time.getDate();
    const day = time.getDay();
    const month = time.getMonth();
    const amPm = hours >= 12? 'PM' : 'AM';

    hourClock.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`;
    secondsClock.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;
    minutesClock.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;

    timeClock.innerHTML = `${hoursForClock === 0? '12' : hoursForClock}:${minutes < 10? '0' : ''}${minutes} ${amPm}`;
    dateClock.innerHTML = `${days[day]} ${months[month]} <span class="circle center-elements">${date}</span>`;
}

const scale = (num, in_min, i_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (i_max - in_min) + out_min;
}

updateTime();

setInterval(updateTime, 1000);
