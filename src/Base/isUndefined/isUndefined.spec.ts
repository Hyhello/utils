import isUndefined from './isUndefined';

describe('#isUndefined', () => {
    test('isUndefined', () => {
        expect(isUndefined(null)).toBeTruthy();
        expect(isUndefined(undefined)).toBeTruthy();
        expect(isUndefined(1123)).toBeFalsy();
    });
});
