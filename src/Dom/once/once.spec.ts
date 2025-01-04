import once from './once';

describe('#once()', () => {
    test('once', () => {
        let index = 0;
        const trigger = function () {
            index++;
        };
        once(document.body, 'click', trigger, false);
        document.body.click();
        expect(index).toEqual(1);
        document.body.click();
        expect(index).toEqual(1);
        once(document.body, ['click'], trigger);
        document.body.click();
        expect(index).toEqual(2);
        document.body.click();
        expect(index).toEqual(2);

        once(document.body, ['click'], trigger, true);
        document.body.click();
        expect(index).toEqual(3);
        document.body.click();
        expect(index).toEqual(3);
    });
});
