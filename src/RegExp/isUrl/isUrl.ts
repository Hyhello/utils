/**
 * 检测字符串（str）是否是 url。
 * @param str 待检测的变量。
 * @returns {boolean} 如果 str 是 url，那么返回 true，否则返回 false。
 * @see {@link https://hyhello.github.io/utils/#/isUrl 在线文档}
 */
export default function isUrl(str: string): boolean {
	return /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/.test(
		str
	);
}
