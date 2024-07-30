const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
    if (resposta.ok) {
        formulario.innerHTML =
            "<p style='border-radius: 5px; background-color:#341a47; font-size:1rem ; padding:1rem; width:auto; max-width:500px;'><span style='color:#317a00;'>Mensagem enviada</span>, em breve estarei entrando em contato.</p>";
    } else {
        formulario.innerHTML =
            "<p style='border-radius: 5px; background-color:#341a47; font-size:1rem ; padding:1rem; width:auto; max-width:500px;'><span style='color:#e00000;'>Erro no envio</span>, você pode enviar diramente para meu email: contato@riquelmepantoja.com</p>";
    }
}
function enviarFormulario(event) {
    event.preventDefault();
    const botao = document.querySelector("form button");
    botao.disabled = true;
    botao.innerText = "Enviando...";

    const data = new FormData(formulario);

    fetch("./enviar.php", {
        method: "POST",
        body: data,
    }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormulario);