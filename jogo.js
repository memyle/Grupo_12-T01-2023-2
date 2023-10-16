document.addEventListener("DOMContentLoaded", function () {
    var menuDropdown = document.getElementById("menuDropdown");
    var opcaoSelecionadaElement = document.getElementById("opcaoSelecionada");

    menuDropdown.addEventListener("change", function () {
        var selectedOption = menuDropdown.options[menuDropdown.selectedIndex].value;
        opcaoSelecionadaElement.textContent = selectedOption;
    });

});

var imagem1Element = document.getElementById("imagem1");
var imagem2Element = document.getElementById("imagem2");
var isImagem1 = true;

function trocarImagens() {
    if (isImagem1) {
        imagem1Element.src = "nova_imagem1.jpg";
        imagem2Element.src = "nova_imagem2.jpg";
    } else {
        imagem1Element.src = "outra_imagem1.jpg";
        imagem2Element.src = "outra_imagem2.jpg";
    }

    isImagem1 = !isImagem1;
}