import getStyle from './getStyle';

describe('#getStyle()', () => {
    let oDiv: HTMLDivElement;
    beforeAll(() => {
        oDiv = document.createElement('div');
        oDiv.style.width = '200px';
        oDiv.style.height = '200px';
        oDiv.style.backgroundColor = 'red';
        oDiv.style.zIndex = '1';
    });
    test('getStyle test', () => {
        expect(getStyle(oDiv, 'width')).toEqual('200px');
        expect(getStyle(oDiv, 'height')).toEqual('200px');
        expect(getStyle(oDiv, 'background-color')).toEqual('red');
        expect(getStyle(oDiv, 'backgroundColor')).toEqual('red');
        expect(getStyle(oDiv, 'z-index')).toEqual('1');
        expect(getStyle(oDiv, 'zIndex')).toEqual('1');
        expect(getStyle(oDiv, 'position')).toEqual('');
    });
});
