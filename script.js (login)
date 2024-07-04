document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var message = document.getElementById('message');

    if (username === 'giuseppe' && password === '1234') {
        message.style.color = '#00FF00';
        message.textContent = 'Login bem-sucedido!';
    } else {
        message.style.color = '#FF0000';
        message.textContent = 'Usuário ou senha incorretos.';
    }
});
