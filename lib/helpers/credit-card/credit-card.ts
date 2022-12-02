import { isValid, parse, startOfMonth } from "date-fns";
import { cardFlags } from "../../constants/credit-card";
import { formatForOnlyNumbers } from "../misc";

export function isValidExpiryDate(text: string): boolean {
  const date = parse(text, "MM/yy", new Date());
  return isValid(date) && date >= startOfMonth(new Date());
}

export function getFormattedCardNumber(text = "", isSecret = false) {
  const cardNumber = isSecret
    ? text.replace(/\s/g, "").replace(/.(?=.{4,}$)/g, "*")
    : text.replace(/\D/g, "");
  const groups = cardNumber.match(/.{1,4}/g) || [];

  return groups.slice(0, 4).join(" ");
}

export function getFormattedCVV(text = "") {
  return text.replace(/\D/g, "").replace(/(\d{4})\d+?$/, "$1");
}

export function getFormattedCardExpiration(text = "") {
  return text
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\/\d{2})\d+?$/, "$1");
}

export function getCardLastForDigits(cardNumber: string): string {
  return cardNumber.substring(cardNumber.length - 4, cardNumber.length);
}

export function getCardFlag(cardNumber: string) {
  for (const cardType in cardFlags)
    if (cardNumber.match(cardFlags[cardType])) return cardType.toLowerCase();
}

export function isValidCardNumber(cardNumber: string) {
  const formattedCardNumber = formatForOnlyNumbers(cardNumber);

  if (formattedCardNumber.length < 13) {
    return false;
  }

  for (const cardType in cardFlags) {
    if (formattedCardNumber.match(cardFlags[cardType])) {
      return true;
    }
  }

  return false;
}
