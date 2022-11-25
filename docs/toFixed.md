#### #toFixed

```javascript
utils.toFixed(num[, fixed]);
```

重写 toFixed，解决后面多余 0 的问题。

- **引入版本**

    1.0.0

- **参数**

    1. num (number): 待处理的值。
    2. fixed (number): 保留多少位。

- **返回**

    (string): 返回处理后的值。

- **例子**

```javascript
utils.toFixed(1, 3);
// => 1

utils.toFixed(100);
// => 100

utils.toFixed(1.2, 3);
// => 1.2
```
