import isEmail from './isEmail';

describe('#isEmail', () => {
	test('isEmail', () => {
		expect(isEmail('你好')).toBeFalsy();
		expect(isEmail('www.42@qq.com')).toBeTruthy();
	});
});
