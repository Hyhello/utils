import chunk from './chunk';

describe('#chunk()', () => {
    test('chunk a list', () => {
        expect(chunk([1, 2, 3, 4], 1)).toEqual([[1], [2], [3], [4]]);
    });

    test('chunk a list (chunk.length === 1)', () => {
        const result = [1, 2, 3, 4];
        // COPY
        expect(chunk(result) === result).toBeFalsy();
    });
});
