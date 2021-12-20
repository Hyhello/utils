import toNumber from './toNumber';

describe('#toNumber()', () => {
	test('toNumber', () => {
		expect(Number.isNaN(toNumber('aaa'))).toBeTruthy();
		expect(toNumber('11')).toEqual(11);
		expect(toNumber('11aaa')).toEqual(11);
	});
});
