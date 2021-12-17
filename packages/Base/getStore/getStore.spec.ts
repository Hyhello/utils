import getStore from './getStore';

describe('#getStore()', () => {
	const value = 'jest-test';
	const valueObj = { a: 1 };
	beforeEach(() => {
		window.sessionStorage.setItem('jest-test1', value);
		window.localStorage.setItem('jest-test2', value);
		window.sessionStorage.setItem('jest-test3', JSON.stringify(valueObj));
	});
	afterEach(() => {
		window.sessionStorage.removeItem('jest-test1');
		window.localStorage.removeItem('jest-test2');
		window.sessionStorage.removeItem('jest-test3');
	});
	test('store(session)', () => {
		expect(getStore('jest-test1')).toEqual(value);
	});
	test('store(location)', () => {
		expect(getStore('jest-test2', true)).toEqual(value);
	});

	test('store(object)', () => {
		expect(getStore('jest-test3')).toEqual(JSON.stringify(valueObj));
	});
});
