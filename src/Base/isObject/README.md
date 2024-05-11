#### #isObject

```javascript
utils.isObject(v);
```

检测变量（v）是否是对象。

- **引入版本**

    1.0.0

- **参数**

    1. v (unknown): 待检测类型的变量。

- **返回**

    (boolean): 如果 v 为一个对象，那么返回 true，否则返回 false。

- **例子**

```javascript
utils.isObject({});
// => true

utils.isObject([1, 2, 3]);
// => true

utils.isObject(new Map());
// => true

utils.isObject(null);
// => false
```
