import isPrimitive from './isPrimitive';

describe('#isPrimitive()', () => {
    test('isPrimitive', () => {
        expect(isPrimitive(1)).toBeTruthy();
        expect(isPrimitive(Symbol('1'))).toBeTruthy();
        expect(isPrimitive('')).toBeTruthy();
        expect(isPrimitive(true)).toBeTruthy();
        expect(isPrimitive(false)).toBeTruthy();
        expect(isPrimitive(undefined)).toBeTruthy();
        expect(isPrimitive(null)).toBeTruthy();
        expect(isPrimitive({})).toBeFalsy();
        expect(isPrimitive([])).toBeFalsy();
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        expect(isPrimitive(() => {})).toBeFalsy();
    });
});
