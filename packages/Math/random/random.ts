/**
 * 获取随机值
 * @param min 最小值
 * @param max 最大值
 * @return 随机值
 * @example
 * // 获取1~10之间的随机数
 * random(1, 10)
 */
const random = function (min: number, max: number): number {
	const diff = Math.abs(max - min);
	return Math.random() * diff + Math.min(min, max);
};

export default random;
