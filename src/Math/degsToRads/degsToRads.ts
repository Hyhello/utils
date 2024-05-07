/**
 * 将角度（deg）转为弧度（rad）
 * @param deg 待处理的角度。
 * @returns {number} 返回一个弧度。
 * @see {@link https://hyhello.github.io/utils/#/degsToRads 在线文档}
 */
export default function degsToRads(deg: number): number {
    return (deg * Math.PI) / 180;
}
