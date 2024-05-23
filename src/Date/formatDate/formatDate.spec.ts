import formatDate from './formatDate';
import { padZero } from '@/Math';

describe('#formatDate()', () => {
    test('formatDate', () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const d = new Date(1639380703857);
        const hour = padZero(d.getHours());
        const str =
            d.getFullYear() +
            '-' +
            (d.getMonth() + 1) +
            '-' +
            d.getDate() +
            ' ' +
            hour +
            ':' +
            d.getMinutes() +
            ':' +
            d.getSeconds();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(formatDate()).toEqual('Invalid Date');
        expect(formatDate(1639380703857)).toEqual(str);
        expect(formatDate(1639380703857, 'hh:mm:SS')).toEqual(`${hour}:31:857`);
        expect(formatDate(1639380703857 - 5 * 60 * 60 * 1000, 'h:m:S')).toEqual(`${d.getHours()}:31:857`);
        expect(formatDate('2021-12-13', 'yyyy-MM-dd')).toEqual('2021-12-13');
    });
});
