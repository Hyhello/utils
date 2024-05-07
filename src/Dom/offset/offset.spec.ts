import offset from './offset';

describe('#offset()', () => {
    let $ele: HTMLElement;
    beforeAll(function () {
        const div = document.createElement('div');
        div.id = 'J_addClass';
        div.style.position = 'absolute';
        div.style.top = '200px';
        div.style.left = '300px';
        document.body.appendChild(div);
        $ele = <HTMLElement>document.querySelector('#J_addClass');
        // 由于jsdom 并非真正的渲染，故获取不到offsetLeft, offsetTop, offsetParent等。故mock一下，具体可看issue：https://github.com/jsdom/jsdom/issues/135
        Object.defineProperties($ele, {
            offsetLeft: {
                get() {
                    return parseFloat(window.getComputedStyle(this).left) || 0;
                }
            },
            offsetTop: {
                get() {
                    return parseFloat(window.getComputedStyle(this).top) || 0;
                }
            }
        });
    });
    test('offset() should return true', () => {
        const pos = offset($ele);
        expect(pos.x === 300 && pos.y === 200).toBeTruthy();
    });
    afterAll(function () {
        document.body.removeChild($ele);
    });
});
