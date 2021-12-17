import isUrl from './isUrl';

describe('#isUrl', () => {
	test('isUrl', () => {
		expect(isUrl('你好')).toBeFalsy();
		expect(isUrl('www.42@qq.com')).toBeFalsy();
		expect(isUrl('http://www.baidu.com')).toBeTruthy();
	});
});
