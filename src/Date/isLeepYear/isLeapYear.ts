/**
 * 检测变量（year）是否是闰年。
 * @param year 待检测的变量。
 * @returns {boolean} 如果 year 是闰年，则返回 true，否则返回 false。
 * @see {@link https://hyhello.github.io/utils/#/isLeapYear 在线文档}
 */
export default function isLeapYear(year: number): boolean {
	return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
