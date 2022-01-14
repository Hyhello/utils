import degsToRads from './degsToRads';

describe('#degsToRads()', () => {
	test('degsToRads test', () => {
		expect(degsToRads(90)).toEqual(Math.PI / 2);
		expect(degsToRads(180)).toEqual(Math.PI);
		expect(degsToRads(360)).toEqual(Math.PI * 2);
	});
});
