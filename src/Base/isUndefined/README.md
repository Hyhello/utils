#### #isUndefined

```javascript
utils.isUndefined(v);
```

检测变量（v）是否 undefined 或者 null。

- **引入版本**

    1.0.0

- **参数**

    1. v (unknown): 待检测类型的变量。

- **返回**

    (boolean): 如果 v 为一个 undefined 或者 null，那么返回 true，否则返回 false。

- **例子**

```javascript
utils.isUndefined(null);
// => true

utils.isUndefined(window.undefined);
// => true
```
