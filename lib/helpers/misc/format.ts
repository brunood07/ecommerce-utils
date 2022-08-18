export function formatForOnlyNumbers(text: string) {
  return text.replace(/[^0-9]/g, '');
}

export function formatForOnlyText(text: string) {
  return text.replace(/\d/g, '');
}

export function formatName(text = '') {
  return text.replace(/[&/\\#,+()$%:*?<>{}!@/_=|\n\r]/g, '');
}