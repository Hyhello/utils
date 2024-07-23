import isIdCard from './isIdCard';

describe('#isIdCard', () => {
    test('isIdCard', () => {
        expect(isIdCard('420881199010223212x')).toBeFalsy();
        expect(isIdCard(420881199010223211)).toBeTruthy();
        expect(isIdCard('420881199010223212')).toBeTruthy();
        expect(isIdCard('000000000000000000')).toBeFalsy();
        expect(isIdCard('42088119901022321x')).toBeTruthy();
    });
});
