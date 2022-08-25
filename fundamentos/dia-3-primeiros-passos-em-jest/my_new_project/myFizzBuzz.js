// função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" OK
//se o número for divisível por 3 e 5,retorna "fizz"    OK
//se for divisível apenas por 3, retorna "buzz" OK
//se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 
//e retorna false caso num não seja um número OK**

// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

function myFizzBuzz(num) { // OK
    if (typeof num !== 'number') return false; // OK
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz'; // OK
    if (num % 3 === 0) return 'fizz';  // OK
    if (num % 5 === 0) return 'buzz'; // OK**
    return num; // OK
  }
  
  module.exports = myFizzBuzz;
