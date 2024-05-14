#### #rangeArr

```javascript
utils.rangeArr(n[, iteratee]);
```

创建一个长度为（n）的数组，数组每个值为（iteratee）（注：默认为 undefined）。

- **引入版本**

    1.0.0

- **参数**

    1. n (number): 数组的长度。
    2. iteratee (any): 数组包含的默认值。

- **返回**

    (Array): 创建一个长度为（n）的数组，数组每个值为（iteratee）。

- **例子**

```javascript
// iteratee is number
utils.rangeArr(2, 2);
// => [2, 2]

// iteratee is function
utils.rangeArr(2, (i) => {
    return 1 * i;
});
// => [0, 1]

// iteratee is noop function
utils.rangeArr(2, utils.noop);
// => [undefined, undefined]
```
