class ValidForm {
    constructor() {
        this.form = document.querySelector('.form');
        this.handleSubmit();
    };

    handleSubmit() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            const isValid = this.validDataFields();
        });
    };

    validDataFields() {
        let isValid = true;

        for (const dataField of this.form.querySelectorAll('.data-field')) {
            const label = dataField.previousElementSibling.innerText.replace(':', '');

            if (!dataField.value) {
                this.createError(dataField, `O campo "${label}" não pode estar vazio!`);
                isValid = false;
            };

            if (dataField.id === 'cpf') {
                const validaCpf = new ValidaCpf(dataField.value);
                if (!validaCpf.iniciarValidacao()) {
                    this.createError(dataField, 'CPF Inválido!');
                    isValid = false;
                };
            };
        };
    };

    createError(dataField, errorMsg) {
        
        const p = document.createElement('p');
        p.classList.add('error-text');
        p.innerText = errorMsg;
        dataField.insertAdjacentElement('afterend', p);
    };
};

const validForm = new ValidForm();