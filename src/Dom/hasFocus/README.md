#### #hasFocus

```javascript
utils.hasFocus(el);
```

判断元素（el）是否为焦点元素

- **引入版本**

    1.0.7

- **参数**

    1. el(HTMLElement): 待判断的html元素。

- **返回**

    (boolean): 一个指示指定的元素（el）是否为焦点元素。

- **例子**

```javascript
const oA = document.createElement('a');
oA.setAttribute('href', '');
document.body.appendChild(oA);
oA.focus();
utils.hasFocus(oA);
// => true
```
