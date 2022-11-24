#### #inRange

```javascript
utils.inRange(n[, start][, end]);
```

检查 n 是否在 start 与 end 之间，但不包括 end。

- **引入版本**

    1.7.0

- **参数**

1. n (number): 要检查的值。
2. start (number): 可选。 开始检查的范围。
3. end (number): 必须。 结束范围。

- **返回**

    (boolean): 如果n在范围内，返回true, 否则返回false。

- **例子**

```javascript
utils.inRange(3, 2, 4);
// => true

utils.inRange(4, 2, 4);
// => false

utils.inRange(4, 8);
// => true

utils.inRange(4, 2);
// => false

utils.inRange(-3, -2, -3);
// => true

utils.inRange(-2, -2, -3);
// => false
```
