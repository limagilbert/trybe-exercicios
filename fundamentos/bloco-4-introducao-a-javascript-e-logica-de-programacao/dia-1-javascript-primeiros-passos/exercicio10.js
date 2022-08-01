const custoDoProduto = 50;
const valorVenda = 100;
const tax = 0.20
const aux = custoDoProduto*tax
const valorDoCustoTotal = custoDoProduto+aux
const profit = valorVenda - valorDoCustoTotal

if(custoDoProduto< 0 && valorVenda < 0){
    console.log("ERRO!");
    
}
if(custoDoProduto< 0 || valorVenda < 0){
    console.log("ERRO!")

}

else if (valorVenda){
    console.log("O lucro da empresa será "+profit);

}



const costOfProduct = -1;
const saleValue = -1;

if (costOfProduct >= 0 && saleValue >= 0) {
  const totalCostOfProduct = costOfProduct * 1.2;
  const totalProfit = (saleValue - totalCostOfProduct) * 1000;
  console.log(totalProfit);
} else {
  console.log("Error, os valores não podem ser negativos");
};