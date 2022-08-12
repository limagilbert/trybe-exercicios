let singer = {
name: 'Milton',
'last-name': 'Nascimento',
nickName: 'Bituca',
age:77,
bestAlbuns: ['Travessia','Clube da Esquina' , 'Minas'],
bornInfo:{
    city: 'Rio de Janeiro',
    state:'Rio de Janeiro',

}

};

console.log(' O cantor ' + singer.name + ' ' + singer['last-name'] + ' possui ' + singer.age + ' anos.');
console.log(' O cantor ' + singer['name'] + ' ' + singer['last-name'] + ' possui ' + singer['age'] + ' anos.');
singer['fullName'] = singer.name+''+singer.lastName;

console.log('O cantor ' + singer.fullName + ' nasceu no estador do '+ singer.bornInfo.city);


let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };

  console.log(car.type);



  let diasDaSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'terça',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sábado',
    };
    
    console.log(diasDaSemana['1']); // domingo


