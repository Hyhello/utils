const cubic = (value: number): number => value ** 3; // 类似于 Math.pow(value, 3);
const easeInOutCubic = (value: number): number => (value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) * 2) / 2);

const rAF = window.requestAnimationFrame || ((func) => setTimeout(func, 16));

export default function scrollTo(el: HTMLElement, end = 0, duration = 500): Promise<void> {
	return new Promise((resolve) => {
		const beginTime = Date.now();
		const beginValue = el.scrollTop;
		const diff = beginValue - end;
		const frameFunc = () => {
			const progress = (Date.now() - beginTime) / duration;
			if (progress < 1) {
				el.scrollTop = beginValue - easeInOutCubic(progress) * diff;
				rAF(frameFunc);
			} else {
				el.scrollTop = end;
				resolve();
			}
		};
		rAF(frameFunc);
	});
}
