#### #scrollTo

```javascript
utils.scrollTo(el[, (end = 0)][, (duration = 500)]);
```

单位时间（duration）内滑动指定 HTML 元素（el）到指定位置（end）。

- **引入版本**

    1.0.0

- **参数**

    1. el (HTMLElement): 待滑动 HTML 元素。
    2. end (number)：滑动元素到指定位置。
    3. duration (number)：滑动持续时长{毫秒}。

- **返回**

    (Promise&lt;void&gt;): 返回一个 Promise。

- **例子**

```javascript
document.body.scrollTop = 1000;
utils.scrollTo(document.body).then(() => {
 console.log('滑动完成');
});
// => Promise
```
