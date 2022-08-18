export function hasLeastEightCharacters(password: string) {
  return password.length >= 8;
}

export function hasNumber(password: string) {
  return password.match(/([0-9])/);
}

export function hasLowerCase(password: string) {
  return /[a-z]/.test(password);
}

export function hasUpperCase(password: string) {
  return /[A-Z]/.test(password);
}

export function hasSpecialCharacters(password: string) {
  return password.match(/([!, @, #, $, %, &, *])/);
}
