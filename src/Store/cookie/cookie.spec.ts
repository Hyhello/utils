import cookie from './cookie';

describe('#cookie', () => {
	test('cookie test', () => {
		cookie.set('token', 'GA1.2.1727359635.1629081001', 10);
		cookie.set('token1', 'GA1.2.1727359635.1629081002');
		expect(cookie.get('token')).toEqual('GA1.2.1727359635.1629081001');
		expect(cookie.get('token1')).toEqual('GA1.2.1727359635.1629081002');
		cookie.clear('token');
		expect(cookie.get('token')).toEqual(null);
	});
});
