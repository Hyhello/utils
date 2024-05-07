/**
 * 指定位置将字符串转为 *。
 * @param str 待处理的字符串变量。
 * @param start 可选。 要抽取的片断的起始下标，第一个字符位置为 0。如果为负数，则从尾部开始截取。
 * @param end 必须。 紧接着要截取的片段结尾的下标。若未指定此参数，则要提取的子串包括 start 到原字符串结尾的字符串。如果该参数是负数，那么它规定的是从字符串的尾部开始算起的位置。
 * @returns {string} 返回处理后的结果。
 * @see {@link https://hyhello.github.io/utils/#/toSecret 在线文档}
 */
export default function toSecret(str: string, ...args: number[]): string {
    if (!str) return str;
    let [start = 0, end] = args;
    if (end == null) {
        end = start;
        start = 0;
    }
    end = Math.min(str.length, end);
    const diffVal = Math.abs(end - start);
    return str.slice(0, start) + '*'.repeat(diffVal) + str.slice(end);
}
