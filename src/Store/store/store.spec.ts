import store from './store';

describe('#store', () => {
	describe('store get', () => {
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
		test('get test', () => {
			expect(store.get('jest-test1')).toEqual(value);
			expect(store.get('jest-test2', true)).toEqual(value);
			expect(store.get('jest-test3')).toEqual(valueObj);
		});
	});

	describe('store set', () => {
		const value = 'jest-test';
		const valueObj = { a: 1 };
		beforeEach(() => {
			store.set('jest-test1', value);
			store.set('jest-test2', value, true);
			store.set('jest-test3', valueObj);
		});
		afterEach(() => {
			window.sessionStorage.removeItem('jest-test1');
			window.localStorage.removeItem('jest-test2');
			window.sessionStorage.removeItem('jest-test3');
		});
		test('set test', () => {
			expect(window.sessionStorage.getItem('jest-test1')).toEqual(value);
			expect(window.localStorage.getItem('jest-test2')).toEqual(value);
			expect(window.sessionStorage.getItem('jest-test3')).toEqual(JSON.stringify(valueObj));
		});
	});

	describe('store clear', () => {
		const value = 'jest-test';
		const valueObj = { a: 1 };
		beforeEach(() => {
			window.sessionStorage.setItem('jest-test1', value);
			window.localStorage.setItem('jest-test2', value);
			window.sessionStorage.setItem('jest-test3', JSON.stringify(valueObj));
		});
		test('store clear(session)', () => {
			store.clear('jest-test1');
			expect(window.sessionStorage.getItem('jest-test1')).toEqual(null);
		});
		test('store clear(location)', () => {
			store.clear('jest-test2', true);
			expect(window.localStorage.getItem('jest-test2')).toEqual(null);
		});
		test('store clear(object)', () => {
			store.clear('jest-test3');
			expect(window.sessionStorage.getItem('jest-test3')).toEqual(null);
		});
		test('store clear all', () => {
			window.sessionStorage.setItem('jest-test1 all', value);
			window.localStorage.setItem('jest-test2 all', value);
			window.sessionStorage.setItem('jest-test3 all', JSON.stringify(valueObj));
			store.clearAll();
			store.clearAll(true);
			expect(window.sessionStorage.getItem('jest-test1 all')).toEqual(null);
			expect(window.localStorage.getItem('jest-test2 all')).toEqual(null);
			expect(window.sessionStorage.getItem('jest-test3 all')).toEqual(null);
		});
	});
});
