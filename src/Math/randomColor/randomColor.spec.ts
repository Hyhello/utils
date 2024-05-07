import randomColor from './randomColor';

describe('#randomColor()', () => {
    test('randomColor test', () => {
        const str = randomColor();
        expect(str.length).toEqual(7);
        expect(/^#\w{6}$/.test(str)).toBeTruthy();
    });
});
