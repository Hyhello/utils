import cacheFn from './cacheFn';

describe('#cacheFn()', () => {
    let index = 0;
    const mockFn = (str: any) => str + index++;
    const fn = cacheFn(mockFn);
    test('cacheFn test', () => {
        expect(fn('key')).toEqual('key0');
        expect(fn('key')).toEqual(fn('key'));
        expect(fn).toBeInstanceOf(Function);
        expect(fn('key1')).not.toEqual(fn('key'));
    });
});
