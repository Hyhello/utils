/**
 * 获取一个 uuid（xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx）
 * @returns {string} 返回一个 uuid。
 * @see {@link https://hyhello.github.io/utils/#/uuid 在线文档}
 */
export default function uuid(): string {
    let d = new Date().getTime();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        // eslint-disable-next-line no-bitwise
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        // eslint-disable-next-line no-bitwise
        return (c === 'x' ? r : (r & 0x7) | 0x8).toString(16);
    });
}
