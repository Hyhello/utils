#### #on

```javascript
utils.on(el, type, listener);
```

给指定 HTML 元素（el）绑定事件（type）。

- **引入版本**

    1.0.0

- **参数**

1. el (Element): 待处理的 HTML 元素。
2. type (string)：表示监听事件类型的字符串。
3. listener (string)：当所监听的事件类型触发时，会接收到一个事件通知的函数。

- **返回**

    (void): 无返回值。

- **例子**

```javascript
utils.on(document.body, 'click', () => {});
// => void
```
