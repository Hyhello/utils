import isBrowser from '../../Base/isBrowser/isBrowser';
/**
 * 是否添加px
 * @param input
 * @returns
 * maybeAddPx('auto'); => 'auto'
 * maybeAddPx('100%'); => '100%'
 * maybeAddPx('100'); => '100px'
 */
export default function maybeAddPx(input: string | number): string {
	if (!isBrowser()) throw new Error('This method is not supported in the current environment');
	return Number.isNaN(+input) ? String(input) : `${input}px`;
}
