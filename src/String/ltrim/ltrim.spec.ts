import ltrim from './ltrim';

describe('#ltrim()', () => {
    test('remove left space', () => {
        expect(ltrim('   aaa   ')).toEqual('aaa   ');
    });
});
