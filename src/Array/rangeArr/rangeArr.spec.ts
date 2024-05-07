import rangeArr from './rangeArr';

describe('#rangeArr()', () => {
    test('make a array', () => {
        expect(rangeArr(2)).toEqual([undefined, undefined]);
    });

    test('make a array (default value)', () => {
        expect(rangeArr(2, 'string')).toEqual(['string', 'string']);
    });
});
