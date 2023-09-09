class ValidateForm {
    constructor() {
        this.form = document.querySelector('#form');
        this.handleSubmit();
    };

    handleSubmit() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            const isValid = this.validateDataInputs();

            if (isValid) {
                alert('Formulário Enviado!');
                this.form.submit();
            };
        });
    };

    validateDataInputs() {
        let isValid = true;
        this.removeErrors();

        for (const dataInput of this.form.querySelectorAll('input.validate')) {
            const label = dataInput.previousElementSibling.innerText.replace(':', '');

            if (!dataInput.value) {
                this.returnsError(dataInput, `O campo "${label}" não pode estar vazio!`);
                isValid = false;
            };

            if (dataInput.id === 'cpf' && !this.validateCpf(dataInput)) isValid = false;

            if (dataInput.id === 'usuario' && !this.validateUsuario(dataInput)) isValid = false;
        };

        if (!this.validateSenhas()) isValid = false;

        return isValid;
    };

    validateCpf(cpfInput) {
        const validateCpf = new ValidateCPF(cpfInput.value);

        if (!validateCpf.startValidation()) {
            this.returnsError(cpfInput, 'CPF Inválido!');
            return false;
        };

        return true;
    };

    validateUsuario(usuarioInput) {
        const usuario = usuarioInput.value;
        let isValid = true;

        if (usuario.length < 3 || usuario.length > 12) {
            this.returnsError(usuarioInput, 'O usuário deve ter entre 3 a 12 caracteres!');
            isValid = false;
        };

        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.returnsError(usuarioInput, 'O usuário deve conter apenas letras e/ou números!');
            isValid = false;
        };

        return isValid;
    };

    validateSenhas() {
        const senhaInput = this.form.querySelector('input#senha');
        const repetirSenhaInput = this.form.querySelector('input#repetir-senha');
        const senha = senhaInput.value;
        const repetirSenha = repetirSenhaInput.value;

        let isValue = true;

        if (senha.length < 6 || senha.length > 12) {
            this.returnsError(senhaInput, 'A senha deve conter entre 6 a 12 caracteres!');
            isValue = false;
        };

        if (repetirSenha !== senha) {
            this.returnsError(senhaInput, 'As senhas não coincidem!');
            this.returnsError(repetirSenhaInput, 'As senhas não coincidem!');
            isValid = false;
        };

        return isValue;
    };

    returnsError(dataInput, errorMsg) {
        const p = document.createElement('p');
        p.classList.add('error');
        p.innerText = errorMsg;
        dataInput.insertAdjacentElement('afterend', p);
    };

    removeErrors() {
        for (const pError of this.form.querySelectorAll('p.error')) {
            pError.remove();
        };
    };
};

const validateForm = new ValidateForm();