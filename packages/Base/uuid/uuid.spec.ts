import uuid from './uuid';

describe('#uuid()', () => {
	test('uuid', () => {
		expect(/^\w{8}-\w{4}-4\w{3}-\w{4}-\w{12}$/.test(uuid())).toBeTruthy();
	});
});
