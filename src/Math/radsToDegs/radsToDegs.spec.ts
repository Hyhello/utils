import radsToDegs from './radsToDegs';

describe('#radsToDegs()', () => {
	test('radsToDegs test', () => {
		expect(radsToDegs(Math.PI / 2)).toEqual(90);
		expect(radsToDegs(Math.PI)).toEqual(180);
		expect(radsToDegs(Math.PI * 2)).toEqual(360);
	});
});
