// eslint-disable-next-line @typescript-eslint/ban-types
type IFunc<T extends unknown[], R> = (this: unknown, ...args: T) => R;

type ICallback<T> = (this: unknown, ...args: T[]) => any;

/**
 * 函数柯里化
 * @param func 执行函数。
 * @param args 函数（func）参数集合。
 * @returns 待执行函数
 * @see {@link https://hyhello.github.io/utils/#/curry 在线文档}
 */
export default function curry<T extends unknown[], R>(func: IFunc<T, R>, ...args: T[number][]): ICallback<T[number]> {
    return function (this, ...params) {
        const argu = [...args, ...params];
        if (func.length > argu.length) {
            return curry<T, R>.call(this, func, ...argu);
        } else {
            return func.call(this, ...(argu as T));
        }
    };
}
