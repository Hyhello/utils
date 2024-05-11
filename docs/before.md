#### #before

```javascript
utils.before(n, func[, context]);
```

创建一个调用func的函数，通过this绑定和创建函数的参数调用func，调用次数不超过 n 次。 之后再调用这个函数，将返回一次最后调用func的结果。

- **引入版本**

    1.0.7

- **参数**

    1. n: 函数（func）允许调用的最大次数。
    2. func (function): 执行函数。
    3. context (object): 可选，上下文。

- **返回**

    (function): 新的函数。

- **例子**

```javascript
let count = 0;
const func = function () {
    count++;
};
const funcalled = utils.before(3, func);
for(let i = 0; i < 10; i++) {
    funcalled();
}
console.log(count); // => 3
```
