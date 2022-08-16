//Crie uma função que receba um número e retorne seu fatorial.

//Crie a função factorial que recebe um número como parâmetro, utilizando arrow functions //1

// (Lembre-se de armazenar a função utilizando o tipo de variável correta). ??

//Dentro da função crie uma variável result, que será o retorno final da função.// 2*

//Crie a lógica para retornar o fatorial de N!. //3
//Utilize uma estrutura de repetição para iterar sobre o número passado por parâmetro.
//Como já foi atribuído o valor de 1 para a variável result, você pode atribuir o valor de 2 para o index, 
//já que não é necessário multiplicar 1 * 1.

//Multiplique o index pelo valor armazenado na variável result e retorne a variável result.  //4

//Imprima no terminal "Esse é o fatorial resultado da função" (template literals). //5


const factorial = (number) => { // 1
    let result = 1; //2*
    for (let index =2; index <= number; index +=1){ //3
        result *= index; //4

    }
    return result; }  //??

const print = factorial(5); //??
console.log(`Esse é o fatorial ${print}`);  // 5
