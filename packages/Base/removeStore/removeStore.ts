/**
 * 移除前端存储（window.localStorage | window.sessionStorage)
 * @param name
 * @param deep // 如果为 true，将采用window.localStorage 存储
 * @example
 * removeStore('name');
 */
export default function removeStore(name: string, deep?: boolean): void {
	if (deep) {
		window.localStorage.removeItem(name);
	} else {
		window.sessionStorage.removeItem(name);
	}
}
