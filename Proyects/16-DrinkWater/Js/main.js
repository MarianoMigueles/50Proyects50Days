const litersDrunked = document.getElementById('full-glass');
const glassRemaining = document.getElementById('empty-glass');

// 12.5% = 250 ml
const maxLiters = 2; // 2 liters
const percentagePerGlass = 12.5; // Percentage per 250 ml

const btnList = document.querySelectorAll('.btn-add-liters');

btnList.forEach((btn, index) => {
    btn.addEventListener('click', ()=> {
        addLitres(index + 1); // index + 1 to match the number of glasses
    });
});

let previousLitres = 0;
let g = 0; // Percentage of full glass
let c = maxLiters; // Liters of empty glass

function addLitres(amountGlasses) {
    const newG = amountGlasses * percentagePerGlass;
    const litersDrunkedAmount = amountGlasses * 0.25; // Each glass is 250 ml or 0.25 liters
    const litersRemaining = maxLiters - litersDrunkedAmount;

    if (newG <= 100 && litersRemaining >= 0) {
        g = newG;
        c = litersRemaining;

        litersDrunked.style.height = `${g}%`;
        glassRemaining.style.height = `${(c / maxLiters) * 100}%`;

        if (g === 0) {
            litersDrunked.querySelector('span').innerHTML = '';
            glassRemaining.querySelector('span').innerHTML = maxLiters + 'L';
        } else {
            litersDrunked.querySelector('span').innerHTML = `${g}%`;
            glassRemaining.querySelector('span').innerHTML = `${c.toFixed(2)}L`;
        }

        btnList.forEach((btn, idx) => {
            if (idx < amountGlasses) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        if (previousLitres == amountGlasses) {
            if (amountGlasses >= 0) {
                addLitres(amountGlasses - 1);
            }
        } else {
            previousLitres = amountGlasses;
        }
    }
}
