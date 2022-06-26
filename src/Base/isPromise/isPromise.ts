import isObject from '../isObject/isObject';
import isFunction from '../isFunction/isFunction';

type IObj = {
	then?: unknown;
};

/**
 * 检测变量（v）是否是一个 Promise。
 * @param input 待检测类型的变量。
 * @returns {boolean} 如果 v 为一个 Promise，那么返回 true，否则返回 false。
 * @see {@link https://hyhello.github.io/utils/#/isPromise 在线文档}
 */
export default function isPromise(input: unknown): boolean {
	// isObject(input) || isFunction(input); 初始promise 或者 promise.then返回的
	return !!input && (isObject(input) || isFunction(input)) && isFunction((<IObj>input).then);
}
