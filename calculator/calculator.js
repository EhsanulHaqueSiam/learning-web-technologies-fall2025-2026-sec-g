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

const table = document.createElement('table');
table.border = '1';
table.cellPadding = '10';
table.cellSpacing = '0';

const row1 = document.createElement('tr');

const ceTd = document.createElement('td');
const clearEntryButton = document.createElement('button');
clearEntryButton.textContent = 'CE';
clearEntryButton.onclick = function() {
    display.value = '0';
    firstNumber = null;
    operator = null;
};
ceTd.appendChild(clearEntryButton);
row1.appendChild(ceTd);

const cTd = document.createElement('td');
const clearButton = document.createElement('button');
clearButton.textContent = 'C';
clearButton.onclick = function() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = '0';
    }
};
cTd.appendChild(clearButton);
row1.appendChild(cTd);

const divTd = document.createElement('td');
const divideButton = document.createElement('button');
divideButton.textContent = '/';
divideButton.onclick = function() {
    firstNumber = parseFloat(display.value);
    operator = '/';
    display.value = '0';
};
divTd.appendChild(divideButton);
row1.appendChild(divTd);

const mulTd = document.createElement('td');
const multiplyButton = document.createElement('button');
multiplyButton.textContent = '*';
multiplyButton.onclick = function() {
    firstNumber = parseFloat(display.value);
    operator = '*';
    display.value = '0';
};
mulTd.appendChild(multiplyButton);
row1.appendChild(mulTd);

table.appendChild(row1);

const row2 = document.createElement('tr');

for (let i = 7; i <= 9; i++) {
    const td = document.createElement('td');
    const button = document.createElement('button');
    button.textContent = i;
    button.onclick = function() {
        if (display.value === '0') {
            display.value = i;
        } else {
            display.value += i;
        }
    };
    td.appendChild(button);
    row2.appendChild(td);
}

const subTd = document.createElement('td');
const subtractButton = document.createElement('button');
subtractButton.textContent = '-';
subtractButton.onclick = function() {
    firstNumber = parseFloat(display.value);
    operator = '-';
    display.value = '0';
};
subTd.appendChild(subtractButton);
row2.appendChild(subTd);

table.appendChild(row2);

const row3 = document.createElement('tr');

for (let i = 4; i <= 6; i++) {
    const td = document.createElement('td');
    const button = document.createElement('button');
    button.textContent = i;
    button.onclick = function() {
        if (display.value === '0') {
            display.value = i;
        } else {
            display.value += i;
        }
    };
    td.appendChild(button);
    row3.appendChild(td);
}

table.appendChild(row3);

calculator.appendChild(table);
body.appendChild(calculator);