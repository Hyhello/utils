import setStore from './setStore';

describe('#setStore()', () => {
	const value = 'jest-test';
	const valueObj = { a: 1 };
	beforeEach(() => {
		setStore('jest-test1', value);
		setStore('jest-test2', value, true);
		setStore('jest-test3', valueObj);
	});
	afterEach(() => {
		window.sessionStorage.removeItem('jest-test1');
		window.localStorage.removeItem('jest-test2');
		window.sessionStorage.removeItem('jest-test3');
	});
	test('store(session)', () => {
		expect(window.sessionStorage.getItem('jest-test1')).toEqual(value);
	});
	test('store(location)', () => {
		expect(window.localStorage.getItem('jest-test2')).toEqual(value);
	});

	test('store(object)', () => {
		expect(window.sessionStorage.getItem('jest-test3')).toEqual(JSON.stringify(valueObj));
	});
});
