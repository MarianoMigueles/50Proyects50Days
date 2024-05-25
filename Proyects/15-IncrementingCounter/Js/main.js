let cardDb = [
    {
        name: "Twitter Followers",
        icon: "fab fa-twitter fa-3x",
        target: 12000      
    },
    {
        name: "YouTube Subscribers",
        icon: "fab fa-youtube fa-3x",
        target: 5000
    },
    {
        name: "Facebook Fans",
        icon: "fab fa-facebook fa-3x",
        target: 7500
    },
 ];

const countersContainer = document.getElementById('couters-container');

let countersHTML = '';
cardDb.forEach((card) => {
    countersHTML += `
        <div class="counter center-elements" data-target="${card.target}">
            <i class="${card.icon}"></i>
            <h1>0</h1>
            <span>${card.name}</span>
        </div>
    `;
})

countersContainer.innerHTML = countersHTML;
const counters = document.querySelectorAll('.counter');

    counters.forEach((counter) => {
        let h1 = counter.querySelector('h1');

        const updateCounters = () => {
            let target = +counter.getAttribute('data-target');
            let c = +h1.innerHTML;

            const i = target / 200;

            if (c < target) {
                h1.innerHTML = `${Math.ceil(c + i)}`;
                setTimeout(updateCounters, 1)
            } else {
                h1.innerHTML = target;
            }
        }   

        updateCounters();

    })
