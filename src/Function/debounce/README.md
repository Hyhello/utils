#### #debounce

```javascript
utils.debounce(func, wait, immediate);
```

防抖函数，当函数（func）重复调用时，函数(func)在最后一次调用时刻的wait毫秒后执行

- **引入版本**

    1.0.0

- **参数**

1. func (function): 执行函数。
2. wait (number)：时间间隔。
3. immediate (boolean)：immediate为true, debounce会在wait时间间隔的开始时立即调用这个函数（func）。

- **返回**

    (void): 无返回值。

- **例子**

```javascript
window.onresize = utils.debounce(function (e) {
    console.log(e);
}, 100, true);
// => void
```
