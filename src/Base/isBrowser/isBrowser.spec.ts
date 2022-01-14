import isBrowser from './isBrowser';

describe('#isBrowser()', () => {
	test('isBrowser test', () => {
		expect(isBrowser()).toBeTruthy();
	});
});
