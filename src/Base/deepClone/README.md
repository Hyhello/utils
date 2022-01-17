#### #deepClone

```javascript
utils.deepClone(data);
```

深拷贝

- **引入版本**

    1.1.0

- **参数**

1. data(T) 待处理值。

- **返回**

    data(T) 处理后的值。

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
