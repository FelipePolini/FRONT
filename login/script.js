document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var username = document.getElementById('Usuario').value;
    var cpf = document.getElementById('CPF').value;
    var password = document.getElementById('Senha').value;
    var message = document.getElementById('message');

    if (cpf === '40155851861' && username === 'giuseppe' && password === '1234') {
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
    alert('Função de criação de conta ainda não implementada.');
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
