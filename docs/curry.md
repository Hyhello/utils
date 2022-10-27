#### #curry

```javascript
utils.curry(func, [...args]);
```

函数柯里化

- **引入版本**

    1.6.0

- **参数**

1. func: 执行函数。
2. args 函数（func）参数集合。

- **返回**

    (function): 待执行函数。

- **例子**

```javascript

function add(a: number, b: number, c: number): number {
    return a + b + c;
}

const curryFn = utils.curry(add);

console.log(currFn(1)(2)(3));
// => 6

console.log(currFn(1, 2)(3));
// => 6

console.log(currFn(1, 2, 3));
// => 6

```
