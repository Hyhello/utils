import removeClass from './removeClass';

describe('#removeClass()', () => {
	const oDiv1 = document.createElement('div');
	const oDiv2 = document.createElement('div');
	beforeEach(() => {
		oDiv2.className = 'dddd aaa ffff';
	});
	test('removeClass', () => {
		removeClass(oDiv1, 'aaa');
		removeClass(oDiv2, 'aaa');
		expect(oDiv1.className).toEqual('');
		expect(oDiv2.className).toEqual('dddd ffff');
	});
});
