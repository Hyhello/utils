#### #toggleClass

```javascript
utils.toggleClass(el, cls);
```

给指定 HTML 元素（el）移除或者添加 className（cls）

- **引入版本**

    1.0.0

- **参数**

    1. el (Element): 待处理的 HTML 元素。
    2. cls (string)：待移除/添加的 className。

- **返回**

    (void): 无返回值。

- **例子**

```javascript
utils.toggleClass(document.body, 'aaa');
// => void
```
