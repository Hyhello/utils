#### #chunk

```javascript
utils.chunk(array[, size]);
```

将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果 array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。

- **引入版本**

    1.0.0

- **参数**

    1. array (Array): 需要处理的数组。
    2. [size] (number): 每个数组区块的长度。

- **返回**

    (Array): 返回一个包含拆分区块的新数组。

- **例子**

```javascript
utils.chunk([1, 2, 3, 4], 1);
// => [[1], [2], [3], [4]]

utils.chunk([1, 2, 3, 4], 3);
// => [[1, 2, 3], [4]]
```
