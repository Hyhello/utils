#### #toNumber

```javascript
utils.toNumber(str);
```

将字符串（str）转换为 number

- **引入版本**

    1.0.0

- **参数**

1. str (string): 待处理的字符串变量。

- **返回**

    (number): 返回处理后的结果。

- **例子**

```javascript
utils.toNumber('1aaa');
// => 1

utils.toNumber('123');
// => 123

utils.toNumber('aaa');
// => NaN
```
