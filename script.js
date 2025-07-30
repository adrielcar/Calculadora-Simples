let display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    if (display.value !== '' && !isOperator(display.value.slice(-1))) {
        display.value += operator;
    }
}

function appendDot() {
    let parts = display.value.split(/\+|\-|\*|\//);
    let lastPart = parts[parts.length - 1];
    if (!lastPart.includes('.')) {
        display.value += '.';
    }
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Erro';
    }
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}