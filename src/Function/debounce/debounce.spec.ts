import debounce from './debounce';

jest.useFakeTimers();

describe('#debounce()', () => {
	test('debounce test', () => {
		const fn = jest.fn();
		const debouncedFn = debounce(fn, 100);
		debouncedFn('param');
		jest.advanceTimersByTime(50); // 第 50 ms
		debouncedFn('param');
		expect(fn).not.toHaveBeenCalled();
		jest.advanceTimersByTime(50); // 第 100 ms
		expect(fn).not.toHaveBeenCalled();
		jest.advanceTimersByTime(50); // 第 150 ms
		jest.runAllTimers();
		expect(fn).toBeCalledTimes(1);
		expect(fn).toBeCalledWith('param');
	});

	test('debounce test a', () => {
		const fn = jest.fn();
		const debouncedFn = debounce(fn, 1000, true);
		debouncedFn('param');
		jest.advanceTimersByTime(1000);
		expect(fn).toBeCalledWith('param');
		expect(fn).toBeCalledTimes(1);
	});
});
