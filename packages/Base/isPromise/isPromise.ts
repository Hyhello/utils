import isObject from '../isObject/isObject';
import isFunction from '../isFunction/isFunction';

type IObj = {
	then?: unknown;
};

/**
 * 判断是否是promise
 * @param input
 * @returns boolean
 * @example
 * isPromise(true); => false;
 * isPromise(new Promise(resolve => resolve)); => true;
 */
export default function isPromise(input: unknown): boolean {
	// isObject(input) || isFunction(input); 初始promise 或者 promise.then返回的
	return !!input && (isObject(input) || isFunction(input)) && isFunction((<IObj>input).then);
}
