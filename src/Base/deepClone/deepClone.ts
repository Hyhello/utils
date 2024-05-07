/* eslint-disable @typescript-eslint/no-explicit-any */
const hasOwn = Object.prototype.hasOwnProperty;
/**
 * 对象深拷贝。
 * @param data 待拷贝的值。
 * @returns {any} 深拷贝后的值。
 * @see {@link https://hyhello.github.io/utils/#/deepClone 在线文档}
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function deepClone(data: any): any {
    let result: any;
    if (data === null || typeof data !== 'object') return data;
    if (data instanceof Date) {
        result = new Date();
        result.setTime(data.getTime());
    } else if (typeof data === 'object') {
        result = data instanceof Array ? [] : {};
        for (const key in data) {
            if (hasOwn.call(data, key)) {
                result[key] = deepClone(data[key]);
            }
        }
    }
    return result;
}
