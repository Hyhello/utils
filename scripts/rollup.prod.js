const rollup = require('rollup');
const config = require('./config');
const rollupConfig = require('./rollup.base');
const packageJson = require('../package.json');
const filesize = require('rollup-plugin-filesize');
const { terser } = require('rollup-plugin-terser');
const components = require('./components');
const { del, pathResolve } = require('./utils');

// banner
const author = packageJson.author || 'Hyhello';
const version = process.env.VERSION || packageJson.version;

const banner =
	'/*!\n' +
	` * ${packageJson.name} v${version}\n` +
	` * @license (c) 2021-${new Date().getFullYear()} ${author}\n` +
	' * Released under the MIT License.\n' +
	' */';

const terserPlugin = terser({
	output: {
		ascii_only: true, // 仅支持ascii字符，非ascii字符将转成\u格式
		comments(node, comment) {
			const text = comment.value;
			const { type } = comment;
			if (type == 'comment2') {
				// multiline comment
				return /@preserve|@license|@(c)/i.test(text);
			}
		}
	},
	compress: {
		pure_funcs: ['func', 'console.log'] // 去掉console.log函数
	}
});

rollupConfig.plugins.push(terserPlugin, filesize());

// 构建componets
function buildComponents() {
	Object.keys(components).forEach((name) => {
		rollup
			.rollup({
				...rollupConfig,
				input: components[name]
			})
			.then((bundle) => {
				bundle.write({
					format: 'esm',
					name,
					file: `${config.prod.outputDir}/${name}.js`,
					sourcemap: false
				});
			});
	});
}

// 构建所有
function buildEntry() {
	const { outputDir, outputTypeList } = config.prod;
	const name = packageJson.name.replace(/^.*-(\w+)$/, '$1');
	del([outputDir]);
	buildComponents();
	rollup.rollup(rollupConfig).then((bundle) => {
		outputTypeList.forEach((type) => {
			bundle.write({
				format: type,
				name,
				file: `${outputDir}/utils.${type}.js`,
				sourcemap: false,
				banner,
                exports: 'named'
			});
		});
	});
}
buildEntry();
