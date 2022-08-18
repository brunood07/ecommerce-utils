export function formatCelphoneNumber(text: string) {
  return text?.replace(/\D/g, '').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
}

export function formatTelephoneNumber(text: string) {
  return text.replace(/\D/g, '').replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
}

