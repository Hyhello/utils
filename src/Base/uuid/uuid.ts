/**
 * 获取uuid
 * @returns string
 * @example
 * uuid() => cb1e9d5a-7e6b-4b54-c4b5-ed91ad360674
 */
export default function uuid(): string {
	let d = new Date().getTime();
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		// eslint-disable-next-line no-bitwise
		const r = (d + Math.random() * 16) % 16 | 0;
		d = Math.floor(d / 16);
		// eslint-disable-next-line no-bitwise
		return (c === 'x' ? r : (r & 0x7) | 0x8).toString(16);
	});
}
