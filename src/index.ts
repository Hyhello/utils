/**
 * 作者：Hyhello
 * 时间：2019-07-13
 * 描述：初始化
 */
import { store, cookie } from './Store';
import { isLeapYear, formatDate } from './Date';
import { min, max, toFixed, random, randomColor } from './Math';
import { noop, after, before, debounce, throttle } from './Function';
import { isTel, isUrl, isEmail, isIdCard, isChinese, isMobile } from './RegExp';
import { oneOf, chunk, unique, compare, rangeArr, toArray, compact } from './Array';
import {
	on,
	off,
	once,
	offset,
	contains,
	stripHtml,
	hasFocus,
	addClass,
	hasClass,
	scrollTo,
	maybeAddPx,
	toggleClass,
	removeClass
} from './Dom';
import {
	trim,
	rtrim,
	ltrim,
	split,
	toNumber,
	parseUrl,
	template,
	camelCase,
	capitalize,
	pathResolve,
	uncapitalize
} from './String';
import {
	get,
	uuid,
	getType,
	isArray,
	isBrowser,
	isEmpty,
	isString,
	isElement,
	isNative,
	isObject,
	isNumber,
	isPromise,
	isBoolean,
	isFunction,
	isInteger,
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
	on,
	off,
	once,
	min,
	max,
	uuid,
	offset,
	contains,
	stripHtml,
	isBrowser,
	hasFocus,
	chunk,
	split,
	store,
	cookie,
	after,
	before,
	scrollTo,
	unique,
	isUrl,
	isIdCard,
	isEmpty,
	compare,
	template,
	toNumber,
	isTel,
	isEmail,
	isMobile,
	isPromise,
	compact,
	toFixed,
	parseUrl,
	isArray,
	toArray,
	addClass,
	hasClass,
	rangeArr,
	getType,
	isNative,
	isObject,
	isNumber,
	isString,
	randomColor,
	debounce,
	throttle,
	isBoolean,
	isInteger,
	isLeapYear,
	formatDate,
	isElement,
	camelCase,
	isFunction,
	isChinese,
	maybeAddPx,
	pathResolve,
	capitalize,
	isUndefined,
	isPrimitive,
	toggleClass,
	removeClass,
	uncapitalize,
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
	on,
	off,
	once,
	min,
	max,
	uuid,
	offset,
	contains,
	stripHtml,
	isBrowser,
	hasFocus,
	chunk,
	split,
	store,
	cookie,
	after,
	before,
	scrollTo,
	unique,
	isUrl,
	isIdCard,
	isEmpty,
	compare,
	template,
	toNumber,
	isTel,
	randomColor,
	isEmail,
	isMobile,
	isPromise,
	compact,
	toFixed,
	parseUrl,
	isArray,
	toArray,
	addClass,
	hasClass,
	rangeArr,
	getType,
	isNative,
	isObject,
	isNumber,
	isString,
	debounce,
	throttle,
	isBoolean,
	isInteger,
	isLeapYear,
	formatDate,
	isElement,
	camelCase,
	isFunction,
	isChinese,
	maybeAddPx,
	pathResolve,
	capitalize,
	isUndefined,
	isPrimitive,
	toggleClass,
	removeClass,
	uncapitalize,
	isPlainObject
};
