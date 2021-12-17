import hasClass from './hasClass';

describe('#hasClass()', () => {
	const oDiv1 = document.createElement('div');
	const oDiv2 = document.createElement('div');
	beforeEach(() => {
		oDiv2.className = 'aaa';
	});
	test('hasClass', () => {
		expect(hasClass(oDiv1, 'aaa')).toBeFalsy();
		expect(hasClass(oDiv2, 'aaa')).toBeTruthy();
	});
});
