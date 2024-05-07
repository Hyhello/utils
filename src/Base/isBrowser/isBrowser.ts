/**
 * 判断当前环境是否是浏览器。
 * @returns {boolean} 当前运行环境是否是浏览器端。
 * @see {@link https://hyhello.github.io/utils/#/isBrowser 在线文档}
 */
export default function isBrowser(): boolean {
    return typeof window === 'object' && typeof document === 'object';
}
