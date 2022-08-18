import { IInstallmentsProps } from "./types";

export function calculateInstallmentsWithoutTax({
  numberOfInstallments,
  listPrice,
  salePrice,
}: IInstallmentsProps) {
  const installmentPrice = (salePrice ? salePrice : listPrice) / numberOfInstallments;

  return installmentPrice;
}
