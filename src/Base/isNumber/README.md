#### #isNumber

```javascript
utils.isNumber(v);
```

检测变量（v）是否是数字。

- **引入版本**

    1.0.0

- **参数**

    1. v (unknown): 待检测类型的变量。

- **返回**

    (boolean): 一个指示指定的变量是否为 数字。

- **例子**

```javascript
utils.isNumber(NaN);
// => true

utils.isNumber(Infinity);
// => true

utils.isNumber(1);
// => true

utils.isNumber('1');
// => false
```
