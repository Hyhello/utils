import toSecret from './toSecret';

describe('#toSecret()', () => {
    test('toSecret', () => {
        expect(toSecret('')).toEqual('');
        expect(toSecret('1')).toEqual('1');
        expect(toSecret('11')).toEqual('11');
        expect(toSecret('22', -2, -1)).toEqual('*2');
        expect(toSecret('402102331231', 1, 30)).toEqual('4***********');
        expect(toSecret('402102331231', -6, -1)).toEqual('402102*****1');
    });
});
