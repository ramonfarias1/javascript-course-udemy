(function () {
    function getCalculator() {
        return {
            divInputButtons: document.querySelector('div.input-buttons'),
            inputResultField: document.querySelector('input.result-field'),

            start() {
                this.divInputButtons.addEventListener('click', function (e) {
                    const inputButton = e.target;

                    if (inputButton.classList.contains('button')) this.buttomValueToResultField(inputButton.value);
                    if (inputButton.classList.contains('button-clear-last-entry')) this.clearLastEntry();
                    if (inputButton.classList.contains('button-clear-all-entries')) this.clearAllEntries();
                    if (inputButton.classList.contains('button-equal') && this.inputResultField.value) this.performCalculation();
                }.bind(this)); // .bind(this) vincula o "this" a function "performTheCalculation()" ao invés da function anônima do evento de click.

                document.querySelector('.button-equal').addEventListener('keypress', function (e) {
                    if (e.key === 'Enter' && this.inputResultField.value) this.performCalculation();
                }.bind(this));
            },

            buttomValueToResultField(inputButtonValue) {
                this.inputResultField.value += inputButtonValue;
            },

            clearLastEntry() {
                this.inputResultField.value = this.inputResultField.value.slice(0, -1);
            },

            clearAllEntries() {
                this.inputResultField.value = '';
            },

            performCalculation() {
                try {
                    this.inputResultField.value = this.inputResultField.value.replace('\u00f7', '/');
                    this.inputResultField.value = this.inputResultField.value.replace('\u00d7', '*');
                    this.inputResultField.value = this.inputResultField.value.replace('\u2212', '-');
                    this.inputResultField.value = eval(this.inputResultField.value);
                } catch {
                    this.inputResultField.value = '';
                };
            },
        };
    };

    const calculator = getCalculator();
    calculator.start();
}());