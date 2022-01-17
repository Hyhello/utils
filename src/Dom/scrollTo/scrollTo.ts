import isBrowser from '../../Base/isBrowser/isBrowser';

const cubic = (value: number): number => value ** 3; // 类似于 Math.pow(value, 3);
const easeInOutCubic = (value: number): number => (value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) * 2) / 2);

export default function scrollTo(el: HTMLElement, end = 0, duration = 500): Promise<void> {
	if (!isBrowser()) throw new Error('This method is not supported in the current environment');
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
