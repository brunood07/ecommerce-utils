export function formatForOnlyNumbers(text: string) {
  return text.replace(/[^0-9]/g, "");
}

export function formatForOnlyText(text: string) {
  return text.replace(/\d/g, "");
}

export function formatName(text = "") {
  return text.replace(/[&/\\#,+()$%:*?<>{}!@/_=|\n\r]/g, "");
}

export function formatCPF(cpf: string) {
  return cpf
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1-$2");
}

export function formatCNPJ(cnpj: string) {
  return cnpj
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");
}

export function formatIE(ie: string) {
  return ie
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1/$2")
    .replace(/(\d{7})(\d)/, "$1");
}

export function formatPrice(price: number) {
  const priceFormat = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return priceFormat.format(price);
}
