#### #split

```javascript
utils.split(str[, index = 3][, separated = ,]);
```

创建新的字符串，在字符串/数值（str）指定位置（index）插入分隔符（separated）。

- **引入版本**

    1.0.0

- **参数**

1. str (number | string): 待处理的字符串变量。
2. index (number): 指定位置。
3. separated (string): 分隔符。

- **返回**

    (string): 返回处理后的结果。

- **例子**

```javascript
utils.split('aaaa');
// => a,aaa

utils.split(1000);
// => 1,000
```
