import { expect } from 'chai';
import { getNumberOfDaysBetweenDates } from './date';

describe('Number of days between dates', () => {
    it('when second date is after first date', () => {
        const firstDate = new Date();
        firstDate.setMonth(12);
        firstDate.setDate(1);
        const secondDate = new Date();
        secondDate.setMonth(7);
        secondDate.setDate(6);
        const numberOfDaysBetween = getNumberOfDaysBetweenDates(firstDate, secondDate);
        expect(numberOfDaysBetween).to.equal(217);
    });

    it('when second date is before first date', () => {
        const firstDate = new Date();
        firstDate.setMonth(1);
        firstDate.setDate(1);
        const secondDate = new Date();
        secondDate.setMonth(7);
        secondDate.setDate(6);
        const numberOfDaysBetween = getNumberOfDaysBetweenDates(firstDate, secondDate);
        expect(numberOfDaysBetween).to.equal(187);
    });

});
