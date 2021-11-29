/**
 * 作者：Hyhello
 * 时间：2019-06-26
 * 描述：工具
 */
const del = require('del');
const path = require('path');

exports.pathResolve = dir => path.resolve(__dirname, '../', dir);

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
