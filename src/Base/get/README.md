#### #get

```javascript
utils.get(obj, path[, defaultValue]);
```

根据 obj 对象的 path 路径获取值。如果解析 value 是 undefined 会以 defaultValue 取代。

- **引入版本**

    1.0.0

- **参数**

1. obj (object): 要检索的对象。
2. path (Array|string): 要获取属性的路径。
3. [defaultValue] (any): 如果解析值是 undefined ，这值会被返回。

- **返回**

    (any): 返回解析的值。

- **例子**

```javascript
const object = { a: [{ b: { c: 3 } }] };

utils.get(object, 'a[0].b.c');
// => 3

utils.get(object, 'a.b.c', 'default');
// => 'default'
```
