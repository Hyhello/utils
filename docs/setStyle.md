#### #setStyle

```javascript
utils.setStyle(el, property[, value]);
```

设置指定元素的 CSS 样式。

- **引入版本**

    1.5.0

- **参数**

    1. el(HTMLElement): 必需，待设置 CSS 样式的元素。
    2. property(string | object): 必须，待设置 CSS 属性名称。
    3. value?: 选填，待设置 CSS 属性值。

- **返回**

    (void): 无返回值。

- **例子**

```javascript

const oDiv = document.createElement('div');

utils.setStyle(oDiv, 'width', '200px');
utils.setStyle(oDiv, 'height', '200px');
utils.setStyle(oDiv, { backgroundColor: 'red', zIndex: 1 });

utils.getStyle(oDiv, 'width')
// => 200px

utils.getStyle(oDiv, 'height')
// => 200px

utils.getStyle(oDiv, 'background-color')
// => red


utils.getStyle(oDiv, 'z-index')
// => 1

```
