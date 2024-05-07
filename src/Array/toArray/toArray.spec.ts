import toArray from './toArray';

describe('#toArray()', () => {
    test('like array (tag) to array', () => {
        const tags = document.querySelectorAll('span');
        const list = Array.isArray(toArray(tags));
        expect(Array.isArray(tags)).toBeFalsy();
        expect(list).toBeTruthy();
    });

    test('like array to array', () => {
        const list = Array.isArray(toArray({ length: 2, 0: 1, 1: 2 }));
        expect(list).toBeTruthy();
    });
});
