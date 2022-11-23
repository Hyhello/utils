#### #flatten

```javascript
utils.flatten(arr[, depth]);
```

扁平化处理数组

- **引入版本**

    1.7.0

- **参数**

1. arr (Array): 待处理数组。
2. depth (number | boolean): 扁平化处理深度。

- **返回**

    (Array): 扁平化处理后的数组。

- **例子**

```javascript
const list = [[1, [2, [4]], [3]]];

utils.flatten(list, 0);
// => [[1, [2, [4]], [3]]]

utils.flatten(list, -1);
// => [[1, [2, [4]], [3]]]

// 默认只取一层 类似：utils.flatten(list, 1);
utils.flatten(list);
// => [1, [2, [4]], [3]]

// 深度
utils.flatten(list, true);
// => [1, 2, 4, 3]

// depth: 1
utils.flatten(list, 1);
// => [1, [2, [4]], [3]]

// depth: 2
utils.flatten(list, 2);
// => [1, 2, [4], 3]

// depth: 3
utils.flatten(list, 3);
// => [1, 2, 4, 3]

```
