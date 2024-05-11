const cubic = (value: number): number => value ** 3; // 类似于 Math.pow(value, 3);
const easeInOutCubic = (value: number): number => (value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) * 2) / 2);

/**
 * 单位时间（duration）内滑动指定 HTML 元素（el）到指定位置（end）。
 * @param el 待滑动 HTML 元素。
 * @param end 滑动元素到指定位置。
 * @param duration 滑动持续时长{毫秒}。
 * @returns {Promise<void>} 返回一个 Promise。
 * @see {@link https://hyhello.github.io/utils/#/scrollTo 在线文档}
 */
export default function scrollTo(el: HTMLElement, end = 0, duration = 500): Promise<void> {
    return new Promise((resolve) => {
        const beginTime = Date.now();
        const beginValue = el.scrollTop;
        const diff = beginValue - end;
        const frameFunc = () => {
            const progress = (Date.now() - beginTime) / duration;
            if (progress < 1) {
                el.scrollTop = beginValue - easeInOutCubic(progress) * diff;
                window.requestAnimationFrame(frameFunc);
            } else {
                el.scrollTop = end;
                resolve();
            }
        };
        window.requestAnimationFrame(frameFunc);
    });
}
