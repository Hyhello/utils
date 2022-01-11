import throttle from './throttle';

describe('#throttle()', () => {
	test('throttle test', () => {
		expect(throttle()).toEqual('return value');
	});
});
