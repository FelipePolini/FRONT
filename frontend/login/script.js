document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var username = document.getElementById('Usuario').value;
    var password = document.getElementById('Senha').value;
    var message = document.getElementById('message');

    if ( username === 'giuseppe' && password === '1234') {
        message.style.color = '#00FF00';
        message.textContent = 'Login bem-sucedido!';
    } else {
        message.style.color = '#FF0000';
        message.textContent = 'Usuário ou senha incorretos.';
    }
});
    document.getElementById('EsqueciSenhaBtn').addEventListener('click', function() {
    window.location.href = 'esquecersenha.html';
});
document.getElementById('CriarContaBtn').addEventListener('click', function() {
    window.location.href = 'criarconta.html'
});
document.getElementById('MostrarSenha').addEventListener('click', function() {
    var passwordField = document.getElementById('Senha');
    var toggleButton = document.getElementById('MostrarSenha');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleButton.textContent = 'Ocultar Senha';
    } else {
        passwordField.type = 'password';
        toggleButton.textContent = 'Mostrar Senha';
    }
});
