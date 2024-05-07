/**
 * 获得随机颜色。
 * @returns {string} 返回随机颜色。
 * @see {@link https://hyhello.github.io/utils/#/randomColor 在线文档}
 */
export default function randomColor(): string {
    return `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`;
}
