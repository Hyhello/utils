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
        expect(isInteger(null)).toEqual(nIsInteger(null));
        expect(isInteger(undefined)).toEqual(nIsInteger(undefined));
        expect(isInteger(1)).toEqual(nIsInteger(1));
        expect(isInteger('1')).toEqual(nIsInteger('1'));
        expect(isInteger(1.2)).toEqual(nIsInteger(1.2));
        expect(isInteger(NaN)).toEqual(nIsInteger(NaN));
        expect(isInteger(Infinity)).toEqual(nIsInteger(Infinity));
        expect(isInteger(5.01)).toEqual(nIsInteger(5.01));
        expect(isInteger(5.000000000000001)).toEqual(nIsInteger(5.000000000000001));
        expect(isInteger(5.0000000000000001)).toEqual(nIsInteger(5.0000000000000001));
        expect(isInteger(Number.MIN_VALUE)).toEqual(nIsInteger(Number.MIN_VALUE));
    });
});
