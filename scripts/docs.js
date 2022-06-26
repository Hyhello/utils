
const path = require('path');
const fs = require('fs-extra');
const glob = require('fast-glob');
const config = require('./config');
const pkg = require('../package.json');
const { del, json2md, pathResolve } = require('./utils');

// 标签匹配
const singleReg = /<(\w+)>.*<\/\1>/gm;

// 输出目录
const outputDir = config.docsDir;

// 文件名称
const MD_NAME = pathResolve(outputDir, '_sidebar.md');

// _sidebar模板
const TPL = [
    '[**更新日志**](CHANGELOG.md)',
    {
        title: '开发指南',
        children: [
            '[安装](install.md)',
            '[快速上手](start.md)'
        ]
    }
];

// 清空md文件
const clearFile = () => {
    // 待清空文件集合
    const delList = [outputDir + '/*.md'].concat(['install.md', 'start.md', 'README.md', 'CHANGELOG.md', '_coverpage.md'].map(file => {
        return '!' + outputDir + '/' + file;
    }));
    del(delList, true);
};

// 更新版本号
const updateVersion = () => {
    const odir = path.resolve(outputDir, '_coverpage.md');
    let md = fs.readFileSync(odir, { encoding: 'utf8' });
    md = md.replace(singleReg, `<$1>v${pkg.version}</$1>`);
    fs.writeFileSync(odir, md, { encoding: 'utf8' });
};

// 复制文件
const copyFile = (list) => {
    list.forEach(info => {
        fs.copySync(info.file, pathResolve(outputDir, info.name), { overwrite: true });
    });
};

// 生成md
const generatemd = (list) => {
    const jsonmap = list.reduce((obj, item) => {
        obj[item.group] = obj[item.group] || [];
        obj[item.group].push(item.express);
        return obj;
    }, {});
    const data = Object.keys(jsonmap).reduce((arr, key) => {
        arr.push({
            title: key,
            children: jsonmap[key]
        });
        return arr;
    }, []);
    fs.outputFileSync(MD_NAME, json2md(TPL.concat(data)), { encoding: 'utf8' });
    console.log("\nDOCS文件生成完成，请运行 yarn serve:docs 查看效果\n");
};

const run = () => {
    const docs = glob.sync(['./src/**/README.md'], { ignore: ['./src/*.md', './src/*/*.md'] });
    const docList = docs.reduce((list, file) => {
        const { dir, ext } = path.parse(file);
        const pathList = dir.split('/');
        const group = pathList[pathList.length - 2];
        const dirname = pathList[pathList.length - 1];
        const name = dirname + ext;
        list.push({
            name,
            file,
            group,
            express: `[${dirname}](${name})`
        });
        return list;
    }, []);
    clearFile();
    updateVersion();
    copyFile(docList);
    generatemd(docList);
};

run();





