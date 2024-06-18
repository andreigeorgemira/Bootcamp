let display = document.getElementById('result');
let currentInput = '0';

function appendCharacter(character) {
    if (currentInput === '0' && character !== '.') {
        currentInput = character;
    } else {
        currentInput += character;
    }
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '0';
    display.innerText = currentInput;
}

function deleteLast() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = '0';
    }
    display.innerText = currentInput;
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
    } catch {
        currentInput = 'Error';
    }
    display.innerText = currentInput;
}
