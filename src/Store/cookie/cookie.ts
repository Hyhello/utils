/* eslint-disable @typescript-eslint/ban-types */
type ICookie = {
	get(name: string): string | null;
	set(name: string, value: string, time?: number): void;
	clear(name: string): void;
	remove(name: string): void;
};
/**
 * 前端 cookie。
 * @see {@link https://hyhello.github.io/utils/#/cookie 在线文档}
 */
const cookie: ICookie = {
	get(name: string): string | null {
		name = window.decodeURIComponent(name);
		const match = new RegExp(`\\b${name}=([^;]*)\\b`).exec(document.cookie);
		if (!match) return null;
		return window.decodeURIComponent(match[1]);
	},
	set(name: string, value: string, day = 30): void {
		name = window.encodeURIComponent(name);
		value = window.encodeURIComponent(value);
		document.cookie = `${name}=${value}; expires=${new Date().getTime() + day * 24 * 60 * 60 * 1000}; path=/;`;
	},
	clear(name: string): void {
		this.set(name, '', -1);
	},
	remove(name: string): void {
		this.set(name, '', -1);
	}
};

export default cookie;
