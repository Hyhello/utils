#### #isPrimitive

```javascript
utils.isPrimitive(v);
```

检测变量（v）是否是基本类型。

- **引入版本**

    1.0.0

- **参数**

    1. v (unknown): 待检测类型的变量。

- **返回**

    (boolean): 如果 v 为一个基本类型，那么返回 true，否则返回 false。

- **例子**

```javascript
utils.isPrimitive(true);
// => true

// 构造函数创建的默认认为不是基本类型，属于引用类型，因为typeof new Boolean() === 'object', 在内存中存储的位置也不一样
utils.isPrimitive(new Boolean(true));
// => false

utils.isPrimitive(null);
// => true

utils.isPrimitive(new Date());
// => false

utils.isPrimitive(function () {});
// => false
```
