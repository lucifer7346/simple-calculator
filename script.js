let display = document.getElementById('display');
let currentValue = '';

function appendNumber(num) {
    currentValue += num;
    updateDisplay();
}

function appendOperator(op) {
    if (currentValue === '') return;
    currentValue += op;
    updateDisplay();
}

function updateDisplay() {
    display.value = currentValue;
}

function clearDisplay() {
    currentValue = '';
    updateDisplay();
}

function deleteLast() {
    currentValue = currentValue.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        if (currentValue === '') return;
        currentValue = eval(currentValue).toString();
        updateDisplay();
    } catch (error) {
        display.value = 'Error';
        currentValue = '';
        setTimeout(() => {
            clearDisplay();
        }, 1500);
    }
}