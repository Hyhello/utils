/**
 *
 * @param v
 * @returns
 * isUndefined() true
 *
 */
export default function isUndefined(v?: unknown): boolean {
	return v === undefined || v === null;
}
