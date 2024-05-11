const isNaN = Number.isNaN;
/**
 * 可能将值（v）添加后缀 px。
 * @param v 待处理的值。
 * @returns {string} 可能返回一个后缀为 px 的字符串。
 * @see {@link https://hyhello.github.io/utils/#/maybeAddPx 在线文档}
 */
export default function maybeAddPx(v: string | number): string {
    return isNaN(+v) ? String(v) : `${v}px`;
}
