
// Efeito de menu ativo com rolagem
let links = document.querySelectorAll(".js-link");
let sections = document.querySelectorAll(".section");
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop;
        let heightSection = section.offsetHeight;
        let idSection = section.getAttribute("id");

        if (top >= offset && top < offset + heightSection) {
            links.forEach(link => {
                link.classList.remove("active");

                document.querySelector(`nav li a[href*='${idSection}']`).classList.add('active');
            })
        }
    })

})
function scrollSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    let topSection = section.offsetTop;
    window.scrollTo({
        top: topSection,
        behavior: "smooth"
    })

}

links.forEach(link => {
    link.addEventListener('click', scrollSection)
});

// Menu hamburguer mobile
const btnMobile = document.getElementById("btn-mobile");

function toogleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById("nav");
    nav.classList.toggle('ative');
    const ative = nav.classList.contains('ative')
    event.currentTarget.setAttribute('aria-expanded', ative)
    if (ative) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    } else
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')

}
btnMobile.addEventListener('click', toogleMenu);
btnMobile.addEventListener('touchstart', toogleMenu);


// Formulário
const formulario = document.querySelector('form');
