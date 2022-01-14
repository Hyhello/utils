/**
 * 将弧度转换为角度
 * @returns
 * @example
 *
 */
export default function radsToDegs(rad: number): number {
	return (rad * 180) / Math.PI;
}
