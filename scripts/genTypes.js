const path = require('path');
const fs = require('fs-extra');
const ts = require("typescript");
const glob = require('fast-glob');
const config = require('./config');

const outputPath = path.resolve(config.outputDir);

// 生成{name}.d.ts
const genTypes = () => {
    const options = {
        "declaration": true,
        "emitDeclarationOnly": true
    };

    const importList = [];
    const declareList = [];
    const exportList = [];

    const simpleReg = /^(\w+).d.ts$/;

    const components = glob.sync(['./src/**/*.ts'], {
        ignore: ['./src/**/index.ts', './src/**/*.spec.ts']
    });

    const host = ts.createCompilerHost(options)

    host.writeFile = (fileName, contents) => {
        const basename = path.basename(fileName);
        const name = basename.replace(simpleReg, '$1');
        importList.push(`import ${name} from './${name}';`);
        declareList.push(`\t${name}: typeof ${name}`);
        exportList.push(`export { default as ${name} } from './${name}';`);
        fs.writeFileSync(path.join(outputPath, basename), contents, 'utf-8');
    }

    const compiler = ts.createProgram(components, options, host);

    compiler.emit();

    // 生成index.d.ts
    const contentList = importList.concat(
        [`\ndeclare const ${config.pkgName}: {\n${declareList.join(';\n')};\n}`, `export default ${config.pkgName};\n`],
        exportList
    );
    fs.writeFileSync(path.join(outputPath, 'index.d.ts'), contentList.join('\n'), 'utf-8');
};

module.exports = genTypes;
