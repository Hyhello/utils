import merge from './merge';

describe('#merge()', () => {
	test('merge test null', () => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		// expect(merge()).toEqual({});
		expect(merge({ a: 1 })).toEqual({ a: 1 });
		expect(merge([{ a: 2 }], [{ b: 2, a: 2 }])).toEqual([{ b: 2, a: 2 }]);
		expect(merge([{ a: 2 }], [{ b: 2, a: 2 }], [{ c: 3 }])).toEqual([{ b: 2, a: 2, c: 3 }]);
		expect(merge({ a: 1 }, { a: '2' }, { a: { b: 2 } })).toEqual({ a: { b: 2 } });
		expect(merge({ a: 1 }, { a: '2' }, { a: { b: 2, c: 12 } })).toEqual({ a: { b: 2, c: 12 } });
	});
});
