#### #isFunction

```javascript
utils.isFunction(v);
```

检测变量（v）是否是一个函数。

- **引入版本**

    1.0.0

- **参数**

1. v (any): 待检测类型的变量。

- **返回**

    (boolean): 一个指示指定的变量是否为 函数 的布尔值。

- **列子**

```javascript
utils.isFunction('div');
// => false

utils.isFunction(function () {});
// => true
```
