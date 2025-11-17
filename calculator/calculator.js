const body = document.body;

const calculator = document.createElement('div');
calculator.id = 'calculator';

const display = document.createElement('input');
display.type = 'text';
display.id = 'display';
display.value = '0';
display.disabled = true;

calculator.appendChild(display);

let firstNumber = null;
let operator = null;

function isValidNumber(value) {
    return typeof value === 'number' && !isNaN(value) && isFinite(value);
}

function resetCalculator() {
    display.value = '0';
    firstNumber = null;
    operator = null;
}

const table = document.createElement('table');
table.border = '1';
table.cellPadding = '10';
table.cellSpacing = '0';

const row1 = document.createElement('tr');

const ceTd = document.createElement('td');
const clearEntryButton = document.createElement('button');
clearEntryButton.textContent = 'CE';
clearEntryButton.addEventListener('click', function() {
    resetCalculator();
});
ceTd.appendChild(clearEntryButton);
row1.appendChild(ceTd);

const cTd = document.createElement('td');
const clearButton = document.createElement('button');
clearButton.textContent = 'C';
clearButton.addEventListener('click', function() {
    if (display.value === 'Error' || display.value === 'NaN') {
        resetCalculator();
        return;
    }
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = '0';
    }
});
cTd.appendChild(clearButton);
row1.appendChild(cTd);

const divTd = document.createElement('td');
const divideButton = document.createElement('button');
divideButton.textContent = '/';
divideButton.addEventListener('click', function() {
    if (display.value === 'Error' || display.value === 'NaN') {
        return;
    }
    const num = parseFloat(display.value);
    if (!isValidNumber(num)) {
        display.value = 'Error';
        return;
    }
    firstNumber = num;
    operator = '/';
    display.value = '0';
});
divTd.appendChild(divideButton);
row1.appendChild(divTd);

const mulTd = document.createElement('td');
const multiplyButton = document.createElement('button');
multiplyButton.textContent = '*';
multiplyButton.addEventListener('click', function() {
    if (display.value === 'Error' || display.value === 'NaN') {
        return;
    }
    const num = parseFloat(display.value);
    if (!isValidNumber(num)) {
        display.value = 'Error';
        return;
    }
    firstNumber = num;
    operator = '*';
    display.value = '0';
});
mulTd.appendChild(multiplyButton);
row1.appendChild(mulTd);

table.appendChild(row1);

const row2 = document.createElement('tr');

for (let i = 7; i <= 9; i++) {
    const td = document.createElement('td');
    const button = document.createElement('button');
    button.textContent = i;
    button.addEventListener('click', function() {
        if (display.value === 'Error' || display.value === 'NaN') {
            display.value = i.toString();
            return;
        }
        if (display.value === '0') {
            display.value = i.toString();
        } else {
            display.value += i.toString();
        }
    });
    td.appendChild(button);
    row2.appendChild(td);
}

const subTd = document.createElement('td');
const subtractButton = document.createElement('button');
subtractButton.textContent = '-';
subtractButton.addEventListener('click', function() {
    if (display.value === 'Error' || display.value === 'NaN') {
        return;
    }
    const num = parseFloat(display.value);
    if (!isValidNumber(num)) {
        display.value = 'Error';
        return;
    }
    firstNumber = num;
    operator = '-';
    display.value = '0';
});
subTd.appendChild(subtractButton);
row2.appendChild(subTd);

table.appendChild(row2);

const row3 = document.createElement('tr');

for (let i = 4; i <= 6; i++) {
    const td = document.createElement('td');
    const button = document.createElement('button');
    button.textContent = i;
    button.addEventListener('click', function() {
        if (display.value === 'Error' || display.value === 'NaN') {
            display.value = i.toString();
            return;
        }
        if (display.value === '0') {
            display.value = i.toString();
        } else {
            display.value += i.toString();
        }
    });
    td.appendChild(button);
    row3.appendChild(td);
}

const addTd = document.createElement('td');
const addButton = document.createElement('button');
addButton.textContent = '+';
addButton.addEventListener('click', function() {
    if (display.value === 'Error' || display.value === 'NaN') {
        return;
    }
    const num = parseFloat(display.value);
    if (!isValidNumber(num)) {
        display.value = 'Error';
        return;
    }
    firstNumber = num;
    operator = '+';
    display.value = '0';
});
addTd.appendChild(addButton);
row3.appendChild(addTd);

table.appendChild(row3);

const row4 = document.createElement('tr');

for (let i = 1; i <= 3; i++) {
    const td = document.createElement('td');
    const button = document.createElement('button');
    button.textContent = i;
    button.addEventListener('click', function() {
        if (display.value === 'Error' || display.value === 'NaN') {
            display.value = i.toString();
            return;
        }
        if (display.value === '0') {
            display.value = i.toString();
        } else {
            display.value += i.toString();
        }
    });
    td.appendChild(button);
    row4.appendChild(td);
}

const eqTd = document.createElement('td');
eqTd.rowSpan = '2';
const equalsButton = document.createElement('button');
equalsButton.textContent = '=';
equalsButton.style.height = '100%';
equalsButton.style.width = '100%';
equalsButton.addEventListener('click', function() {
    if (display.value === 'Error' || display.value === 'NaN') {
        return;
    }
    if (firstNumber === null || operator === null) {
        return;
    }
    const secondNumber = parseFloat(display.value);
    if (!isValidNumber(firstNumber) || !isValidNumber(secondNumber)) {
        display.value = 'Error';
        firstNumber = null;
        operator = null;
        return;
    }
    let result;
    if (operator === '+') {
        result = firstNumber + secondNumber;
    } else if (operator === '-') {
        result = firstNumber - secondNumber;
    } else if (operator === '*') {
        result = firstNumber * secondNumber;
    } else if (operator === '/') {
        if (secondNumber === 0) {
            display.value = 'Error';
            firstNumber = null;
            operator = null;
            return;
        }
        result = firstNumber / secondNumber;
    }
    if (!isValidNumber(result)) {
        display.value = 'NaN';
    } else {
        display.value = result.toString();
    }
    firstNumber = null;
    operator = null;
});
eqTd.appendChild(equalsButton);
row4.appendChild(eqTd);

table.appendChild(row4);

const row5 = document.createElement('tr');

const zeroTd = document.createElement('td');
zeroTd.colSpan = '3';
const zeroButton = document.createElement('button');
zeroButton.textContent = '0';
zeroButton.style.width = '100%';
zeroButton.addEventListener('click', function() {
    if (display.value === 'Error' || display.value === 'NaN') {
        display.value = '0';
        return;
    }
    if (display.value === '0') {
        display.value = '0';
    } else {
        display.value += '0';
    }
});
zeroTd.appendChild(zeroButton);
row5.appendChild(zeroTd);

table.appendChild(row5);

calculator.appendChild(table);
body.appendChild(calculator);