import formatDate from './formatDate';

describe('#formatDate()', () => {
    test('formatDate', () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(formatDate()).toEqual('Invalid Date');
        expect(formatDate(1639380703857)).toEqual(formatDate(1639380703857));
        expect(formatDate(1639380703857, 'hh:mm:SS')).toEqual(formatDate(1639380703857, 'hh:mm:SS'));
        expect(formatDate(1639380703857 - 5 * 60 * 60 * 1000, 'h:m:S')).toEqual(
            formatDate(1639380703857 - 5 * 60 * 60 * 1000, 'h:m:S')
        );
        expect(formatDate('2021-12-13', 'yyyy-MM-dd')).toEqual('2021-12-13');
    });
});
