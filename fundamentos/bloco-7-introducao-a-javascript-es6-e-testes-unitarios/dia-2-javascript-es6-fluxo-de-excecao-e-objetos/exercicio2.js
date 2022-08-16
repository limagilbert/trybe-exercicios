const customerInfo = (order) => {
    const address = 'address';
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const customerName = order['name'];
    const customerPhone = order['phoneNumber'];
    const street = order[address].street;
    const number = order[address].number;
    const apartment = order[address].apartment;
  
    console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, R. ${street}, Nº: ${number}, AP: ${apartment}`); // Exiba a mensagem desejada utilizando `template literals`
  }
  
  customerInfo(order);