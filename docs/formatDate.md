#### #formatDate

```javascript
utils.formatDate(date, [(fmt = 'yyyy-MM-dd hh:mm:ss')]);
```

根据参数 fmt 格式化 date 日期。

- **引入版本**

    1.0.0

- **参数**

1. date (number | string | Date): 待处理的日期。
2. fmt (string): 格式化模板。

- **返回**

    (string): 返回格式化后的日期。

- **例子**

```javascript
formateDate(new Date());
// => 2021-12-07 15:42:36

formateDate(new Date(), 'yyyy-MM-dd');
// => 2021-12-07
```
