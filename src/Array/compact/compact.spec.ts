import compact from './compact';

describe('#compact()', () => {
    test('remove the value of false', () => {
        expect(compact([1, 2, 3, 0, '', false, undefined, null])).toEqual([1, 2, 3]);
    });
});
