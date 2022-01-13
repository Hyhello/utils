import after from './after';

describe('#after()', () => {
	test('after test', () => {
		const fn = jest.fn();
		const func = after(2, fn);
		for (let i = 0; i < 10; i++) {
			func('params');
		}
		expect(fn).toBeCalledWith('params');
		expect(fn).toBeCalledTimes(8);
	});
});
