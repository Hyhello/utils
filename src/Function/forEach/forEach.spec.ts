import forEach from './forEach';

describe('#forEach()', () => {
	test('forEach test null', () => {
		forEach(undefined, (value: any, key: any) => {
			expect(value).toEqual([1, 2, 3][key]);
		});
		forEach(null, (value: any, key: any) => {
			expect(value).toEqual([1, 2, 3][key]);
		});
	});

	test('forEach test array', () => {
		forEach([1, 2, 3], (value: any, key: any) => {
			expect(value).toEqual([1, 2, 3][key]);
		});
	});

	test('forEach test object', () => {
		const list: any[] = [];
		const keylist: any[] = [];
		forEach({ a: 1, b: 2 }, (value: any, key: any) => {
			list.push(value);
			keylist.push(key);
		});
		expect(list.length).toEqual(2);
		expect(keylist.length).toEqual(2);
		expect(list.toString()).toEqual('1,2');
		expect(keylist.toString()).toEqual('a,b');
	});

	test('forEach test any number', () => {
		const list: any[] = [];
		const keylist: any[] = [];
		forEach(2, (value: any, key: any) => {
			list.push(value);
			keylist.push(key);
		});
		expect(list.length).toEqual(1);
		expect(keylist.length).toEqual(1);
		expect(list.toString()).toEqual('2');
		expect(keylist.toString()).toEqual('0');
	});
});
