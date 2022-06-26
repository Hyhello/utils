#### #getStyle

```javascript
utils.getStyle(el, property);
```

获取指定元素的 CSS 样式。

- **引入版本**

    1.5.0

- **参数**

1. el(HTMLElement): 必需，要获取样式的元素。
2. property(string): 必须，需要查询的 CSS 属性名称。

- **返回**

    (string): 返回 DOMString，包含有欲查找的 CSS 属性的值.  若原 CSSStyleDeclaration 没有设置对应属性，则返回空字符串。

- **例子**

```javascript

oDiv = document.createElement('div');
oDiv.style.width = '200px';
oDiv.style.height = '200px';
oDiv.style.backgroundColor = 'red';

utils.getStyle(oDiv, 'width')
// => 200px

utils.getStyle(oDiv, 'height')
// => 200px

utils.getStyle(oDiv, 'background-color')
// => red

```
