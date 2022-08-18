export function calcPercentageOff(listPrice: number, salePrice: number) {
  const discount = listPrice - salePrice;
  const percentageOff = (discount * 100) / listPrice;

  return percentageOff.toFixed();
}

export function calculateInstallmentPrice({ numberOfInstallments, listPrice, salePrice }) {
  const installmentPrice = (salePrice ? salePrice : listPrice) / numberOfInstallments;

  return installmentPrice;
}
