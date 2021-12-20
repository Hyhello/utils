#### #isPromise

```javascript
utils.isPromise(v);
```

检测变量（v）是否是一个 Promise。

- **引入版本**

    1.0.0

- **参数**

1. v (any): 待检测类型的变量。

- **返回**

    (boolean): 如果 v 为一个 Promise，那么返回 true，否则返回 false。

- **例子**

```javascript
utils.isPromise(true);
// => false

utils.isPromise(new Promise((resolve) => resolve));
// => true
```
