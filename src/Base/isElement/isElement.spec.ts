import isElement from './isElement';

describe('#isElement()', () => {
    test('isElement', () => {
        expect(isElement('div')).toBeFalsy();
        expect(isElement(document.body)).toBeTruthy();
    });
});
