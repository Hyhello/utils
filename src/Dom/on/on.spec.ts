import on from './on';

describe('#on()', () => {
    describe('on(addEventListener)', () => {
        let oEl: HTMLElement;
        beforeAll(() => {
            oEl = <HTMLElement>document.createElement('div');
            oEl.id = 'js_text';
            document.body.appendChild(oEl);
        });
        afterAll(() => {
            document.body.removeChild(oEl);
        });
        test('on(addEventListener)', () => {
            const $el = <HTMLElement>document.querySelector('#js_text');
            const trigger = function () {
                $el.style.backgroundColor = 'red';
            };
            on($el, 'click', trigger);
            $el.click();
            expect(window.getComputedStyle($el).getPropertyValue('background-color')).toEqual('red');
        });
    });

    describe('on(null)', () => {
        let oEl: HTMLElement;
        beforeAll(() => {
            oEl = <HTMLElement>document.createElement('div');
            oEl.id = 'js_text';
            document.body.appendChild(oEl);
        });
        afterAll(() => {
            document.body.removeChild(oEl);
        });
        test('on(null)', () => {
            const $el = <HTMLElement>document.querySelector('#js_text');
            const nAdd = $el.addEventListener;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            $el.addEventListener = null;
            const trigger = function () {
                $el.style.backgroundColor = 'red';
            };
            on($el, 'click', trigger);
            $el.click();
            expect(window.getComputedStyle($el).getPropertyValue('background-color')).toEqual('red');
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            $el.addEventListener = nAdd;
        });
    });
});
