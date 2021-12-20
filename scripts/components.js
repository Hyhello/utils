const path = require('path');
const glob = require('fast-glob');

const components = glob.sync('./src/**/*.ts', { ignore: ['./src/**/index.ts', './src/**/*.spec.ts'] });

// 导出
module.exports = components.reduce((obj, item) => {
	const name = path.basename(item, '.ts');
	obj[name] = item;
	return obj;
}, {});
