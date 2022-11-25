#### #compact

```javascript
utils.compact(array);
```

创建一个新数组，包含原数组中所有的非假值元素。例如 false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。

- **引入版本**

    1.0.0

- **参数**

    1. array (Array): 需要处理的数组。

- **返回**

    (Array): 返回过滤掉假值的新数组。

- **例子**

```javascript
utils.compact([1, 2, 3, 0, '', false, undefined, null]);
// => [1, 2, 3]
```
