import deepClone from './deepClone';

describe('#deepClone()', () => {
    test('deepClone test', () => {
        const objA = {
            a: 1,
            b: { c: 2 },
            d: [2],
            f: new Date(),
            m() {
                console.log(1);
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const objB = deepClone(objA);
        expect(objB === objA).toBeFalsy();
        objB.name = 2;
        expect(objA).not.toHaveProperty('name');
        expect(objB).toHaveProperty('name');
        objB.b.af = 'df';
        expect(objA.b).not.toHaveProperty('af');
        expect(objB.b).toHaveProperty('af');
        objB.d.push(1);
        expect(objA.d.length).toEqual(1);
        expect(objB.d.length).toEqual(2);
    });
});
