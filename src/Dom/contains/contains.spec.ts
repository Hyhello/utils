import contains from './contains';

describe('#contains()', () => {
    test('contains test', () => {
        const oRoot = document.createElement('div');
        const oEl = document.createElement('div');
        const oText = document.createTextNode('1111');
        oEl.appendChild(oText);
        oRoot.appendChild(oEl);
        expect(contains(oRoot, oEl)).toBeTruthy();
        expect(contains(oEl, oEl)).toBeTruthy();
        expect(contains(oEl, oRoot)).toBeFalsy();
        expect(contains(oRoot, oRoot)).toBeTruthy();
        expect(contains(oRoot, oText)).toBeTruthy();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        oRoot.contains = null;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        oEl.contains = null;
        expect(contains(oRoot, oEl)).toBeTruthy();
        expect(contains(oEl, oEl)).toBeTruthy();
        expect(contains(oEl, oRoot)).toBeFalsy();
        expect(contains(oRoot, oRoot)).toBeTruthy();
        expect(contains(oRoot, oText)).toBeTruthy();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        oRoot.compareDocumentPosition = null;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        oEl.compareDocumentPosition = null;
        expect(contains(oRoot, oEl)).toBeTruthy();
        expect(contains(oEl, oEl)).toBeTruthy();
        expect(contains(oEl, oRoot)).toBeFalsy();
        expect(contains(oRoot, oRoot)).toBeTruthy();
        expect(contains(oRoot, oText)).toBeTruthy();
    });
});
