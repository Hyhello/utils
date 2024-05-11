/**
 * 补零函数。
 * @param n {Number} 需要补零的数值
 * @returns { string } 返回补零后的值
 * @see {@link https://hyhello.github.io/utils/#/padZero 在线文档}
 */
export default function padZero(n: number): string {
    return ('00' + n).slice(-2);
}
