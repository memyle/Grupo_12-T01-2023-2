document.getElementById("loginButton").addEventListener("click", function() {
    var username = document.getElementById("Nome").value;
    var password = document.getElementById("Senha").value;
    if (username === "seu_usuario" && password === "sua_senha") {
        window.location.href = "jogo.html";
    } else {
        alert("Credenciais inválidas. Tente novamente.");
    }
});
function redirecionarParaJogo() {
    // Redireciona para a página "jogo.html"
    window.location.href = "jogo.html";
}