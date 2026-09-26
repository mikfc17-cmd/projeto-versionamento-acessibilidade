const botaoContraste = document.getElementById("contraste");

botaoContraste.addEventListener("click", function () {
    document.body.classList.toggle("alto-contraste");

    const ativado = document.body.classList.contains("alto-contraste");

    botaoContraste.setAttribute("aria-pressed", ativado);
});