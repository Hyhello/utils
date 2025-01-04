import off from './off';
import on from '../on/on';

describe('#off()', () => {
    describe('off(addEventListener)', () => {
        let oEl: HTMLElement;
        beforeAll(() => {
            oEl = <HTMLElement>document.createElement('div');
            oEl.id = 'js_text';
            document.body.appendChild(oEl);
        });
        afterAll(() => {
            document.body.removeChild(oEl);
        });
        test('off(addEventListener)', () => {
            const $el = <HTMLElement>document.querySelector('#js_text');
            let index = 0;
            const trigger = function () {
                index++;
            };
            on($el, ['click'], trigger);
            $el.click();
            expect(index).toEqual(1);
            off($el, ['click'], trigger);
            $el.click();
            expect(index).toEqual(1);
        });
    });

    describe('off(null)', () => {
        let oEl: HTMLElement;
        beforeAll(() => {
            oEl = <HTMLElement>document.createElement('div');
            oEl.id = 'js_text';
            document.body.appendChild(oEl);
        });
        afterAll(() => {
            document.body.removeChild(oEl);
        });
        test('off(null)', () => {
            const $el = <HTMLElement>document.querySelector('#js_text');
            const nAdd = $el.addEventListener;
            const nRemove = $el.removeEventListener;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            $el.addEventListener = null;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            $el.removeEventListener = null;
            let index = 0;
            const trigger = function () {
                index++;
            };
            on($el, 'click', trigger);
            $el.click();
            expect(index).toEqual(1);
            off($el, 'click', trigger);
            $el.click();
            expect(index).toEqual(1);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            $el.removeEventListener = nRemove;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            $el.addEventListener = nAdd;
        });
    });
});
