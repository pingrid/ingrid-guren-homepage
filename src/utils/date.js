export const getNumberOfDaysBetweenDates = (firstDate, secondDate) => {
    if (secondDate.getTime() < firstDate.getTime()) {
        firstDate.setFullYear(firstDate.getFullYear() - 1);
    }
    return Math.ceil(Math.abs((secondDate.getTime() - firstDate.getTime()) / (24 * 60 * 60 * 1000)));
};
