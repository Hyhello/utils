import removeStore from './removeStore';

describe('#removeStore()', () => {
	const value = 'jest-test';
	const valueObj = { a: 1 };
	beforeEach(() => {
		window.sessionStorage.setItem('jest-test1', value);
		window.localStorage.setItem('jest-test2', value);
		window.sessionStorage.setItem('jest-test3', JSON.stringify(valueObj));
	});
	test('store(session)', () => {
		removeStore('jest-test1');
		expect(window.sessionStorage.getItem('jest-test1')).toEqual(null);
	});
	test('store(location)', () => {
		removeStore('jest-test2', true);
		expect(window.localStorage.getItem('jest-test2')).toEqual(null);
	});

	test('store(object)', () => {
		removeStore('jest-test3');
		expect(window.sessionStorage.getItem('jest-test3')).toEqual(null);
	});
});
