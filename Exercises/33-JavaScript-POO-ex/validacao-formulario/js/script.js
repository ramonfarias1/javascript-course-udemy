class Form {
    constructor(nome, sobrenome, cpf, usuario, senha, senhaRepetida) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf.replaceAll('.', '').replace('-', '');
        this.usuario = usuario;
        this.senha = senha;
        this.senhaRepetida = senhaRepetida;
    };

    validarNome() {
        const pErroNome = document.querySelector('p#erro-nome');

        if (!this.nome) {
            pErroNome.innerText
        };
    };
};

const botaoEnviar = document.querySelector('input#enviar');

botaoEnviar.addEventListener('click', ()=> {
    const inputNome = document.querySelector('input#nome');
    const inputSobrenome = document.querySelector('input#sobrenome');
    const inputCPF = document.querySelector('input#cpf');
    const inputUsuario = document.querySelector('input#usuario');
    const inputSenha = document.querySelector('input#senha');
    const inputRepetirSenha = document.querySelector('input#repetir-senha');

    const form = new Form(inputNome.value, inputSobrenome.value, inputCPF.value, inputUsuario.value, inputSenha.value, inputRepetirSenha.value);
    form.validarNome();
});