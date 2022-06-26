#### #camelCase

```javascript
utils.camelCase(str, [(capital = false)]);
```

将字符串变量转为驼峰。

- **引入版本**

    1.0.0

- **参数**

1. str (string): 待处理的字符串变量。
2. capital (boolean): 是否大小驼峰。

- **返回**

    (string): 转换为驼峰。

- **例子**

```javascript
utils.camelCase('__a-b');
// => aB

utils.camelCase('__a-b', true);
// => AB

utils.camelCase('__a-  __b', true);
// => AB
```
