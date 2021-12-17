#### #maybeAddPx

```javascript
utils.maybeAddPx(input);
```

可能将值（input）添加后缀 px

- **引入版本**

    1.0.0

- **参数**

1. input (number | string): 待处理的值。

- **返回**

    (string): 可能返回一个后缀为 px 的字符串。

- **列子**

```javascript
utils.maybeAddPx(100);
// => 100px

utils.maybeAddPx('100%');
// => 100%

utils.maybeAddPx('auto');
// => auto

utils.maybeAddPx('100px');
// => 100px
```
