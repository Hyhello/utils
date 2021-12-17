import camelCase from './camelCase';

describe('#camelCase()', function () {
	// 转为小驼峰
	test('string to small hump', () => {
		const value = 'aBAc';
		expect(camelCase('--a--b__ac')).toEqual(value);
	});

	// 转为大驼峰
	test('string to big hump', () => {
		const value = 'ABAc';
		expect(camelCase('--a--b__ac', true)).toEqual(value);
	});
});
