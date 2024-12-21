#### #compare

```javascript
utils.compare([key], [order]);
```

服务于sort，用于排序。

- **引入版本**

    1.0.0

- **参数**

    1. key (number | string): 需要排序的数组。
    2. order ('asc' | 'desc')：排序方式，默认为：'asc'。（实现版本：v2.0.0）。

- **返回**

    (Array): 返回排序后的数组。

- **例子**

```javascript
[3, 2, 1].sort(utils.compare());
// => [1, 2, 3]

[{ name: 1 }, { name: 3 }, { name: 2 }].sort(utils.compare('name'));
// => [{ name: 1 }, { name: 2 }, { name: 3 }]

[{ name: 1 }, { name: 3 }, { name: 2 }].sort(utils.compare('name'， 'desc'));
// => [{ name: 3 }, { name: 2 }, { name: 1 }]
```
