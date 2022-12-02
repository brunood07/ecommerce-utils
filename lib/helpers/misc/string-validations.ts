export function hasLeastEightCharacters(text: string) {
  return text.length >= 8;
}

export function hasLeastNCharacters(text: string, minLength: number): boolean {
  return text.length >= minLength;
}

export function hasNumber(text: string) {
  return text.match(/([0-9])/);
}

export function hasLowerCase(text: string) {
  return /[a-z]/.test(text);
}

export function hasUpperCase(text: string) {
  return /[A-Z]/.test(text);
}

export function hasSpecialCharacters(text: string) {
  return text.match(/([!, @, #, $, %, &, *])/);
}
