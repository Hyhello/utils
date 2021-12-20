/* eslint-disable @typescript-eslint/ban-ts-comment */
const reg = /-/g;

/**
 * 格式化日期
 * @param date
 * @param fmt
 * @returns
 * @example
 * formateDate(new Date()) => 2021-12-07 15:42:36
 */
export default function formatDate(date: number | string | Date, fmt = 'yyyy-MM-dd hh:mm:ss'): string {
	// 解决ios下面-无法被new Date问题
	if (typeof date === 'string' && reg.test(date)) {
		date = date.replace(reg, '/');
	}
	if (!(date instanceof Date)) {
		date = new Date(date);
	}
	const o = {
		'M+': date.getMonth() + 1, // 月份
		'd+': date.getDate(), // 日
		'h+': date.getHours(), // 小时
		'm+': date.getMinutes(), // 分
		's+': date.getSeconds(), // 秒
		'q+': Math.floor((date.getMonth() + 3) / 3) // 季度
	};
	// 格式化年
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, `${date.getFullYear()}`.substr(4 - RegExp.$1.length));
	}
	// 格式化毫秒
	if (/(S+)/.test(fmt)) {
		const tmp = date.getMilliseconds();
		fmt = fmt.replace(RegExp.$1, `000${tmp}`.substr(`${tmp}`.length));
	}
	// 格式化其它
	for (const k in o) {
		if (new RegExp(`(${k})`).test(fmt)) {
			// @ts-ignore
			fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length));
		}
	}
	return fmt;
}
