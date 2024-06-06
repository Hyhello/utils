import getFileExt from './getFileExt';

describe('#getFileExt()', () => {
    test('getFileExt test', () => {
        expect(getFileExt('aaa.png')).toEqual('png');
        expect(getFileExt('aaa.png.a')).toEqual('a');
        expect(getFileExt('aaa.png.m') === 'png.m').toBeFalsy();
    });
});
