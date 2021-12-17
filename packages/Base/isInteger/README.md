#### #isInteger

```javascript
utils.isInteger(v);
```

检测变量（v）是否是整数。

- **引入版本**

    1.0.0

- **参数**

1. v (any): 待检测类型的变量。

- **返回**

    (boolean): 一个指示指定的变量是否为 整数 的布尔值。

- **列子**

```javascript
utils.isInteger(3);
// => true

utils.isInteger(Number.MIN_VALUE);
// => false

utils.isInteger(Infinity);
// => false

utils.isInteger('3');
// => false
```
