let INSS;
let IR;
const SalarioBruto = 2500.00;

if (SalarioBruto <=1556.94){
    INSS = SalarioBruto*0.08;
}
else if  (SalarioBruto <=2594.92){
    INSS = SalarioBruto*0.09;
}
else if  (SalarioBruto <=5189.82){
    INSS = SalarioBruto*0.11;
}
else{
    INSS = 570.88;
}

const SalarioBase = SalarioBruto -INSS

if (SalarioBase <= 1903.98) {
    IR = 0;
}
else if (SalarioBase <= 2826.65) {
    IR = (SalarioBase *0.075)-142.80;
}
else if (SalarioBase <= 3751.05) {
    IR = (SalarioBase *0.15)-354.80;
}
else if (SalarioBase <= 4664.68) {
    IR = (SalarioBase *0.225)-636.13;
}
else {
    IR = (SalarioBase*0.275) - 869.36;
}


console.log("Salário R$ " + (SalarioBase - IR));
