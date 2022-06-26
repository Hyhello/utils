#### #isEmpty

```javascript
utils.isEmpty(v);
```

检测变量（v）是否是一个空值。

- **引入版本**

    1.0.0

- **参数**

1. v (any): 待检测类型的变量。

- **返回**

    (boolean): 一个指示指定的变量是否为 空。

- **例子**

```javascript
utils.isEmpty('div');
// => false

utils.isEmpty(12);
// => false

utils.isEmpty(true);
// => false

utils.isEmpty(false);
// => false

utils.isEmpty({});
// => true

utils.isEmpty([]);
// => true

utils.isEmpty(new Error());
// => true

utils.isEmpty(new Map());
// => true

utils.isEmpty(function () {});
// => true
```
