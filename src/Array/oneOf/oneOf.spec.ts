import oneOf from './oneOf';

describe('#oneOf()', () => {
    test('list is contain a element', () => {
        expect(oneOf('a', ['a', 'b'])).toBeTruthy();
    });

    test('list is not contain a element', () => {
        expect(oneOf('1', ['a', 'b'])).toBeFalsy();
    });
});
