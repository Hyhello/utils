/**
 * 将角度转为弧度
 * @returns
 * @example
 *
 */
export default function degsToRads(deg: number): number {
	return (deg * Math.PI) / 180;
}
