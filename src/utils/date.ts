export function getNumberOfDaysBetweenDates(firstDate: Date, secondDate: Date): number {
  if (firstDate.getTime() > secondDate.getTime()) {
    secondDate.setFullYear(secondDate.getFullYear() + 1);
  }
  return Math.ceil(Math.abs(secondDate.getTime() - firstDate.getTime()) / (24 * 60 * 60 * 1000));
}
