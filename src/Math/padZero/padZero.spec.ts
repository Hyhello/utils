import padZero from './padZero';

describe('#padZero()', () => {
	test('padZero test', () => {
		expect(padZero(1)).toEqual('01');
		expect(padZero(10)).toEqual('10');
	});
});
