#### #beautifyTime

```javascript
utils.beautifyTime(date);
```

人性化/美化时间。

- **引入版本**

    1.8.0

- **参数**

    1. date (number | string | Date): 待处理的日期。

- **返回**

    (string): 返回美化后的时间。

- **例子**

```javascript
utils.beautifyTime(Date.now() - 10 * 1000)
// => 刚刚
utils.beautifyTime(Date.now() + 10 * 1000)
// => 刚刚
utils.beautifyTime(Date.now() - 15 * 1000)
// => 15秒前
utils.beautifyTime(Date.now() + 15 * 1000)
// => 15秒后
utils.beautifyTime(Date.now() - 30 * 1000)
// => 30秒前
utils.beautifyTime(Date.now() - 3 * 60 * 1000)
// => 3分钟前

```
