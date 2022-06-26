import setStyle from './setStyle';
import getStyle from '../getStyle/getStyle';

describe('#setStyle()', () => {
	let oDiv: HTMLElement;
	beforeAll(() => {
		oDiv = <HTMLElement>document.createElement('div');
	});
	test('setStyle test', () => {
		setStyle(oDiv, 'width', '200px');
		setStyle(oDiv, 'height', '200px');
		setStyle(oDiv, { backgroundColor: 'red', zIndex: 1 });
		// expect(getStyle(oDiv, 'backgroundColor')).toEqual('red');
		expect(getStyle(oDiv, 'width')).toEqual('200px');
		expect(getStyle(oDiv, 'height')).toEqual('200px');
		expect(getStyle(oDiv, 'zIndex')).toEqual('1');
		expect(getStyle(oDiv, 'z-index')).toEqual('1');
	});
});
