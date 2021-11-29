module.exports = {
	presets: [
		[
			'@babel/env',
			{
				modules: false,
				targets: {
					browsers: ['> 1%', 'last 2 versions', 'not ie <= 8']
				}
			}
		]
	],
	plugins: ['@babel/plugin-transform-runtime'],
	env: {
		test: {
			plugins: ['@babel/plugin-transform-modules-commonjs']
		}
	}
};
