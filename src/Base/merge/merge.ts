import isPlainObject from '../isPlainObject/isPlainObject';

/**
 * 将源对象的属性合并到目标对象中。
 * @param {T} target 目标对象，源对象的属性将被合并到这个对象中。这个对象会被原地修改。
 * @param {U} source 源对象，这个对象的属性将被合并到目标对象中。
 * @returns {T & U} 更新后的目标对象，其中包含了源对象的合并属性。
 * @see {@link https://hyhello.github.io/utils/#/merge 在线文档}
 */
export default function merge<T extends object, U extends object>(target: T, source: U): T & U {
    const sourceKeys = Object.keys(source) as (keyof T)[];

    for (let i = 0, ii = sourceKeys.length; i < ii; i++) {
        const key = sourceKeys[i];
        const sourceValue = source[key as unknown as keyof U];
        const targetValue = target[key];

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (sourceValue === targetValue || sourceValue === undefined) continue;

        if (Array.isArray(sourceValue)) {
            target[key] = merge(Array.isArray(targetValue) ? targetValue : [], sourceValue) as any;
        } else if (isPlainObject(sourceValue)) {
            target[key] = merge(isPlainObject(targetValue) ? targetValue : {}, sourceValue) as any;
        } else {
            target[key] = sourceValue as any;
        }
    }

    return target as T & U;
}
