import isString from './isString';

describe('#isString()', () => {
    test('isString', () => {
        expect(isString(1)).toBeFalsy();
        expect(isString('1')).toBeTruthy();
        expect(isString({})).toBeFalsy();
        expect(isString(NaN)).toBeFalsy();
        expect(isString(null)).toBeFalsy();
        expect(isString(undefined)).toBeFalsy();
        expect(isString(new String('1'))).toBeTruthy();
    });
});
