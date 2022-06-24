/* eslint-disable @typescript-eslint/ban-types */
type IStore = {
	get(name: string, deep?: boolean): string | object | null;
	set(name: string, value: string | object, deep?: boolean): void;
	clear(name: string, deep?: boolean): void;
	remove(name: string, deep?: boolean): void;
	clearAll(deep?: boolean): void;
};

/**
 * 前端存储（window.localStorage | window.sessionStorage)
 */
const store: IStore = {
	get(name: string, deep = false): string | object | null {
		const storage = deep ? window.localStorage : window.sessionStorage;
		try {
			return JSON.parse(<string>storage.getItem(name));
		} catch (e) {
			return storage.getItem(name);
		}
	},
	set(name: string, value: string | object, deep = false): void {
		const storage = deep ? window.localStorage : window.sessionStorage;
		if (typeof value === 'object') {
			value = JSON.stringify(value);
		}
		storage.setItem(name, value);
	},
	remove(name: string, deep = false): void {
		const storage = deep ? window.localStorage : window.sessionStorage;
		storage.removeItem(name);
	},
	clear(name: string, deep = false): void {
		const storage = deep ? window.localStorage : window.sessionStorage;
		storage.removeItem(name);
	},
	clearAll(deep = false): void {
		const storage = deep ? window.localStorage : window.sessionStorage;
		storage.clear();
	}
};

export default store;
