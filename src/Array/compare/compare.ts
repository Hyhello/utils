import isObject from '../../Base/isObject/isObject';
import isUndefined from '../../Base/isUndefined/isUndefined';

type ArgType = string | number | { [propName: string]: unknown };

interface IFunction {
	(arg1: ArgType, arg2: ArgType): number;
}
/**
 * 服务于sort，用于排序
 * @param key
 * @returns
 * @example
 * [3, 2, 1].sort(compare()); => [1, 2, 3]
 * [{ name: 1 }, { name: 3 }, { name: 2 }].sort(compare('name')); => [{ name: 1 }, { name: 2 }, { name: 3 }]
 */
export default function compare(key?: string | number): IFunction {
	const hasKey = !isUndefined(key);
	return function (arg1: ArgType, arg2: ArgType): number {
		const target1 = hasKey && isObject(arg1) ? arg1[<keyof ArgType>key] : arg1;
		const target2 = hasKey && isObject(arg2) ? arg2[<keyof ArgType>key] : arg2;
		return +target1 - +target2;
	};
}
