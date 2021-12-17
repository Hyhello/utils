<!-- markdownlint-disable-next-line -->
#### #isIdCard

```javascript
utils.isIdCard(str);
```

检测变量（str）是否是身份证号码。

- **引入版本**

    1.0.0

- **参数**

1. str (string | number): 待检测的变量。

- **返回**

    (boolean): 如果 str 是身份证号码，那么返回 true，否则返回 false。

- **列子**

```javascript
utils.isIdCard('420881199010223212x');
// => false

utils.isIdCard(420881199010223211);
// => true
```
