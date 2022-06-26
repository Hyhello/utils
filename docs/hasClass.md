#### #hasClass

```javascript
utils.hasClass(el, cls);
```

判定 HTML 元素（el）是否包含指定 className（cls）。

- **引入版本**

    1.0.0

- **参数**

1. el (Element): 待处理的 HTML 元素。
2. cls (string)：待判断的 className。

- **返回**

    (boolean): 如果 HTML 元素（el）存在 className（cls）,则返回 true，否则返回 false。

- **例子**

```javascript
const oEl = document.createElement('div');
oEl.className = 'aaa';
utils.hasClass(oEl, 'aaa');
// => true
```
