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
})

document.getElementById('forgotPasswordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var cpf = document.getElementById('cpf').value;
    var message = document.getElementById('message');
    

    /* Chamada AJAX para verificar o CPF
    fetch('/validate-cpf', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cpf: cpf })
    })
    .then(response => response.json())
    .then(data => {*/
        if (data.valid) {
            message.style.color = 'green';
            message.textContent = 'CPF validado! Crie uma nova senha.';
            document.getElementById('forgotPasswordForm').style.display = 'none';
            document.getElementById('resetPasswordForm').style.display = 'block';
        } else {
            message.style.color = 'red';
            message.textContent = 'CPF não cadastrado.';
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        message.style.color = 'red';
        message.textContent = 'Ocorreu um erro. Tente novamente.';
    });


document.getElementById('resetPasswordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var cpf = document.getElementById('cpf').value;
    var newPassword = document.getElementById('newPassword').value;
    var message = document.getElementById('message');

    /* Chamada AJAX para criar nova senha
    fetch('/reset-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cpf: cpf, newPassword: newPassword })
    })
    .then(response => response.json())
    .then(data => { */
        if (data.success) {
            message.style.color = 'green';
            message.textContent = 'Senha alterada com sucesso!';
        } else {
            message.style.color = 'red';
            message.textContent = 'Não foi possível alterar a senha. Tente novamente.';
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        message.style.color = 'red';
        message.textContent = 'Ocorreu um erro. Tente novamente.';
    });

 
