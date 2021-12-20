import random from './random';

describe('#random()', () => {
	test('1 =< random(2, 20) < 10 should return true', () => {
		for (let i = 0; i < 100; i++) {
			const num = random(1, 10);
			expect(num >= 1 && num < 10).toBeTruthy();
		}
	});
});
