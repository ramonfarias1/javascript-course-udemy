(function () {

    class Calculator {
        constructor() {
            this.inputDisplayResult = document.querySelector('input.display-result');
            this.divInputButtons = document.querySelector('div.input-buttons');
        };

        start() {
            this.captureClickEvent();
            this.captureKeypressEvent();
        };

        captureClickEvent() {
            this.divInputButtons.addEventListener('click', (e) => {
                const inputButton = e.target;

                if (inputButton.classList.contains('button')) this.sendButtonValueToInputDisplayResult(inputButton);
                if (inputButton.classList.contains('button-clear-last-entry')) this.clearLastEntry();
                if (inputButton.classList.contains('button-clear-all-entries')) this.clearAllEntries();
                if (inputButton.classList.contains('button-equal') && this.inputDisplayResult.value) this.performCalculation();
            });
        };

        captureKeypressEvent() {
            document.addEventListener('keypress', function (e) {
                if (e.key === 'Enter') this.performCalculation();
            }.bind(this));
        };

        sendButtonValueToInputDisplayResult(inputButton) {
            this.inputDisplayResult.value += inputButton.value;
        };

        clearLastEntry() {
            this.inputDisplayResult.value = this.inputDisplayResult.value.slice(0, -1);
        };

        clearAllEntries() {
            this.inputDisplayResult.value = '';
        };

        performCalculation() {
            try {
                this.inputDisplayResult.value = this.inputDisplayResult.value.replace('\u00f7', '/');
                this.inputDisplayResult.value = this.inputDisplayResult.value.replace('\u00d7', '*');
                this.inputDisplayResult.value = this.inputDisplayResult.value.replace('\u2212', '-');
                this.inputDisplayResult.value = eval(this.inputDisplayResult.value);
            } catch {
                this.inputDisplayResult.value = 'Error, Invalid Values!';
            };
        };
    };

    const calculator = new Calculator();
    calculator.start();

}());