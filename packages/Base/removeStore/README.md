#### #removeStore

```javascript
utils.removeStore(name, [(deep = false)]);
```

从 localStorage/sessionStorage 里面移除键。

- **引入版本**

    1.0.0

- **参数**

1. name (string): 存储对象中第 n 个键的名称。
1. [deep] (boolean): 如果 deep 为 true，则从 localStorage 里面移除，否则从 sessionStorage 里面移除。

- **返回**

    (void): 无返回值。

- **列子**

```javascript
utils.removeStore('test_a', '1', true);
utils.removeStore('test_a', '2');

utils.getStore('test_a');
// => null

utils.getStore('test_a', true);
// => null
```
