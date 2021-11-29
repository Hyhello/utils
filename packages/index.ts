/**
 * 作者：Hyhello
 * 时间：2019-07-13
 * 描述：初始化
 */
import { noop } from './Function';
import { maybeAddPx } from './Dom';
import { min, max, toFixed, random } from './Math';
import { oneOf, chunk, rangeArr, compact } from './Array';
import { rtrim, ltrim, trim, camelCase, pathResolve } from './String';
import {
	get,
	uuid,
	getStore,
	setStore,
	getType,
	isArray,
	isString,
	isNative,
	isObject,
	isNumber,
	isBoolean,
	removeStore,
	isUndefined,
	isPrimitive,
	isPlainObject
} from './Base';

export default {
	rtrim,
	ltrim,
	trim,
	random,
	oneOf,
	noop,
	get,
	min,
	max,
	uuid,
	chunk,
	getStore,
	setStore,
	compact,
	toFixed,
	camelCase,
	isArray,
	rangeArr,
	getType,
	isNative,
	isObject,
	isNumber,
	isString,
	isBoolean,
	maybeAddPx,
	pathResolve,
	removeStore,
	isUndefined,
	isPrimitive,
	isPlainObject
};

export {
	rtrim,
	ltrim,
	trim,
	random,
	oneOf,
	noop,
	get,
	min,
	max,
	uuid,
	chunk,
	getStore,
	setStore,
	compact,
	toFixed,
	camelCase,
	isArray,
	rangeArr,
	getType,
	isNative,
	isObject,
	isNumber,
	isString,
	isBoolean,
	pathResolve,
	maybeAddPx,
	removeStore,
	isUndefined,
	isPrimitive,
	isPlainObject
};
