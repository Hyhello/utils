#### #removeClass

```javascript
utils.removeClass(el, cls);
```

移除指定元素（el）的 className（cls）。

- **引入版本**

    1.0.0

- **参数**

1. el (Element): 待处理的 HTML 元素。
2. cls (string)：待移除的 className。

- **返回**

    (void): 无返回值。

- **例子**

```javascript
utils.removeClass(document.body, 'aaa');
// => void
```
