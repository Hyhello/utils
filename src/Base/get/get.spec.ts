import get from './get';

describe('#get()', () => {
    test('get', () => {
        const valueObj = {};
        expect(get(valueObj, 'a.b')).toBeUndefined();
        expect(get(valueObj, 'a.b', 1)).toEqual(1);
        expect(get(valueObj, ['a', 'b'], 1)).toEqual(1);
    });
});
