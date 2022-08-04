let numbers = [5];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
}


if(result > 20){
console.log( "valor maior que 20");
}
else {
    console.log("valor menor ou igual a 20");
}