import isNumber from './isNumber';

describe('#isNumber()', () => {
    test('isNumber', () => {
        expect(isNumber(1)).toBeTruthy();
        expect(isNumber('1')).toBeFalsy();
        expect(isNumber(Infinity)).toBeTruthy();
        expect(isNumber(NaN)).toBeTruthy();
        expect(isNumber(Number.MIN_VALUE)).toBeTruthy();
    });
});
