#### #contains

```javascript
utils.contains(root, el);
```

判断一个元素(root)是否包含另一个元素(el)

- **引入版本**

    1.0.7

- **参数**

    1. root(Node): 父元素节点。
    2. el(Node): 子元素节点。

- **返回**

    (boolean): root包含el返回true，否则返回false。

- **例子**

```javascript
const oRoot = document.createElement('div');
const oEl = document.createElement('div');
oRoot.appendChild(oEl);
utils.contains(oRoot, oEl);
// => true
utils.contains(oRoot, oRoot);
// => true
utils.contains(oEl, oRoot);
// => false
```
