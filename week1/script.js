'use strict';

console.log('Toimiiko?');

const button = document.querySelector('button');
//console.log('viittaus nappiin', button);
button.addEventListener('click', (event) => {
    console.log('Toimiihan se!');
    console.log('napin klikkieventti:', event);
});