
let message = ""
const currestHour = 4;
if(currestHour >= 22){
    message="Não deveríamos comer nada, é hora de dormir"

}
else if (currestHour>= 18 && currestHour<22){
message = "Rango da noite, vamos jantar :D" 
}
else if (currestHour>=14 && currestHour<18){
    message="Vamos fazer um bolo pro café da tarde?"

}
else if (currestHour >= 11 && currestHour < 14){
    message="Hora do almoço!!!"
}

else if (currestHour >= 4 && currestHour <11){
    message="Hmmm, cheiro de café recém passado" 
}

console.log(message);
