#### #isTel

```javascript
utils.isTel(str);
```

检测字符串（str）是否是电话号码（xxx-xxxxxxx|xxx-xxxxxxxx|xxxx-xxxxxxxx|xxxx-xxxxxxxx|xxxxxxx|xxxxxxxx）。

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

utils.isTel(13455667788);
// => false
```
