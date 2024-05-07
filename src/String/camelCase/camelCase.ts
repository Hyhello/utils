import uncapitalize from '../uncapitalize/uncapitalize';
/**
 * 将字符串变量转为驼峰。
 * @param str 待处理的字符串变量。
 * @param capital 是否大小驼峰。
 * @returns {string} 转换为驼峰。
 * @see {@link https://hyhello.github.io/utils/#/camelCase 在线文档}
 */
export default function camelCase(str: string, capital?: boolean): string {
    const reg = /[-_.\W\s]+(\w|$)/g;
    const n = str.replace(reg, function (_, $1) {
        return $1.toUpperCase();
    });
    return capital ? n : uncapitalize(n);
}
