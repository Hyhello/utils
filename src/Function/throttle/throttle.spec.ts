import throttle from './throttle';

describe('#throttle()', () => {
    test('should call function if now - last > wait', (done) => {
        const fn = jest.fn();
        const throttledFn = throttle(fn, 1000);
        throttledFn('param');
        setTimeout(() => {
            throttledFn('param');
            expect(fn).toBeCalledWith('param');
            expect(fn).toBeCalledTimes(1);
            done();
        }, 1000);
    });

    test('should call function if immediate = true', (done) => {
        const fn = jest.fn();
        const throttledFn = throttle(fn, 1000, true);
        throttledFn('param');
        throttledFn('param');
        expect(fn).toBeCalledWith('param');
        expect(fn).toBeCalledTimes(1);
        done();
    });

    test('should not call function if now - last < wait', () => {
        const fn = jest.fn();
        const throttledFn = throttle(fn, 1000);
        const getTimeSpy = jest.spyOn(Date.prototype, 'getTime').mockReturnValue(100);
        throttledFn('param');
        expect(fn).not.toBeCalled();
        expect(getTimeSpy).toBeCalledTimes(1);
    });
});
