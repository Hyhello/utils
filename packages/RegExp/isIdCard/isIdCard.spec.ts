import isIdCard from './isIdCard';

describe('#isIdCard', () => {
	test('isIdCard', () => {
		expect(isIdCard('420881199010223212x')).toBeFalsy();
		expect(isIdCard(420881199010223211)).toBeTruthy();
		expect(isIdCard('420881199010223212')).toBeTruthy();
	});
});
