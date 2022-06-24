const path = require('path');
const fs = require('fs-extra');
const ts = require("typescript");
const glob = require('fast-glob');
const config = require('./config');

const outputPath = path.resolve(config.outputDir);

// 生成{name}.d.ts
const genDebrisTypes = () => {
    const options = {
        "declaration": true,
        "emitDeclarationOnly": true
    };

    const components = glob.sync(['./src/**/*.ts'], {
        ignore: ['./src/**/index.ts', './src/**/*.spec.ts']
    });

    const host = ts.createCompilerHost(options)

    host.writeFile = (fileName, contents) => {
        fs.writeFileSync(path.join(outputPath, path.basename(fileName)), contents, 'utf-8');
    }

    const compiler = ts.createProgram(components, options, host);

    compiler.emit();
};

// 生成index.d.ts
const genIndexTypes = () => {
    const simpleReg = /^(\w+).d.ts$/;

    const dList = glob.sync(['*.d.ts'], {
        cwd: outputPath
    });
    const importList = [];
    const mainList = [];
    const exportList = [];
    dList.forEach(fileName => {
        const name = fileName.replace(simpleReg, '$1');
        importList.push(`import ${name} from './${name}';`);
        mainList.push(`\t${name}: typeof ${name}`);
        exportList.push(`export { default as ${name} } from './${name}';`);
    });
    const contentList = importList.concat([`declare const ${ config.pkgName }: {\n${mainList.join(';\n')};\n}`, `export default ${ config.pkgName }`], exportList);
    fs.writeFileSync(path.join(outputPath, 'index.d.ts'), contentList.join('\n'), 'utf-8');
};

const genTypes = () => {
    genDebrisTypes();
    genIndexTypes();
};

module.exports = genTypes;
