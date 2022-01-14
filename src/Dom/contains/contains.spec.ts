import contains from './contains';

describe('#contains()', () => {
	test('contains test', () => {
		const oRoot = document.createElement('div');
		const oEl = document.createElement('div');
		oRoot.appendChild(oEl);
		expect(contains(oRoot, oEl)).toBeTruthy();
		expect(contains(oEl, oEl)).toBeTruthy();
		expect(contains(oEl, oRoot)).toBeFalsy();
		expect(contains(oRoot, oRoot)).toBeTruthy();
	});
});
