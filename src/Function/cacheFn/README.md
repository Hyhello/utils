#### #cacheFn

```javascript
utils.cacheFn(key);
```

缓存函数，参考的vue中的cached方法。

- **引入版本**

    1.9.0

- **参数**

    1. key: 待缓存的键值。

- **返回**

    (function): 新的函数。

- **例子**

```javascript
let count = 0;
const func = function () {
    return count++;
};
const funcalled = utils.cacheFn(func);
for(let i = 0; i < 10; i++) {
    funcalled();
}
console.log(count); // => 0
```
