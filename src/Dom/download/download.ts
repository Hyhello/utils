import { isUrl } from '@/RegExp';

// `a.click()` doesn't work for all browsers: 参考：http://purl.eligrey.com/github/FileSaver.js 第58行代码
const clickHack = function (node: HTMLElement) {
    try {
        node.dispatchEvent(new MouseEvent('click'));
    } catch (e) {
        const evt = document.createEvent('MouseEvents');
        evt.initMouseEvent('click', true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
        node.dispatchEvent(evt);
    }
};

/**
 * 通过连接下载
 * @param link 连接地址
 * @param filename 下载包包名
 */
const _download = (link: string, filename: string): void => {
    const el = document.createElement('a');
    // 请参考：https://www.jianshu.com/p/2762f6355e1d
    el.setAttribute('ref', 'noopener noreferrer');
    el.style.display = 'none';
    el.download = filename;
    el.href = link;
    if (el.origin !== window.location.origin) el.target = '_blank';
    clickHack(el);
};

interface IBlobPropertyBag extends BlobPropertyBag {
    bom?: string;
    filename?: string;
}

/**
 * 附件下载
 * @param content 需下载的资源
 * @param options 需下载资源配置
 * @returns void
 * @see {@link https://hyhello.github.io/utils/#/download 在线文档}
 */
export default function download(content: BlobPart, options: IBlobPropertyBag = {}): void {
    if (!content) throw new Error('please enter a parameter');
    const filename = options.filename || 'download';
    const mimeType = options.type || 'application/octet-stream';
    const bList = typeof options.bom !== 'undefined' ? [options.bom, content] : [content];
    if (typeof content === 'string' && isUrl(content)) return _download(content, filename);
    const blob = content instanceof Blob ? content : new Blob(bList, { type: mimeType, endings: options.endings });
    if ('msSaveBlob' in window.navigator) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.navigator.msSaveBlob(blob, filename);
    } else {
        const blobURL = window.URL.createObjectURL(blob);
        _download(blobURL, filename);
        setTimeout(() => {
            window.URL.revokeObjectURL(blobURL);
        });
    }
}
