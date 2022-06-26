type IFunction = {
	(input: unknown): boolean;
	nodeType?: unknown;
};

/**
 * 检测变量（v）是否是一个函数。
 * @param input 待检测类型的变量。
 * @returns {boolean} 一个指示指定的变量是否为 函数。
 * @see {@link https://hyhello.github.io/utils/#/isFunction 在线文档}
 */
export default function isFunction(input: unknown): boolean {
	return typeof input === 'function' && typeof (<IFunction>input).nodeType !== 'number';
}
