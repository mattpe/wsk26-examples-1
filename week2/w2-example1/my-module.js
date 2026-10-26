const plus = (num1, num2) => num1 + num2;

const miinus =  function(num1, num2) {
  return num1 - num2;
};


function kerto(num1, num2) {
  return num1 * num2;
}

const pii = 3.14

// Käytä aina const/let, älä ikinä var
// ehdoton no-no: var muuttuja = 'joku arvo';

// Default export
const calculator = {plus, miinus, kerto};
export default calculator;

// Named export
export {plus, miinus, kerto, pii};
