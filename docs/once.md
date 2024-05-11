#### #once

```javascript
utils.once(el, type, listener[, capture = false]);
```

给指定 HTML 元素（el）绑定事件（type），触发后将移除该绑定事件（注：触发一次）

- **引入版本**

    1.0.0

- **参数**

    1. el (HTMLElement): 待处理的 HTML 元素。
    2. type (string | string[])：表示监听事件类型的字符串或者字符串数组（多事件绑定实现版本：*v1.9.0*）。
    3. listener (string)：当所监听的事件类型触发时，会接收到一个事件通知的函数。
    4. capture 默认值为false(即 使用事件冒泡).,true---使用事件捕获。

    > 多事件绑定实现版本：v1.9.0

- **返回**

    (void): 无返回值。

- **例子**

```javascript
// 绑定一个事件
utils.once(document.body, 'click', () => {});
// => void

// 绑定多个事件，多事件绑定v1.9.0版本
utils.once(document.body, ['click', 'mousedown'], () => {});
// => void
```
