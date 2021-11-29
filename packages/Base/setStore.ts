import isString from './isString';

/**
 * 前端存储（window.localStorage | window.sessionStorage)
 * @param name key
 * @param value value
 * @param deep // 如果为 true，将采用window.localStorage 存储
 * @example
 * setStore('name', '12', true); window.localStorage
 * setStore('name', '12'); window.sessionStorage
 */
export default function setStore(name: string, value: string | unknown, deep?: boolean): void {
	if (!isString(value)) {
		value = JSON.stringify(value);
	}
	if (deep) {
		window.localStorage.setItem(name, value as string);
	} else {
		window.sessionStorage.setItem(name, value as string);
	}
}
