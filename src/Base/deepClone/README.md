#### #deepClone

```javascript
utils.deepClone(v);
```

对象深拷贝。

- **引入版本**

    1.2.0

- **参数**

    1. v(any): 待拷贝的值。

- **返回**

    v(any): 深拷贝后的值。

- **例子**

```javascript

const objA = { a: 1 };

const objB = deepClone(objA);

objB['b'] = 2;

console.log(objA);
// => { a: 1 }

console.log(objB);
// => { a: 1, b: 2 }

```
