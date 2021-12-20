#### #parseUrl

```javascript
utils.parseUrl(url);
```

解析 url

- **引入版本**

    1.0.0

- **参数**

1. url (string): 待解析 url。

- **返回**

    (object): 返回处理后的 url。

- **例子**

```javascript
utils.parseUrl(
 'https://fanyi.baidu.com/translate?aldtype=16047&query=%E8%A7%A3%E6%9E%90url%0D%0A&keyfrom=baidu&smartresult=dict&lang=auto2zh#zh/en/%E8%A7%A3%E6%9E%90url'
);
/** => {
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
}
/*
```
