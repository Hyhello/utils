const { toString } = Object.prototype;
/**
 * 检测变量（v）的数据类型。
 * @param v 待检测类型的变量。
 * @returns {string} 返回对应的数据类型。
 * @see {@link https://hyhello.github.io/utils/#/getType 在线文档}
 */
export default function getType(v: unknown): string {
	return toString.call(v).slice(8, -1).toLowerCase();
}
