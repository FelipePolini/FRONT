function validarPrimeiroDigito(cpf) {
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += cpf[i] * (10 - i);
    }
    const resto = (sum * 10) % 11;
    return resto < 10 ? cpf[9] == resto : cpf[9] == 0;
}

function validarSegundoDigito(cpf) {
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += cpf[i] * (11 - i);
    }
    const resto = (sum * 10) % 11;
    return resto < 10 ? cpf[10] == resto : cpf[10] == 0;
}

function validarRepetido(cpf) {
    const primeiro = cpf[0];
    return cpf.some(digito => digito != primeiro);
}

function validarCpf(cpf) {
    
    cpf = cpf.replace(/\D/g, '').split('').map(Number);

    if (cpf.length != 11) {
        return false;
    }
    if (!validarRepetido(cpf)) {
        return false;
    }
    if (!validarPrimeiroDigito(cpf)) {
        return false;
    }
    if (!validarSegundoDigito(cpf)) {
        return false;
    }
    return true;
}

function validar() {
    let cpfValido = false;
    let cpf;
    let resultado = document.getElementById('resultado');
    
   
    while (!cpfValido) {
        cpf = document.getElementById('cpf').value;

        cpfValido = validarCpf(cpf);

        if (!cpfValido) {
            resultado.textContent = "CPF inválido! Por favor, insira um CPF válido.";
            resultado.style.color = "red";
            
            document.getElementById('cpf').value = '';
            
            document.getElementById('cpf').focus();
            return;  
        }
    }

    
    resultado.textContent = "CPF válido!";
    resultado.style.color = "green";
}
