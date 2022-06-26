import getType from '../getType/getType';
/**
 * 检测变量（v）是否是布尔值。
 * @param v 待检测类型的变量。
 * @returns {boolean} 一个指示指定的变量是否为布尔值。
 * @see {@link https://hyhello.github.io/utils/#/isBoolean 在线文档}
 */
export default function isBoolean(v: unknown): boolean {
	return getType(v) === 'boolean';
}
