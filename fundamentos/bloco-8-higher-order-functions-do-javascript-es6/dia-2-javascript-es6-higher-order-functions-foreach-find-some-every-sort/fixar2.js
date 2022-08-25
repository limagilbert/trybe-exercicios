const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  return names.find((name) => name.length === 4);
}

console.log(findNameWithFiveLetters());

//mas se caso eu quiser pegar todos com 5 letras ou mais?
