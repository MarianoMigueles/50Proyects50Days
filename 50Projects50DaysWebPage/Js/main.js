const proyectsContainer = document.getElementById('proyect-container');

getProyects();

function getProyects() {
    fetch('./Db/Db.json')
        .then(response => response.json())
        .then(data => {
            generateNewProyectCard(data);
        });
}


function generateNewProyectCard(proyects) {
    proyects.forEach((proyect) => {
        const div = document.createElement('div');
        div.classList.add('proyect-card');  
        div.innerHTML = `
            <img src="${proyect.image}" alt="${proyect.name}">
            <span>${"#" + proyect.id + " "}</span>
            <h3>${proyect.name}</h3>
        `;
        
        proyectsContainer.appendChild(div);

        div.addEventListener('click', () => {
            console.log(proyect.id);
            window.location.href = proyect.Link;
        });
    });
}