import isLeapYear from './isLeapYear';

describe('#isLeapYear()', () => {
	test('isLeapYear', () => {
		expect(isLeapYear(2021)).toBeFalsy();
		expect(isLeapYear(2020)).toBeTruthy();
	});
});
