#### #isMobile

```javascript
utils.isMobile(str);
```

检测字符串（str）是否是手机号码。

- **引入版本**

    1.0.0

- **参数**

1. str (string | number): 待检测的变量。

- **返回**

    (boolean): 如果 str 是手机号码，那么返回 true，否则返回 false。

- **例子**

```javascript
utils.isMobile('13455667788');
// => true

utils.isMobile(13455667788);
// => true
```
