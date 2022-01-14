#### #after

```javascript
utils.after();
```

utils.before的反向函数;此方法创建一个函数，当他被调用n或更多次之后将马上触发func 。

- **引入版本**

    1.0.7

- **参数**

1. n: 函数（func）允许调用的最大次数
2. func (function): 执行函数。

- **返回**

    (function): 新的函数。

- **例子**

```javascript
let count = 0;
const func = function () {
    count++;
};
const funcalled = utils.after(3, func);
for(let i = 0; i < 10; i++) {
    funcalled();
}
console.log(count); // => 7
```
