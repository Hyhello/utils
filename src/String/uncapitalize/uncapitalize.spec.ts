import uncapitalize from './uncapitalize';

describe('#uncapitalize()', () => {
    test('Initial to lowercase', () => {
        expect(uncapitalize('Aaaa')).toEqual('aaaa');
    });
});
