import isChinese from './isChinese';

describe('#isChinese', () => {
    test('isChinese', () => {
        expect(isChinese('你好')).toBeTruthy();
        expect(isChinese('你好1')).toBeFalsy();
    });
});
