#### #isBoolean

```javascript
utils.isBoolean(v);
```

检测变量（v）是否是布尔值。

- **引入版本**

    1.0.0

- **参数**

    1. v (unknown): 待检测类型的变量。

- **返回**

    (boolean): 一个指定的变量是否为布尔值。

- **例子**

```javascript
utils.isBoolean('1');
// => false

utils.isBoolean(false);
// => true
```
