/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
type ArgType = string | number | { [propName: string]: unknown };

interface IFunction {
	(arg1: ArgType, arg2: ArgType): number;
}

type IFunctions = {
	(this: void, ...args: unknown[]): void;
};

type IParams = {
	[propName: string]: unknown;
};

interface IURL {
	source: string;
	protocol: string;
	host: string;
	port: string;
	origin: string;
	pathname: string;
	query: string;
	params: IParams;
	path: string;
	hash: string;
	file: string;
	relative: string;
	segments: {
		[index: number]: string;
	};
}

type IStore = {
	get(name: string, deep?: boolean): string | object | null;
	set(name: string, value: string | object, deep?: boolean): void;
	clear(name: string, deep?: boolean): void;
	clearAll(deep?: boolean): void;
};

type ICookie = {
	get(name: string): string | null;
	set(name: string, value: string, time?: number): void;
	clear(name: string): void;
};

declare namespace utils {
	export const store: IStore;
	export const cookie: ICookie;
	export function debounce(func: IFunctions, wait: number, immediate = false): IFunctions;
	export function throttle(func: IFunctions, wait: number, immediate = false): IFunctions;
	export function chunk<T>(input: T[], size?: number): T[] | T[][];
	export function compact<T>(input: T[]): T[];
	export function compare(key?: string | number): IFunction;
	export function oneOf<T>(target: T, list: Array<T>): boolean;
	export function rangeArr<T>(n: number, iteratee?: T | undefined): Array<T | undefined>;
	export function toArray<T>(likeArr: ArrayLike<T>): Array<T>;
	export function unique<T>(arr: Array<T>): Array<T>;
	export function get(obj: object, path: string | Array<string | number>, defaultValue?: unknown): any;
	export function getStore(name: string, deep?: boolean): string | null;
	export function getType(v: unknown): string;
	export function isArray(v: unknown): boolean;
	export function isBoolean(v: unknown): boolean;
	export function isElement(el: unknown): boolean;
	export function isEmpty(val: unknown): boolean;
	export function isFunction(input: unknown): boolean;
	export function isInteger(n: unknown): boolean;
	export function isNative(ctor: Function): boolean;
	export function isNumber(v: unknown): boolean;
	export function isObject(arg: unknown): boolean;
	export function isPlainObject(v: unknown): boolean;
	export function isPrimitive(v?: unknown): boolean;
	export function isPromise(input: unknown): boolean;
	export function isUndefined(v?: unknown): boolean;
	export function removeStore(name: string, deep?: boolean): void;
	export function setStore(name: string, value: string | unknown, deep?: boolean): void;
	export function uuid(): string;
	export function formatDate(date: number | string | Date, fmt = 'yyyy-MM-dd hh:mm:ss'): string;
	export function isLeapYear(year: number): boolean;
	export function addClass(el: HTMLElement, cls: string): void;
	export function hasClass(el: HTMLElement, cls: string): boolean;
	export function maybeAddPx(input: string | number): string;
	export function off(el: HTMLElement, type: string, listener: EventListenerOrEventListenerObject): void;
	export function offset(el: HTMLElement): { x: number; y: number };
	export function on(el: HTMLElement, type: string, listener: EventListenerOrEventListenerObject): void;
	export function once(el: HTMLElement, type: string, listener: EventListener): void;
	export function removeClass(el: HTMLElement, cls: string): void;
	export function scrollTo(el: HTMLElement, end = 0, duration = 500): Promise<void>;
	export function toggleClass(el: HTMLElement, cls: string): void;
	export function noop(): void;
	export function max(arr: Array<number>): number;
	export function min(arr: Array<number>): number;
	export function random(minVal: number, maxVal: number): number;
	export function toFixed(num: number, fixed?: number): string;
	export function isChinese(str: string): boolean;
	export function isEmail(str: string): boolean;
	export function isIdCard(str: string | number): boolean;
	export function isTel(str: number | string): boolean;
	export function isUrl(str: string): boolean;
	export function camelCase(str: string, capital?: boolean): string;
	export function capitalize(str: string): string;
	export function ltrim(input: string): string;
	export function parseUrl(url: string): IURL;
	export function pathResolve(basePath: string, ...args: string[]): string;
	export function rtrim(input: string): string;
	export function split(val: number | string, index = 3, separated = ','): string;
	export function template(str: string, opt: object): string;
	export function toNumber(str: string): number;
	export function trim(input: string): string;
	export function uncapitalize(str: string): string;
}

export default utils;

export as namespace utils;
