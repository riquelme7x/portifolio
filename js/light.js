let trilho = document.getElementById('trilho');
let body = document.querySelector('body');
trilho.addEventListener('click', () => {
    trilho.classList.toggle('dark');
    body.classList.toggle('dark');
})

// // mobile
// let trilhoMb = document.getElementById('trilhoMb');
// let bodyMb = document.querySelector('body');
// trilho.addEventListener('click', () => {
//     trilhoMb.classList.toggle('darkMb');
//     bodyMb.classList.toggle('darkMb');
// })

const trilhoMb = document.querySelector("#trilhoMb");

function toogleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById("nav");
    nav.classList.toggle('darkMb');
}