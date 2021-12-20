#### #template

```javascript
utils.toNumber(str, obj);
```

最简单的 template，类似于 artTemplate，但比它简单

- **引入版本**

    1.0.0

- **参数**

1. str (string): 待处理的字符串变量。
2. object (object)。

- **返回**

    (number): 返回处理后的结果。

- **例子**

```javascript
utils.template('<a href="{url}">{title}</a>', { url: 'http://www.a.com', title: '标题' });
// => <a href="http://www.a.com">标题</a>
```
