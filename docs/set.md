#### #set

```javascript
utils.set(obj, path, value);
```

根据 obj 对象的 path 路径设置/更新值(value)。

- **引入版本**

    1.2.0

- **参数**

    1. obj (object): 要设置的对象。
    2. path (Array|string): 属性的路径。
    3. value (any): 需设置的值。

- **返回**

    (object): 返回处理后的值。

- **例子**

```javascript
const object = { a: [{ b: { c: 3 } }] };

utils.set(object, 'a[0].b.c', 2);
// => { a: [{ b: { c: 2 } }] }
```
