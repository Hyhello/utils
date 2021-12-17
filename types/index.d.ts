declare namespace Utils {
	function chunk<T>(input: T[], size?: number): T[] | T[][];
	function compact<T>(input: T[]): T[];
}

export default Utils;
