import beautifyTime from './beautifyTime';

describe('#beautifyTime()', () => {
    test('beautifyTime test', () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(beautifyTime()).toEqual('Invalid Date');
        expect(beautifyTime('2022-04-22')).toEqual('1年前');
        expect(beautifyTime(Date.now() - 10 * 1000)).toEqual('刚刚');
        expect(beautifyTime(Date.now() + 10 * 1000)).toEqual('刚刚');
        expect(beautifyTime(Date.now() + 11 * 1000)).toEqual('11秒后');
        expect(beautifyTime(Date.now() - 15 * 1000)).toEqual('15秒前');
        expect(beautifyTime(Date.now() + 15 * 1000)).toEqual('15秒后');
        expect(beautifyTime(Date.now() - 30 * 1000)).toEqual('30秒前');
        expect(beautifyTime(Date.now() - 60 * 1000)).toEqual('1分钟前');
        expect(beautifyTime(Date.now() - 3 * 60 * 1000)).toEqual('3分钟前');
        expect(beautifyTime(Date.now() - 60 * 60 * 1000)).toEqual('1小时前');
        expect(beautifyTime(Date.now() - 24 * 60 * 60 * 1000)).toEqual('1天前');
        expect(beautifyTime(Date.now() - 7 * 24 * 60 * 60 * 1000)).toEqual('1星期前');
        expect(beautifyTime(Date.now() - 30 * 24 * 60 * 60 * 1000)).toEqual('1个月前');
        expect(beautifyTime(Date.now() - 12 * 30 * 24 * 60 * 60 * 1000)).toEqual('1年前');
    });
});
