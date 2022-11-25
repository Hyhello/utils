#### #isUrl

```javascript
utils.isUrl(str);
```

检测字符串（str）是否是 url。

- **引入版本**

    1.0.0

- **参数**

    1. str (string): 待检测的变量。

- **返回**

    (boolean): 如果 str 是 url，那么返回 true，否则返回 false。

- **例子**

```javascript
utils.isUrl('http://www.baidu.com');
// => true

utils.isUrl('www.42@qq.com');
// => false
```
