#### #toArray

```javascript
utils.toArray(likeArr);
```

将类数组（likeArr）转为真正的数组。（注：类数组，包含 length, 且 index 从 0 开始）。

- **引入版本**

    1.0.0

- **参数**

1. likeArr (ArrayLike): 类数组。

- **返回**

    (Array): 返回一个新数组。

- **例子**

```javascript
utils.toArray({ 0: 'a', length: 1 });
// => ['a']
```
