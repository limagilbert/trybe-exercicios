//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
//Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário.
// Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
//defina tres variaveis - ok 
//angulo interno e sempre igual 180º
//retorne true se os angulos reprentarem os angulos
//retorne false caso contrario
//se algum angulo for invalido msg de erro
//Um ângulo será considerado inválido se não tiver um valor positivo.


const ladoA = 190;
const ladoB = 190;
const ladoC = 190;

somaTotal = ladoA+ladoB+ladoC;
naoPodeSerNegativo = ladoA > 0 && ladoB > 0 && ladoC > 0;

if (naoPodeSerNegativo){
   if (somaTotal===180) {
   console.log(true);
} else {
    console.log(false);
}}
else{
    console.log("Deu Ruim");

}




