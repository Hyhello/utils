/**
 * 产生一个包括 min 与 max 之间的数。
 * @param min 下限。
 * @param max 上限。
 * @return {number} 返回随机数。
 * @see {@link https://hyhello.github.io/utils/#/random 在线文档}
 */
export default function random(min: number, max: number): number {
	const diff = Math.abs(max - min);
	return Math.random() * diff + Math.min(min, max);
}
