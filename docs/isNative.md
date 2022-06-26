#### #isNative

```javascript
utils.isNative(v);
```

检测函数（v）是否是 js 原生方法。

- **引入版本**

    1.0.0

- **参数**

1. v (Function): 待检测类型的函数。

- **返回**

    (boolean): 一个指示指定的函数是否为 js 原生方法。

- **例子**

```javascript
utils.isNative(function a() {});
// => false

utils.isNative(Number.isNaN);
// => true
```
