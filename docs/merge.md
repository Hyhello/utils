#### #merge

```javascript
utils.merge(target, source);
```

将源对象的属性合并到目标对象中。

- **引入版本**

    2.1.0

- **参数**

    1. target (T): 目标对象，源对象的属性将被合并到这个对象中。这个对象会被原地修改。
    2. source (S): 源对象，其属性将被合并到目标对象中。

- **返回**

    (T & S): 更新后的目标对象，其中包含了源对象的合并属性。

- **例子**

```javascript
const target = { a: { b: 1, c: 2 }, d: { m: [1, 2] } };
const result = utils.merge(target, { a: { b: [2, 1], c: 2 }, d: { m: [2, 3] } } );
// => { a: { b: [2, 1], c: 2 }, d: { m: [2, 3] }} };

console.log(target);
// => { a: { b: [2, 1], c: 2 }, d: { m: [2, 3] }} };

console.log(target === result);
// => true;
```
