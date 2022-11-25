#### #isElement

```javascript
utils.isElement(v);
```

检测变量（v）是否是一个 HTML 元素。

- **引入版本**

    1.0.0

- **参数**

    1. v (any): 待检测类型的变量。

- **返回**

    (boolean): 一个指示指定的变量是否为 HTML 元素。

- **例子**

```javascript
utils.isElement(document.createElement('div'));
// => true

utils.isBoolean('<div></div');
// => false
```
