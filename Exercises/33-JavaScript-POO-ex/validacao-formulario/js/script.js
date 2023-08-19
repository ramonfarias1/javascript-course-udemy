class Form {
    constructor() {
        this.inputNome = document.querySelector('input#nome');
        this.inputSobrenome = document.querySelector('input#sobrenome');
        this.inputCpf = document.querySelector('input#cpf');
        this.inputUsuario = document.querySelector('input#usuario');
        this.inputSenha = document.querySelector('input#senha');
        this.inputRepetirSenha = document.querySelector('input#repetir-senha');
    };

    validaForm() {
        const chamaValidaSobrenome = () => this.validaSobrenome(chamaValidaCpf); // Fiz com callback apenas para práticar
        const chamaValidaCpf = () => this.validaCpf();

        this.validaNome(chamaValidaSobrenome);
    };

    validaNome(chamaValidaSobrenome) {
        const divErrosNome = document.querySelector('div#erros-nome');
        divErrosNome.innerHTML = '';
        divErrosNome.style.display = 'none';

        if (!this.inputNome.value) {
            divErrosNome.innerHTML += '<p>O campo "nome" é obrigatório!</p>';
            divErrosNome.style.display = 'block';
            chamaValidaSobrenome();
            return;
        };

        if (!/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ']+$\s^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ']+$/.test(this.inputNome.value)) {
            divErrosNome.innerHTML += '<p>Nome Inválido!</p>';
            divErrosNome.style.display = 'block';
        };

        chamaValidaSobrenome();
    };

    validaSobrenome(chamaValidaCpf) {
        const divErrosSobrenome = document.querySelector('div#erros-sobrenome');
        divErrosSobrenome.innerHTML = '';
        divErrosSobrenome.style.display = 'none';

        if (!this.inputSobrenome.value) {
            divErrosSobrenome.innerHTML += '<p>O campo "Sobrenome" é obrigatório!</p>';
            divErrosSobrenome.style.display = 'block';
            chamaValidaCpf();
            return;
        };

        if (!isNaN(this.inputNome.value)) {
            divErrosSobrenome.innerHTML += '<p>Sobrenome Inválido!</p>';
            divErrosSobrenome.style.display = 'block';
        };
        
        chamaValidaCpf();
    };

    validaCpf() {
        console.log('chegou aqui');
    };

};

const botaoEnviar = document.querySelector('input#enviar');
botaoEnviar.addEventListener('click', ()=> {

    const form = new Form();
    form.validaForm();

});