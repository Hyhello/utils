const json = require('@rollup/plugin-json');
const alias = require('@rollup/plugin-alias');
const eslint = require('@rollup/plugin-eslint');
const { babel } = require('@rollup/plugin-babel');
const replace = require('@rollup/plugin-replace');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const { nodeResolve } = require('@rollup/plugin-node-resolve');

const aliass = require('./alias');
const config = require('./config');
const packageJson = require('../package.json');

const version = process.env.VERSION || packageJson.version;
const env = process.env.NODE_ENV || 'development';

const baseConfig = {
	input: 'packages/index.ts',
	plugins: [
		alias({ ...aliass }),
		eslint({
			formatter: require('eslint-friendly-formatter'),
			include: ['packages/**/*.{js|jsx|ts|tsx}']
		}),
		nodeResolve({
			extensions: aliass.resolve
		}),
		commonjs(),
		json({
			exclude: ['node_modules/**']
		}),
		typescript({ sourceMap: env === 'development' }),
		babel({ babelHelpers: 'runtime', extensions: ['.js', '.ts'] }),
		replace({
			preventAssignment: true,
			values: {
				__VERSION__: version,
				__NAME__: packageJson.name,
				'process.env.NODE_ENV': JSON.stringify(env)
			}
		})
	]
};

module.exports = baseConfig;
