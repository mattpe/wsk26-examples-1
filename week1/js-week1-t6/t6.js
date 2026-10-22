'use strict';

const number = Number(prompt('Anna positiivinen kokonaisluku:'));

// väliaikainen kovakoodattu syöte testausta varten
//const number = 6;

console.log('syötteen numeron tyyppi ja arvo', typeof(number), number);

const outputTable = document.querySelector('#output');

if (number > 0) {

    for (let i=1; i<=number; i++) {
        console.log(i);
        const newRow = document.createElement('tr');
        outputTable.append(newRow);
        for (let j = 1; j<=number; j++) {
            const newCell = document.createElement('td');
            newRow.append(newCell);
            newCell.textContent = i*j;
        }
    }    
}