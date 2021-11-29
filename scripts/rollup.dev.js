const config = require('./config');
const { toCamel } = require('./utils');
const portfinder = require('portfinder');
const serve = require('rollup-plugin-serve');
const rollupConfig = require('./rollup.base');
const packageJson = require('../package.json');
const livereload = require('rollup-plugin-livereload');

const name = toCamel(packageJson.name);
const HOST = process.env.HOST || config.dev.host;
const PORT = process.env.PORT && Number(process.env.PORT) || config.dev.port;

rollupConfig.output = [
    {
		format: config.dev.outputType,
		name: name,
		file: 'lib/index.js',
        exports: 'named',
		sourcemap: true
	}
];

module.exports = new Promise((resolve, reject) => {
    portfinder.basePort = PORT;
    portfinder.getPort((err, port) => {
        if (err) {
            reject(err);
        } else {
            process.env.PORT = port;
            rollupConfig.plugins.push(
                serve({
                    open: config.dev.open, // 是否打开浏览器
                    openPage: '/index.html', // 入口html的文件位置
                    historyApiFallback: true, // Set to true to return index.html instead of 404
                    host: HOST,
                    port: port
                }),
                livereload({
                    watch: ['lib', 'examples', 'index.html'] //监听文件夹;
                })
            );
            resolve(rollupConfig);
        }
    })
});
