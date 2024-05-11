import stripHtml from './stripHtml';

describe('#stripHtml()', () => {
    test('stripHtml test', () => {
        expect(stripHtml('<div>11111111</div>')).toEqual('11111111');
        expect(stripHtml('<div></div>')).toEqual('');
        expect(stripHtml('')).toEqual('');
    });
});
