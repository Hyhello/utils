#### #throttle

```javascript
utils.throttle(func, wait, immediate);
```

防抖节流，当函数（func）重复调用时，最多每隔wait毫秒调用一次该函数。

- **引入版本**

    1.0.5

- **参数**

1. func (function): 执行函数。
2. wait (number): 时间间隔。
3. immediate (boolean): immediate为true, throttle会在wait时间间隔的开始时立即调用这个函数（func）。

- **返回**

    (function): 新的函数。

- **例子**

```javascript
window.onscroll = utils.throttle(function (e) {
    console.log(e);
}, 100, true);
// => void
```
