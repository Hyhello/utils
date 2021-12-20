declare namespace Utils {
	export function chunk<T>(input: T[], size?: number): T[] | T[][];
	export function compact<T>(input: T[]): T[];
}
