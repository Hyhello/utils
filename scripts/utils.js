/**
 * 作者：Hyhello
 * 时间：2019-06-26
 * 描述：工具
 */
const del = require('del');
const path = require('path');

exports.pathResolve = (...args) => path.resolve(__dirname, '../', ...args);

exports.toCamel = str => {
    return str.replace(/(?:^|-)(\w)/g, (_, $1) => {
        return $1.toUpperCase();
    });
};

exports.convertSep = (str, sep) => {
    return str.replace(new RegExp(`\\${path.sep}`, 'g'), sep);
};

// 删除文件夹
exports.del = (dirList, log = true) => {
    try {
        const paths = del.sync(dirList);
        if (log) console.log('Files and directories that would be deleted:\n', paths.join('\n'));
    } catch (e) {
        console.error(e);
    }
};

// simple json2md for docs.js
exports.json2md = (list = [], level = 0) => {
    let str = '';
    const len = list.length;
    const empty = ' '.repeat(level);
    list.forEach((item, index) => {
        if (typeof item === 'object') {
            str += `${empty}- ${item.title}\n`;
            if (item.children) {
                str += this.json2md(item.children, 2);
            }
        } else {
            str += `${empty}- ${item}\n`;
        }
        if (level === 0 && (len - 1 !== index)) {
            str += '\n';
        }
    });
    return str;
};
