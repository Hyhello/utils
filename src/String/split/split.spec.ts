import split from './split';

describe('#split()', () => {
    test('split', () => {
        expect(split('')).toEqual('');
        expect(split('aaaa')).toEqual('a,aaa');
        expect(split('bbbbb', 2)).toEqual('b,bb,bb');
        expect(split('566.321', 2)).toEqual('5,66.321');
        expect(split('ccccc', 2, '|')).toEqual('c|cc|cc');
    });
});
