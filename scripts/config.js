module.exports = {
    docsDir: './docs',
	dev: {
		port: 9527,
		open: true,
		host: 'localhost',
		outputType: 'iife'
	},
	prod: {
		outputDir: 'lib',
		outputTypeList: ['esm', 'umd', 'cjs']
	}
};
