import merge from './merge';

describe('#merge()', () => {
    test('merge simple object test', () => {
        expect(merge({ a: 1, b: 2 }, { a: { b: 1, c: 2 }, b: 3 })).toEqual({ a: { b: 1, c: 2 }, b: 3 });
    });

    test('merge deep object test', () => {
        expect(
            merge({ a: { a: 1, b: 3 }, b: { f: [2, 3], d: 2 } }, { a: { b: 1, c: 2 }, b: { f: [1, 2, 3], d: [3] } })
        ).toEqual({
            a: { a: 1, b: 1, c: 2 },
            b: {
                f: [1, 2, 3],
                d: [3]
            }
        });
    });

    test('merge array test', () => {
        expect(merge([1, 2, 3], [4, 5, 6, 7])).toEqual([4, 5, 6, 7]);
    });

    test('merge deep array test', () => {
        expect(
            merge([{ a: 1 }, { c: 2 }, { b: [{ a: 1 }] }], [{ a: 1 }, { c: { d: 2 } }, { b: [{ f: 2 }, { m: 3 }] }])
        ).toEqual([{ a: 1 }, { c: { d: 2 } }, { b: [{ a: 1, f: 2 }, { m: 3 }] }]);
    });

    test('merge deep array has function test', () => {
        expect(
            JSON.stringify(
                merge(
                    [
                        {
                            a: function () {
                                console.log(1);
                            },
                            b: 2
                        }
                    ],
                    [
                        {
                            a: 1,
                            b: function () {
                                console.log(2);
                            }
                        }
                    ]
                )
            )
        ).toEqual(
            JSON.stringify([
                {
                    a: 1,
                    b: function () {
                        console.log(2);
                    }
                }
            ])
        );
    });
});
