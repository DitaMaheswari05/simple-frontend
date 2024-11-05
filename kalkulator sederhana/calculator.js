const screen = document.querySelector('#screen');
const keys = document.querySelector('.calculator-keys')

let currentInput ='';
let operator = '';
let previousInput = '';

keys.addEventListener('click', event => {
    const {target} = event;
    const {value} = target;

    if (!target.matches('button')) return;

    switch (value) {
        case "+":
        case "-":
        case "*":
        case "/":
            handleOperator(value);
            break;
        case "=":
            calculate();
            break;
        case 'all-clear':
            clearScreen();
            break;
        case ".":
            if(!currentInput.includes('.')) {
                currentInput += value;
                screen.value = currentInput;
            }
            break;
        default:
            inputNumber(value);
            break;
    }
});

function handleOperator(nextOperator) {
    if (operator && currentInput){
        calculate();
    }

    operator = nextOperator;
    previousInput = currentInput;
    currentInput = '';
}

function calculate(){
    let result = 0;
    const previous = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (operator === '+') {
        result = previous + current;
    } else if (operator === "-") {
        result = previous - current;
    } else if (operator === '*') {
        result = previous * current;  
    } else if (operator === '/') {
        result = previous / current;
    }

    currentInput = result.toString();
    screen.value = currentInput;
    operator = "";
    previousInput = '';
}

function inputNumber(number){;
    currentInput = currentInput === '' ? number : currentInput + number;
    screen.value = currentInput;
}

function clearScreen(){
    currentInput = '';
    operator = '';
    previousInput = '';
    screen.value = '';
}