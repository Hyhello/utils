import isUrl from './isUrl';

describe('#isUrl', () => {
    test('isUrl', () => {
        expect(isUrl('你好')).toBeFalsy();
        expect(isUrl('/a/b/c.png')).toBeFalsy();
        expect(isUrl('www.42@qq.com')).toBeFalsy();
        expect(isUrl('//www.42@qq.com')).toBeFalsy();
        expect(isUrl('http://192.168.1.1:8090')).toBeTruthy();
        expect(isUrl('http://192.168.1.1')).toBeTruthy();
        expect(isUrl('http://www.baidu.com:8088')).toBeTruthy();
        expect(isUrl('http://www.baidu.com')).toBeTruthy();
    });
});
