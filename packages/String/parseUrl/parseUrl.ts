/**
 * 转换待转义URL地址
 * @param str
 * @returns
 * @example
 * *
 */

type IParams = {
	[propName: string]: unknown;
};

interface IURL {
	source: string;
	protocol: string;
	host: string;
	port: string;
	origin: string;
	pathname: string;
	query: string;
	params: IParams;
	path: string;
	hash: string;
	file: string;
	relative: string;
	segments: {
		[index: number]: string;
	};
}

export default function parseUrl(url: string): IURL {
	const eTagA = document.createElement('a');
	eTagA.href = window.decodeURIComponent(url);
	const file = eTagA.pathname.match(/\/([^/?#]+)$/i);

	return {
		source: url,
		protocol: eTagA.protocol.replace(':', ''),
		host: eTagA.hostname,
		port: eTagA.port,
		origin: eTagA.origin,
		pathname: eTagA.pathname,
		query: eTagA.search,
		params: eTagA.search
			.replace(/^\?/, '')
			.split('&')
			.reduce((obj, item) => {
				if (item) {
					const [name, value] = item.split('=');
					obj[name] = value;
				}
				return obj;
			}, <IParams>{}),
		path: eTagA.pathname.replace(/^([^/])/, '/$1'),
		hash: eTagA.hash.replace('#', ''),
		file: file ? file[1] : '',
		relative: eTagA.href.replace(/.*tps?:\/\/[^/]+(.+)/, '$1'),
		segments: eTagA.pathname.replace(/^\//, '').split('/')
	};
}
