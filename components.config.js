const path = require('path');
const glob = require('glob');

const components = glob.sync('./packages/**/*.ts', { ignore: ['./packages/**/index.ts'] });

// 导出
module.exports = components.reduce((obj, item) => {
	const name = path.basename(item, '.ts');
	obj[name] = item;
	return obj;
}, {});
