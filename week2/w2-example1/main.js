// importing default export using object and properties
import calculator from './my-module.js';

// importing only on or more exported this using named export
import {miinus} from './my-module.js';

const summa = calculator.plus(1, 2);
console.log('summa', summa);

const erotus = miinus(1, 2);
console.log('erotus', erotus);
