/**
 * 补零函数。
 * @param
 * @returns
 * @see {@link https://hyhello.github.io/utils/#/padZero 在线文档}
 */
export default function padZero(n: number): string {
    return ('00' + n).slice(-2);
}
