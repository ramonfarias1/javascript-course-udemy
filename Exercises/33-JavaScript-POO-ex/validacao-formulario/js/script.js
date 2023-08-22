class Form {
    constructor(inputNome, inputSobrenome, inputCpf, inputUsuario, inputSenha, inputRepetirSenha) {
        this.nome = inputNome.value;
        this.sobrenome = inputSobrenome.value;
        this.cpf = inputCpf.value.replaceAll('.', '').replace('-', '');
        this.usuario = inputUsuario.value;
        this.senha = inputSenha.value;
        this.repetirSenha = inputRepetirSenha.value;
    };

    validaForm() {
        const nomeIsValid = this.validaNome();
        const sobrenomeIsValid = this.validaSobrenome();
        const cpfIsValid = this.validaCpf();
        const usuarioIsValid = this.validaUsuario();
        const senhaIsValid = this.validaSenha();
        const repetirSenhaIsValid = this.validaRepetirSenha();

        console.log(nomeIsValid, sobrenomeIsValid);

        // if (nomeIsValid, sobrenomeIsValid, cpfIsValid, usuarioIsValid, senhaIsValid, repetirSenhaIsValid) {
        //     window.location.assign('https://www.youtube.com');
        // };
    };

    validaNome() {
        const divErrosNome = document.querySelector('div#erros-nome');
        divErrosNome.innerHTML = '';
        divErrosNome.style.display = 'none';

        if (!this.nome) {
            divErrosNome.innerHTML += '<p>O campo "nome" é obrigatório!</p>';
            divErrosNome.style.display = 'block';
            return false;
        };

        if ( !/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/.test(this.nome) || this.nome === this.nome[0].repeat(this.nome.length) ) {
            divErrosNome.innerHTML += '<p>Nome Inválido!</p>';
            divErrosNome.style.display = 'block';
            return false;
        };

        return true;
    };

    validaSobrenome() {
        const divErrosSobrenome = document.querySelector('div#erros-sobrenome');
        divErrosSobrenome.innerHTML = '';
        divErrosSobrenome.style.display = 'none';

        if (!this.sobrenome) {
            divErrosSobrenome.innerHTML += '<p>O campo "Sobrenome" é obrigatório!</p>';
            divErrosSobrenome.style.display = 'block';
            return false;
        };

        if ( !/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/.test(this.sobrenome) || this.sobrenome === this.sobrenome[0].repeat(this.sobrenome.length) ) {
            divErrosSobrenome.innerHTML += '<p>Sobrenome Inválido!</p>';
            divErrosSobrenome.style.display = 'block';
            return false;
        };
        
        return true;
    };

    validaCpf() {
        const divErrosCpf = document.querySelector('div#erros-cpf');
        divErrosCpf.innerHTML = '';
        divErrosCpf.style.display = 'none';

        if (!this.cpf) {
            divErrosCpf.innerHTML = '<p>O campo "CPF" é obrigatório!</p>';
            divErrosCpf.style.display = 'block';
            return false;
        };

        if (isNaN(this.cpf) || this.cpf.length !== 11 || this.cpf === this.cpf[0].repeat(this.cpf.length)) {
            divErrosCpf.innerHTML = '<p>CPF Inválido!</p>';
            divErrosCpf.style.display = 'block';
            return false;
        };

        const cpfValidado = () => {
            const cpfArray = this.cpf.slice(0, -2).split('');

            for (let c = 0; c < 2; c++) {
                let contador = cpfArray.length + 1;

                const total = cpfArray.reduce( (acumulador, valor) => {
                    acumulador += Number(valor) * contador;
                    contador--;
                    return acumulador;
                }, 0);

                const digito = 11 - (total % 11);
                digito < 10 ? cpfArray.push(digito.toString()) : cpfArray.push('0');
            };

            return cpfArray.join('');
        };

        console.log(cpfValidado(), this.cpf);

        if (cpfValidado() !== this.cpf) {
            divErrosCpf.innerHTML = '<p>CPF Inválido!</p>';
            divErrosCpf.style.display = 'block';
            return false;
        };

        return true;
    };

    validaUsuario() {
        const divErrosUsuario = document.querySelector('div#erros-usuario');
        divErrosUsuario.innerHTML = '';
        divErrosUsuario.style.display = 'none';

        if (!this.usuario) {
            divErrosUsuario.innerHTML = '<p>O campo "Usuário" é obrigatório!</p>';
            divErrosUsuario.style.display = 'block';
            return false;
        };

        if (!/^[a-zA-Z0-9]*$/.test(this.usuario)) {
            divErrosUsuario.innerHTML = '<p>O Usuário deve conter apenas letras e números!</p>';
            divErrosUsuario.style.display = 'block';
            return false;
        };

        if (this.usuario.length < 3 || this.usuario.length > 12) {
            divErrosUsuario.innerHTML = '<p>O Usuário deve conter entre 3 a 12 caracteres!</p>';
            divErrosUsuario.style.display = 'block';
            return false;
        };

        return true;
    };

    validaSenha() {
        const divErrosSenha = document.querySelector('div#erros-senha');
        divErrosSenha.innerHTML = '';
        divErrosSenha.style.display = 'none';

        if (!this.senha) {
            divErrosSenha.innerHTML = '<p>O campo "Senha" é obrigatório!</p>';
            divErrosSenha.style.display = 'block';
            return false;
        };

        if (this.senha.length < 6 || this.senha.length > 12) {
            divErrosSenha.innerHTML = '<p>A senha deve conter entre 6 a 12 caracteres!</p>';
            divErrosSenha.style.display = 'block';
            return false;
        };

        return true;
    };

    validaRepetirSenha() {
        const divErrosRepetirSenha = document.querySelector('div#erros-repetir-senha');
        divErrosRepetirSenha.innerHTML = '';
        divErrosRepetirSenha.style.display = 'none';

        if (this.senha !== this.repetirSenha) {
            divErrosRepetirSenha.innerHTML = '<p>As senhas não coincidem!</p>';
            divErrosRepetirSenha.style.display = 'block';
            return false;
        };

        return true;
    };
};

const botaoEnviar = document.querySelector('input#enviar');
botaoEnviar.addEventListener('click', ()=> {

    const inputNome = document.querySelector('input#nome');
    const inputSobrenome = document.querySelector('input#sobrenome');
    const inputCpf = document.querySelector('input#cpf');
    const inputUsuario = document.querySelector('input#usuario');
    const inputSenha = document.querySelector('input#senha');
    const inputRepetirSenha = document.querySelector('input#repetir-senha');

    const form = new Form(inputNome, inputSobrenome, inputCpf, inputUsuario, inputSenha, inputRepetirSenha);
    form.validaForm();
});