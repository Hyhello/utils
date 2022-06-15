
const fs = require('fs-extra');
const rollup = require('rollup');
const config = require('./config');
const components = require('./components');
const packageJson = require('../package.json');
const { terser } = require('rollup-plugin-terser');
const filesize = require('rollup-plugin-filesize');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('rollup-plugin-typescript2');
const { del, pipe, write, pathResolve } = require('./utils');
const { nodeResolve } = require('@rollup/plugin-node-resolve');

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
        ascii_only: true
    }
});

const rollupConfig = {
    input: 'src/index.ts',
    plugins: [
        nodeResolve({
            extensions: ['.ts']
        }),
        commonjs(),
        typescript({ sourceMap: false, useTsconfigDeclarationDir: true }),
        terserPlugin,
        filesize()
    ]
};

// 构建componets
const buildComponents = async () => {
    const componentsList = Object.keys(components);
    for (let name of componentsList) {
        const bundle = await rollup.rollup({
            ...rollupConfig,
            input: components[name]
        });
        bundle.write({
            format: 'esm',
            name,
            file: `${config.prod.outputDir}/${name}.js`
        });
    }
}

// 构建所有
async function buildEntry() {
    const { outputDir, outputType } = config.prod;
    const name = packageJson.name.replace(/^.*\/(\w+)$/, '$1');
    del([outputDir], false);
    await buildComponents();
    const bundle = await rollup.rollup(rollupConfig);
    bundle.write({
        format: outputType,
        name,
        banner,
        exports: 'named',
        file: `${outputDir}/index.min.js`
    });
}
buildEntry();
