import before from './before';

describe('#before()', () => {
	test('before test', () => {
		const fn = jest.fn();
		const func = before(2, fn);
		for (let i = 0; i < 10; i++) {
			func('params');
		}
		expect(fn).toBeCalledWith('params');
		expect(fn).toBeCalledTimes(2);
	});
});
