/**
 * 最简单的 template，类似于 artTemplate，但比它简单。
 * @param str 待处理的字符串变量。
 * @param opt 变量值对象。
 * @returns {string} 返回处理后的结果。
 * @see {@link https://hyhello.github.io/utils/#/template 在线文档}
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export default function template(str: string, opt: object): string {
    return str.replace(/\{\s*(\w+?)\s*\}/gi, function (_, $1) {
        // eslint-disable-next-line @typescript-eslint/ban-types
        return opt[<keyof typeof opt>$1] || '';
    });
}
