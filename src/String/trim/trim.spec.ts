import trim from './trim';

describe('#trim()', () => {
    const nTrim = String.prototype.trim;
    beforeAll(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        String.prototype.trim = null;
    });
    afterAll(() => {
        String.prototype.trim = nTrim;
    });
    test('remove both space', () => {
        expect(trim('   aaa   ')).toEqual(nTrim.call('   aaa   '));
        expect(trim('   aaa   ')).toEqual(nTrim.call('   aaa'));
    });
});
