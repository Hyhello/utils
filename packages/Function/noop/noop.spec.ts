import noop from './noop';

describe('#noop', () => {
	test('noop return undefined', () => {
		expect(typeof noop === 'function').toBeTruthy();
		expect(noop() === undefined).toBeTruthy();
	});
});
