document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    let valid = true;
    let errorMsg = '';

    
    const requiredFields = ['nome', 'email', 'cpf', 'idade', 'telefone', 'cep', 'logradouro', 'bairro', 'cidade', 'estado', 'usuario', 'senha'];
    requiredFields.forEach(field => {
        const input = document.getElementById(field);
        if (!input.value.trim()) {
            valid = false;
            errorMsg += `O campo ${input.previousElementSibling.innerText} não pode estar vazio.\n`;
        }
    });

    // Validação de CPF
    const cpfInput = document.getElementById('cpf');
    const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfPattern.test(cpfInput.value)) {
        valid = false;
        errorMsg += 'O CPF deve estar no formato xxx.xxx.xxx-xx.\n';
    }

    // Validação de Telefone
    const telefoneInput = document.getElementById('telefone');
    const telefonePattern = /^\(\d{2}\) \d{5}-\d{4}$/;
    if (!telefonePattern.test(telefoneInput.value)) {
        valid = false;
        errorMsg += 'O telefone deve estar no formato (xx) xxxxx-xxxx.\n';
    }

    // Validação de CEP
    const cepInput = document.getElementById('cep');
    const cepPattern = /^\d{5}-\d{3}$/;
    if (!cepPattern.test(cepInput.value)) {
        valid = false;
        errorMsg += 'O CEP deve estar no formato xxxxx-xxx.\n';
    }

    // Validação de Usuário
    const usuarioInput = document.getElementById('usuario');
    if (usuarioInput.value.length < 5) {
        valid = false;
        errorMsg += 'O usuário deve ter no mínimo 5 caracteres.\n';
    }

    // Validação de Senha
    const senhaInput = document.getElementById('senha');
    const senhaPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!senhaPattern.test(senhaInput.value)) {
        valid = false;
        errorMsg += 'A senha deve conter no mínimo 8 caracteres, incluindo letras, números e símbolos.\n';
    }

    if (!valid) {
        event.preventDefault();
        alert(errorMsg);
    }
});

// Máscara para CPF
document.getElementById('cpf').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{2})$/, '$1-$2');
    e.target.value = value;
});

// Máscara para Telefone
document.getElementById('telefone').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/(\d{2})(\d)/, '($1) $2');
    value = value.replace(/(\d{5})(\d)/, '$1-$2');
    e.target.value = value;
});

// Máscara para CEP
document.getElementById('cep').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/(\d{5})(\d)/, '$1-$2');
    e.target.value = value;
});
