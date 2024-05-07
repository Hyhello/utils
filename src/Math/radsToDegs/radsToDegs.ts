/**
 * 将弧度（rad）转为角度（deg）
 * @param rad 待处理的弧度。
 * @returns {number} 返回一个角度。
 * @see {@link https://hyhello.github.io/utils/#/radsToDegs 在线文档}
 */
export default function radsToDegs(rad: number): number {
    return (rad * 180) / Math.PI;
}
