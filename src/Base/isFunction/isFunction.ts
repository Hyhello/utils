/**
 * 判断是否是一个函数
 * @param input
 * @returns boolean
 * @example
 * isFunction(function () {}); => true
 * isFunction(true); => false;
 * isFunction(new Function('a')); => true
 */

type IFunction = {
	(input: unknown): boolean;
	nodeType?: unknown;
};

export default function isFunction(input: unknown): boolean {
	return typeof input === 'function' && typeof (<IFunction>input).nodeType !== 'number';
}
