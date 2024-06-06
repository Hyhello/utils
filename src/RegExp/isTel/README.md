#### #isTel

```javascript
utils.isTel(str);
```

检测字符串（str）是否是电话号码（0xx-xxxxxxx|0xx-xxxxxxxx|0xxx-xxxxxxxx|0xxx-xxxxxxxx|0xxxxxxxxxx|0xxxxxxxxxxx|xxxxxxx|xxxxxxxx）。

- **引入版本**

    1.0.0

- **参数**

    1. str (string | number): 待检测的变量。

- **返回**

    (boolean): 如果 str 是电话号码，那么返回 true，否则返回 false。

- **例子**

```javascript
utils.isTel('027-1022312');
// => true

utils.isTel('0271022312');  // bugfix: v1.10.2; v1.10.1版本之前不支持
// => true

utils.isTel(13455667788);
// => false
```
