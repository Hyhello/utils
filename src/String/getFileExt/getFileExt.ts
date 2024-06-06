/**
 * 获取文件扩展名。
 * @param {string} filename 文件名
 * @returns {string} 文件名扩展名
 * @see {@link https://hyhello.github.io/utils/#/getFileExt 在线文档}
 */
export default function getFileExt(filename: string): string {
    const match = filename.match(/\.([^.]+)$/);
    return match ? match[1] : '';
}
