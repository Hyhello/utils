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

export default {
	...DomMap,
	...BaseMap,
	...MathMap,
	...DateMap,
	...ArrayMap,
	...StoreMap,
	...StringMap,
	...RegExpMap,
	...FunctionMap
};

export * from './Dom';
export * from './Base';
export * from './Math';
export * from './Date';
export * from './Array';
export * from './Store';
export * from './String';
export * from './RegExp';
export * from './Function';
