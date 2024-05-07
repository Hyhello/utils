import capitalize from './capitalize';

describe('#capitalize()', () => {
    // 首字母转为大写
    test('Initial to uppercase', () => {
        const value = 'Aaaaa';
        expect(capitalize('aaaaa')).toEqual(value);
    });
});
