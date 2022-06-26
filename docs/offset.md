#### #offset

```javascript
utils.offset(el);
```

获取元素（el）距离文档（document.documentElement || document.body）的距离。

- **引入版本**

    1.0.0

- **参数**

1. el (HTMLElement): 待处理的 HTML 元素。

- **返回**

    (object): { x: number, y: number }。

- **例子**

```javascript
const oEl = document.createElement('div');
oEl.style.position = 'absolute';
oEl.style.left = '100px';
oEl.style.top = '100px';
document.body.appendChild(oEl);
utils.offset(oEl);
// => { x: 100, y: 100 }
```
