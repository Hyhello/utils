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
});
