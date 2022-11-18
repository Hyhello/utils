import { isArray } from '@/Base';

type ReturnType<T extends any[]> = T extends [infer L, ...infer R]
	? [...(L extends any[] ? ReturnType<L> : [L]), ...ReturnType<R>]
	: [];

/**
 * 数组扁平化处理
 * @param 待处理集合
 * @returns 扁平化处理后的结果
 * @see {@link https://hyhello.github.io/utils/#/flatten 在线文档}
 */
export default function flatten<T extends any[]>(arr: T): ReturnType<T> {
	return arr.reduce((prev, next) => prev.concat(isArray(next) ? flatten(next) : next), []);
}
