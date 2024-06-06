import isTel from './isTel';

describe('#isTel', () => {
    test('isTel', () => {
        expect(isTel('13455667788')).toBeFalsy();
        expect(isTel('0271022312')).toBeTruthy();
        expect(isTel('02711022312')).toBeTruthy();
        expect(isTel('02741022312')).toBeTruthy();
        expect(isTel('1022312')).toBeTruthy();
        expect(isTel('027-1022312')).toBeTruthy();
    });
});
