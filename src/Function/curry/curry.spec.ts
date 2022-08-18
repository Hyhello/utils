import curry from './curry';

function add(a: number, b: number, c: number): number {
	return a + b + c;
}

describe('#curry()', () => {
	test('curry test', () => {
		const addCurry = curry(add, 1);
		expect(addCurry(1, 2)).toEqual(4);
		expect(addCurry(1)(3)).toEqual(5);
		expect(addCurry(1, 5, 3)).toEqual(7);
	});
});
