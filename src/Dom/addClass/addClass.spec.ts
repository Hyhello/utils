import addClass from './addClass';

describe('#addClass()', () => {
    const oDiv1 = document.createElement('div');
    const oDiv2 = document.createElement('div');
    beforeEach(() => {
        oDiv2.className = 'aaa';
    });

    test('addClass', () => {
        addClass(oDiv1, 'aaa afaf');
        addClass(oDiv2, 'aaa');
        expect(oDiv1.className).toEqual('aaa afaf');
        expect(oDiv2.className).toEqual('aaa');
    });
});
