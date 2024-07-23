document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated", {
        speed: 200,
        loop: true
    }).type('Desenvolvedor Front-End ', { delay: 900 })
        .delete(10)
        .pause(500)
        .type('Mobile ', { delay: 600 })
        .delete(21)
        .pause(300)
        .type('UX / UI ', { delay: 700 })
        .delete(9)
        .type('Marketer ', { delay: 800 })
        .go()
});