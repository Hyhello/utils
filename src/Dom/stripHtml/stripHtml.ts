import { isBrowser } from '@/Base';

/**
 * 从给定文本（html）中去除 HTML。
 * @param html 待处理的文本。
 * @returns {string} 处理后的文本。
 * @see {@link https://hyhello.github.io/utils/#/stripHtml 在线文档}
 */
export default function stripHtml(html: string): string {
    if (!isBrowser()) throw new Error('This method is not supported in the current environment');
    return new DOMParser().parseFromString(html, 'text/html').body.textContent || '';
}
