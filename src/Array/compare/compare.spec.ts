import compare from './compare';

describe('#compare()', () => {
    test('sort primitive', () => {
        const value = [1, 12, 3, 4, '5'];
        expect(value.sort(compare())).toEqual([1, 3, 4, '5', 12]);
    });

    test('sort equal', () => {
        const value = [1, 12, 3, 4, 4, '5'];
        expect(value.sort(compare())).toEqual([1, 3, 4, 4, '5', 12]);
    });

    test('sort object', () => {
        const value = [{ age: 11 }, { age: 12 }, { age: 3 }, { age: 4 }, { age: '5' }];
        expect(value.sort(compare('age'))).toEqual([{ age: 3 }, { age: 4 }, { age: '5' }, { age: 11 }, { age: 12 }]);
    });

    test('sort object desc', () => {
        const value = [{ age: 11 }, { age: 12 }, { age: 3 }, { age: 4 }, { age: '5' }];
        expect(value.sort(compare('age', 'desc'))).toEqual([
            { age: 12 },
            { age: 11 },
            { age: '5' },
            { age: 4 },
            { age: 3 }
        ]);
    });

    test('sort object asc', () => {
        const value = [{ age: 11 }, { age: 12 }, { age: 3 }, { age: 4 }, { age: '5' }];
        expect(value.sort(compare('age', 'asc'))).toEqual([
            { age: 3 },
            { age: 4 },
            { age: '5' },
            { age: 11 },
            { age: 12 }
        ]);
    });

    test('sort object asc', () => {
        const value = [11, { age: 12 }, 3, { age: 4 }, { age: '5' }];
        expect(value.sort(compare('age', 'asc'))).toEqual([3, { age: 4 }, { age: '5' }, 11, { age: 12 }]);
    });
});
