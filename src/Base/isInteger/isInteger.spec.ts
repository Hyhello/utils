import isInteger from './isInteger';

describe('#isInteger()', () => {
    const nIsInteger = Number.isInteger;
    beforeEach(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        Number.isInteger = null;
    });
    afterEach(() => {
        Number.isInteger = nIsInteger;
    });
    test('isInteger', () => {
        expect(isInteger(1)).toBeTruthy();
        expect(isInteger('1')).toBeFalsy();
        expect(isInteger(1.2)).toBeFalsy();
        expect(isInteger(Infinity)).toBeFalsy();
        expect(isInteger(5.000000000000001)).toBeFalsy();
        expect(isInteger(5.0000000000000001)).toBeTruthy();
        expect(isInteger(Number.MIN_VALUE)).toBeFalsy();
    });
});
