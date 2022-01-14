import hasFocus from './hasFocus';

describe('#hasFocus()', () => {
	let oA: HTMLElement;
	beforeAll(() => {
		oA = document.createElement('a');
		oA.setAttribute('href', '');
		document.body.appendChild(oA);
	});
	afterAll(() => {
		document.body.removeChild(oA);
	});
	test('hasFocus test', () => {
		oA.focus();
		expect(hasFocus(oA)).toBeTruthy();
	});
});
