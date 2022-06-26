import getType from '../getType/getType';
/**
 * 检测变量（v）是否是一个字符串。
 * @param input 待检测类型的变量。
 * @returns {boolean} 如果 v 为一个 字符串，那么返回 true，否则返回 false。
 * @see {@link https://hyhello.github.io/utils/#/isString 在线文档}
 */
export default function isString(input: unknown): boolean {
	return getType(input) === 'string';
}
