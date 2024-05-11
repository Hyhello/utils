/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import isInteger from '../isInteger/isInteger';

/**
 * 根据 obj 对象的 path 路径设置/更新值(value)。
 * @param obj 要设置的对象。
 * @param path 属性的路径。
 * @param value 需设置的值。
 * @returns {object} 返回处理后的值。
 * @see {@link https://hyhello.github.io/utils/#/set 在线文档}
 */
export default function set(obj: object, path: string | Array<string | number>, value: unknown): any {
    const pathList: any[] = !Array.isArray(path) ? path.replace(/\[/g, '.').replace(/\]/g, '').split('.') : path;
    const len = pathList.length;

    pathList.reduce((o, k, i, _) => {
        const index = i + 1;
        if (len === index) {
            o[k] = value;
            return null;
        }
        if (k in o) return o[k];
        o[k] = isInteger(+_[index]) ? [] : {};
        return o[k];
    }, obj);
    return obj;
}
