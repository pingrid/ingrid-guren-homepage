export const getNumberOfDaysBetweenDates = (firstDate, secondDate) => {
    if (firstDate.getTime() > secondDate.getTime()) {
        secondDate.setFullYear(secondDate.getFullYear() + 1);
    }
    return Math.ceil(Math.abs(secondDate.getTime() - firstDate.getTime()) / (24 * 60 * 60 * 1000));
};
