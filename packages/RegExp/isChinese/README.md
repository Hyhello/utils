#### #isChinese

```javascript
utils.isChinese(str);
```

检测字符串（str）是否是中文。

- **引入版本**

    1.0.0

- **参数**

1. str (string): 待检测的变量。

- **返回**

    (boolean): 如果 str 是中文，那么返回 true，否则返回 false。

- **列子**

```javascript
utils.isChinese('你好');
// => true

utils.isChinese('你好12');
// => false
```
