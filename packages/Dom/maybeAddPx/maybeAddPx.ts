/**
 * 是否添加px
 * @param input
 * @returns
 * maybeAddPx('auto'); => 'auto'
 * maybeAddPx('100%'); => '100%'
 * maybeAddPx('100'); => '100px'
 */
export default function maybeAddPx(input: string | number): string {
	return Number.isNaN(+input) ? String(input) : `${input}px`;
}
