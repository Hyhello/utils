/**
 * 前端存储（window.localStorage | window.sessionStorage)
 * @param name key
 * @param value value
 * @param deep // 如果为 true，将采用window.localStorage 存储
 * @example
 * getStore('name'); => null
 */
export default function getStore(name: string, deep?: boolean): string | null {
	if (deep) {
		return window.localStorage.getItem(name);
	}
	return window.sessionStorage.getItem(name);
}
