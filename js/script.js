
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

//mobile
let linksMB = document.querySelectorAll(".j-link");
let Sections = document.querySelectorAll(".section");
window.addEventListener('scroll', () => {
    Sections.forEach(Section => {
        let top = window.scrollY;
        let offset = Section.offsetTop;
        let heightSection = Section.offsetHeight;
        let idSection = Section.getAttribute("id");

        if (top >= offset && top < offset + heightSection) {
            linksMB.forEach(link => {
                link.classList.remove("active-mb");

                document.querySelector(`#nav li a[href*='${idSection}']`).classList.add('active-mb');
            })
        }
    })

})

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
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
}
// teste

const Itens1 = document.querySelector(".close-m1");
Itens1.addEventListener('click', toogleMenu);
const Itens2 = document.querySelector(".close-m2");
Itens2.addEventListener('click', toogleMenu);
const Itens3 = document.querySelector(".close-m3");
Itens3.addEventListener('click', toogleMenu);
const Itens4 = document.querySelector(".close-m4");
Itens4.addEventListener('click', toogleMenu);
const Itens5 = document.querySelector(".close-m5");
Itens5.addEventListener('click', toogleMenu);
const Itens6 = document.querySelector(".close-m6");
Itens6.addEventListener('click', toogleMenu);



btnMobile.addEventListener('click', toogleMenu);
btnMobile.addEventListener('touchstart', toogleMenu);

