/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/**
 * 根据 obj 对象的 path 路径获取值。如果解析 value 是 undefined 会以 defaultValue 取代。
 * @param obj 要检索的对象。
 * @param path 要获取属性的路径。
 * @param defaultValue 如果解析值是 undefined ，这值会被返回。
 * @returns {any} 返回解析的值。
 * @see {@link https://hyhello.github.io/utils/#/get 在线文档}
 */
export default function get(obj: object, path: string | Array<string | number>, defaultValue?: unknown): any {
    const pathList: any[] = !Array.isArray(path) ? path.replace(/\[/g, '.').replace(/\]/g, '').split('.') : path;
    return pathList.reduce((o, k) => o && o[k], obj) || defaultValue;
}
