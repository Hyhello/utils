/**
 * 是否为闰年
 * @param year
 * @returns
 * @example
 * isLeapYear(2020); => true;
 * isLeapYear(2021); => false;
 */
export default function isLeapYear(year: number): boolean {
	return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
