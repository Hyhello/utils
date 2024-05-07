import inRange from './inRange';

describe('#inRange()', () => {
    test('inRange test', () => {
        expect(inRange(3, 2, 4)).toBeTruthy();
        expect(inRange(4, 2, 4)).toBeFalsy();
        expect(inRange(4, 8)).toBeTruthy();
        expect(inRange(4, 2)).toBeFalsy();
        expect(inRange(-3, -2, -3)).toBeTruthy();
        expect(inRange(-2, -2, -3)).toBeFalsy();
        expect(inRange(-1, -2, -3)).toBeFalsy();
    });
});
