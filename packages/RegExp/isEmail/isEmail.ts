/**
 * 校验是否是邮箱
 * @param str
 * @returns
 * isEmail('qqq@qq.com'); => true
 */
export default function isEmail(str: string): boolean {
	return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
}
