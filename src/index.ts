/**
 * 作者：Hyhello
 * 时间：2019-07-13
 * 描述：初始化
 */
import * as DomMap from './Dom';
import * as BaseMap from './Base';
import * as MathMap from './Math';
import * as DateMap from './Date';
import * as ArrayMap from './Array';
import * as StoreMap from './Store';
import * as StringMap from './String';
import * as RegExpMap from './RegExp';
import * as FunctionMap from './Function';

export * from './Dom';
export * from './Base';
export * from './Math';
export * from './Date';
export * from './Array';
export * from './Store';
export * from './String';
export * from './RegExp';
export * from './Function';

export default {
    // #Array classify
    oneOf: ArrayMap.oneOf,
    chunk: ArrayMap.chunk,
    unique: ArrayMap.unique,
    toArray: ArrayMap.toArray,
    compact: ArrayMap.compact,
    compare: ArrayMap.compare,
    rangeArr: ArrayMap.rangeArr,
    flatten: ArrayMap.flatten,

    // #Base classify
    merge: BaseMap.merge,
    get: BaseMap.get,
    set: BaseMap.set,
    uuid: BaseMap.uuid,
    isEmpty: BaseMap.isEmpty,
    getType: BaseMap.getType,
    isArray: BaseMap.isArray,
    isString: BaseMap.isString,
    isNative: BaseMap.isNative,
    isObject: BaseMap.isObject,
    isNumber: BaseMap.isNumber,
    isBrowser: BaseMap.isBrowser,
    isElement: BaseMap.isElement,
    isBoolean: BaseMap.isBoolean,
    isPromise: BaseMap.isPromise,
    isInteger: BaseMap.isInteger,
    deepClone: BaseMap.deepClone,
    isFunction: BaseMap.isFunction,
    isUndefined: BaseMap.isUndefined,
    isPrimitive: BaseMap.isPrimitive,
    isPlainObject: BaseMap.isPlainObject,

    // #Date classify
    formatDate: DateMap.formatDate,
    isLeapYear: DateMap.isLeapYear,
    beautifyTime: DateMap.beautifyTime,

    // #Dom classify
    on: DomMap.on,
    off: DomMap.off,
    once: DomMap.once,
    offset: DomMap.offset,
    scrollTo: DomMap.scrollTo,
    hasClass: DomMap.hasClass,
    addClass: DomMap.addClass,
    hasFocus: DomMap.hasFocus,
    contains: DomMap.contains,
    stripHtml: DomMap.stripHtml,
    maybeAddPx: DomMap.maybeAddPx,
    toggleClass: DomMap.toggleClass,
    removeClass: DomMap.removeClass,
    getStyle: DomMap.getStyle,
    setStyle: DomMap.setStyle,
    download: DomMap.download,

    // #Function classify
    noop: FunctionMap.noop,
    after: FunctionMap.after,
    before: FunctionMap.before,
    throttle: FunctionMap.throttle,
    debounce: FunctionMap.debounce,
    curry: FunctionMap.curry,
    pipe: FunctionMap.pipe,
    cacheFn: FunctionMap.cacheFn,

    // #Math classify
    min: MathMap.min,
    max: MathMap.max,
    random: MathMap.random,
    toFixed: MathMap.toFixed,
    degsToRads: MathMap.degsToRads,
    radsToDegs: MathMap.radsToDegs,
    randomColor: MathMap.randomColor,
    inRange: MathMap.inRange,
    padZero: MathMap.padZero,

    // #RegExp classify
    isUrl: RegExpMap.isUrl,
    isTel: RegExpMap.isTel,
    isEmail: RegExpMap.isEmail,
    isMobile: RegExpMap.isMobile,
    isIdCard: RegExpMap.isIdCard,
    isChinese: RegExpMap.isChinese,

    // #Store classify
    store: StoreMap.store,
    cookie: StoreMap.cookie,

    // #String classify
    trim: StringMap.trim,
    ltrim: StringMap.ltrim,
    rtrim: StringMap.rtrim,
    split: StringMap.split,
    toSecret: StringMap.toSecret,
    toNumber: StringMap.toNumber,
    parseUrl: StringMap.parseUrl,
    template: StringMap.template,
    kebabCase: StringMap.kebabCase,
    camelCase: StringMap.camelCase,
    capitalize: StringMap.capitalize,
    pathResolve: StringMap.pathResolve,
    uncapitalize: StringMap.uncapitalize,
    getFileExt: StringMap.getFileExt
};
