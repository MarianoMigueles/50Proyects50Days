const faqContainer = document.getElementById('faq-container');

const faqList = [
    {
        id: 'faq-1',
        title: 'Why shouldn\'t we trust atoms?',
        paragraph: 'They make up everything',
    },
    {
        id: 'faq-2',
        title: 'What do you call someone with no body and no nose?',
        paragraph: 'Nobody knows.',
    },
    {
        id: 'faq-3',
        title: 'What is the airiest place on Earth?',
        paragraph: 'The stratosphere.',
    },
    {
        id: 'faq-4',
        title: 'What is the most common element in the universe?',
        paragraph: 'Hydrogen.',
    },
    {
        id: 'faq-5',
        title: 'What is: 1 + 1?',
        paragraph: 'Depends on who you asking.',
    },
]

generateFaqCollapse();

function generateFaqCollapse() {
    faqList.forEach(faq => {
        const faqCollapse = document.createElement('div');
        faqCollapse.id = faq.id;
        faqCollapse.classList.add('faq-collapse');

        faqCollapse.innerHTML = `
            <h3>${faq.title}</h3>
            <p>${faq.paragraph}</p>
            <button id="faq-collapse-button-${faq.id}" class="faq-collapse-button">
                <i class="fas fa-chevron-down"></i>
                <i class="fas fa-times"></i>
            </button>
        `;

        faqContainer.appendChild(faqCollapse);
    });

    const faqCollapseButtons = document.querySelectorAll('.faq-collapse-button');

    faqCollapseButtons.forEach(faqCollapseButton => {
        faqCollapseButton.addEventListener('click', (event)=> {
            toggleFaqCollapse(event);
        });
    });
}

function toggleFaqCollapse(event) {
    const faqCollapseBtn = event.target.parentElement;
    const faqFather = faqCollapseBtn.parentElement;

    if (faqFather.classList.contains('active')) {	
        faqFather.classList.remove('active');
    } else {
        faqFather.classList.add('active');  
    }
}

