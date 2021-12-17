/**
 * 作者：Hyhello
 * 时间：2019-06-26
 * 描述：别名
 */
const { convertSep, pathResolve } = require('./utils');

module.exports = {
	resolve: ['.js', '.jsx', '.ts', '.tsx', '.json', '.scss'],
	entries: {
		pkg: convertSep(pathResolve('./packages'), '/')
	}
};
