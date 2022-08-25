// sum.test.js
// 1 - A função sum(a, b) retorna a soma do parâmetro a com o b
// Teste se o retorno de sum(4, 5) é 9  OK
// Teste se o retorno de sum(0, 0) é 0  OK 
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5) OK
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5") OK

const sum = require('./sum.js'); //??

describe('testa a função sum', () => {
  it('deve retornar o resultado da soma', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  it('deve disparar um erro caso receba como parâmetro uma string', () => {
    expect(() => sum(4, '5')).toThrowError();
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  })
})











const sum = require('./sum.js'); 






