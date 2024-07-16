function validateForm() {
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    
    if (nome.length < 5 || nome.length > 50) {
        alert('O nome deve ter entre 5 e 50 caracteres.');
        return false;
    }
 
    if (usuario.length < 5 ) {
        alert('Digite um usuário maior que 5 dígitos');
        return false;
        }

    if (cpf.length < 11 || cpf.length > 11) {
        alert('Digite um CPF válido!');
        return false;
    }

    if (senha.length < 6 ) {
        alert('A senha deve ter no mínimo 6 números');
        return false;
    }

    if (senha !== confirmarSenha) {
        alert('As senhas não correspondem. Por favor, tente novamente.');
        return false;
    }
    alert('Conta criada com sucesso!');
    return true;
}

