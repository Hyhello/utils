import getType from './getType';

describe('#getType', () => {
    test('getType', () => {
        expect(getType('')).toEqual('string');
        expect(getType(Boolean)).toEqual('function');
        expect(getType(RegExp)).toEqual('function');
        expect(getType(new RegExp('a'))).toEqual('regexp');
        expect(getType(new Map())).toEqual('map');
        expect(getType(null)).toEqual('null');
    });
});
