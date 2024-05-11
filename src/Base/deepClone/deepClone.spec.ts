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
        expect(() => deepClone(new WeakMap())).toThrow(new Error('Cannot clone WeakMap: WeakMap keys must be objects'));
        const idate = new Date('2024-04-05');
        expect(deepClone(idate) === idate).toBeFalsy();
        expect(deepClone(idate).getTime()).toEqual(idate.getTime());
        const sets = new Set<any>([{ a: 1 }]);
        const csets = deepClone(sets);
        expect(csets !== sets).toBeTruthy();
        csets.forEach((v) => {
            expect(v.a === 1).toBeTruthy();
        });

        csets.add(2);
        expect(csets.size === 2).toBeTruthy();
        expect(sets.size === 1).toBeTruthy();

        const masp = new Map([
            [1, 2],
            [3, 4]
        ]);

        const cmasp = deepClone(masp);

        expect(cmasp === masp).toBeFalsy();
        expect(masp.size === 2).toBeTruthy();
        expect(cmasp.size === 2).toBeTruthy();
        cmasp.set(8, 9);
        expect(masp.size === 2).toBeTruthy();
        expect(cmasp.size === 3).toBeTruthy();
        expect(masp.has(8)).toBeFalsy();
        expect(cmasp.has(8)).toBeTruthy();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const objB = deepClone(objA);
        expect(objB === objA).toBeFalsy();
        expect(JSON.stringify(objB)).toEqual(JSON.stringify(objA));
        objB.a = 2;
        expect(objA).not.toHaveProperty('name');
        objB.b.c = 2;
        objB.d.push(1);
        expect(objA.d.length).toEqual(1);
        expect(objB.d.length).toEqual(2);
    });
});
