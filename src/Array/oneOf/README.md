<!-- markdownlint-disable-next-line -->
#### #oneOf

```javascript
utils.oneOf(target, list);
```

判断数组 list 是否包含元素 target。

- **引入版本**

    1.0.0

- **参数**

    1. target (number | string): 待判断的元素。
    2. list (Array): 数组。

- **返回**

    (boolean): 数组（Array）包含元素（target）则为true，否则为false。

- **例子**

```javascript
utils.oneOf('a', ['a', 'b', 'c']);
// => true

utils.oneOf('a1', ['a', 'b', 'c']);
// => false
```
