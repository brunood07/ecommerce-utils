import { addDays, format } from 'date-fns';

export function getBoletoPaymentLimitDate(boletoDaysDeadline: number) {
  const date = addDays(new Date(), boletoDaysDeadline);

  const formattedDate = format(date, 'dd/MM/yyyy');
  console.log(formattedDate);

  return formattedDate;
}
