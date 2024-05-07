import set from './set';

describe('#set()', () => {
    test('set test', () => {
        const obj1 = { a: [{ b: { c: 6 } }] };
        const obj2 = {};
        set(obj1, 'a[0].b.c', '默认值');
        set(obj2, 'a.0.b.c', '默认值');
        expect(obj1).toEqual(obj2);
        set(obj1, 'a[0].b[0]', 2);
        expect(obj1).toEqual({ a: [{ b: { 0: 2, c: '默认值' } }] });
        set(obj1, 'a[0].b[0]', [1]);
        expect(obj1).toEqual({ a: [{ b: { 0: [1], c: '默认值' } }] });
    });
});
