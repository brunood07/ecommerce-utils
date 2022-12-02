import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function getFormattedDate(date: Date, pattern = "P"): string {
  return format(date, pattern, { locale: ptBR });
}

export function getFormattedBirthdayDate(text: string) {
  return text
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\/\d{4})\d+?$/, "$1");
}
