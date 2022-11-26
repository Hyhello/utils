// 阈值集合
const thresholdList = [
	{
		label: '秒',
		value: 1
	},
	{
		label: '分钟',
		value: 60
	},
	{
		label: '小时',
		value: 3600
	},
	{
		label: '天',
		value: 24 * 3600
	},
	{
		label: '星期',
		value: 7 * 24 * 3600
	},
	{
		label: '个月',
		value: 30 * 24 * 3600
	},
	{
		label: '年',
		value: 12 * 30 * 24 * 3600
	}
];

const reg = /-/g; // 横杠

/**
 * 人性化/美化时间。
 * @param date 待处理的时间。
 * @returns {string} 返回美化后的时间。
 * @see {@link https://hyhello.github.io/utils/#/beautifyTime 在线文档}
 */
export default function beautifyTime(date: number | string | Date): string {
	if (date == null) return new Date(NaN).toString();
	// 解决ios下面-无法被new Date问题
	if (typeof date === 'string' && reg.test(date)) {
		date = date.replace(reg, '/');
	}
	if (!(date instanceof Date)) {
		date = new Date(date);
	}
	let result = [];
	// 时间差
	const mistiming = Date.now() - date.getTime();
	const postfix = mistiming > 0 ? '前' : '后'; // 结果
	const diff = Math.round(Math.abs(mistiming / 1000));

	// 小于10s 则判定为刚刚
	if (diff <= 10) return '刚刚';

	result.push(postfix);

	let len = thresholdList.length;

	while (len--) {
		const threshold = thresholdList[len];
		if (diff >= threshold.value) {
			const n = Math.floor(diff / threshold.value);
			const unit = threshold.label;
			result = [n, unit].concat(result);
			break;
		}
	}
	return result.join('');
}
