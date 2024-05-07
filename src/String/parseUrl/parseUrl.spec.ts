import parseUrl from './parseUrl';

describe('#parseUrl()', () => {
    test('parse url to object', () => {
        const source =
            'https://fanyi.baidu.com/translate?aldtype=16047&query=%E8%A7%A3%E6%9E%90url%0D%0A&keyfrom=baidu&smartresult=dict&lang=auto2zh#zh/en/%E8%A7%A3%E6%9E%90url';
        const result = {
            file: 'translate',
            hash: 'zh/en/%E8%A7%A3%E6%9E%90url',
            host: 'fanyi.baidu.com',
            origin: 'https://fanyi.baidu.com',
            params: {
                aldtype: '16047',
                keyfrom: 'baidu',
                lang: 'auto2zh',
                query: '%E8%A7%A3%E6%9E%90url',
                smartresult: 'dict'
            },
            path: '/translate',
            pathname: '/translate',
            port: '',
            protocol: 'https',
            query: '?aldtype=16047&query=%E8%A7%A3%E6%9E%90url&keyfrom=baidu&smartresult=dict&lang=auto2zh',
            relative:
                '/translate?aldtype=16047&query=%E8%A7%A3%E6%9E%90url&keyfrom=baidu&smartresult=dict&lang=auto2zh#zh/en/%E8%A7%A3%E6%9E%90url',
            segments: ['translate'],
            source
        };
        expect(parseUrl(source)).toEqual(result);
    });

    test('parse url to object1', () => {
        const source = '';
        const result = {
            file: '',
            hash: '',
            host: 'localhost',
            origin: 'http://localhost',
            params: {},
            path: '/',
            pathname: '/',
            port: '',
            protocol: 'http',
            query: '',
            relative: '/',
            segments: [''],
            source
        };
        expect(parseUrl(source)).toEqual(result);
    });
});
