import toggleClass from './toggleClass';

describe('#toggleClass()', () => {
	const oDiv1 = document.createElement('div');

	it('toggleClass', () => {
		toggleClass(oDiv1, 'aaa');
		expect(oDiv1.className).toEqual('aaa');
		toggleClass(oDiv1, 'aaa');
		expect(oDiv1.className).toEqual('');
	});
});
