import isNumber from '../isNumber/isNumber';

/**
 * 检测变量（v）是否是整数。
 * @param n 待检测类型的变量。
 * @returns {boolean} 一个指示指定的变量是否为 整数。
 * @see {@link https://hyhello.github.io/utils/#/isInteger 在线文档}
 */
export default function isInteger(n: unknown): boolean {
	try {
		return Number.isInteger(n);
	} catch (e) {
		if (!isNumber(n)) return false;
		return typeof n === 'number' && Math.floor(n) === n;
	}
}
