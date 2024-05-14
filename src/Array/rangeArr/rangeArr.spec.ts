import rangeArr from './rangeArr';
import { noop } from '@/Function';

describe('#rangeArr()', () => {
    test('make a array', () => {
        expect(rangeArr(2)).toEqual([undefined, undefined]);
    });

    test('make a array (default value)', () => {
        expect(rangeArr(2, 'string')).toEqual(['string', 'string']);
    });

    test('make a array (default Function)', () => {
        expect(rangeArr(2, (i) => 2 * i)).toEqual([0, 2]);
    });

    test('make a array (default Function undefined)', () => {
        expect(rangeArr(2, noop)).toEqual([undefined, undefined]);
    });
});
