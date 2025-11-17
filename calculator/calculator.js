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

table.appendChild(row1);

calculator.appendChild(table);
body.appendChild(calculator);