const { toString } = Object.prototype;
/**
 *
 * @param v
 * @returns
 * @example
 * getType({})  object
 * getType(true) boolean
 */
export default function getType(v: unknown): string {
	return toString.call(v).slice(8, -1).toLowerCase();
}
