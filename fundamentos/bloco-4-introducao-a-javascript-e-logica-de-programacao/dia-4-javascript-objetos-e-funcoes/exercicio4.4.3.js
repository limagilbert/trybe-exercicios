let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for(let cars in car){
    console.log(cars+ ':' +car[cars]);
  }

