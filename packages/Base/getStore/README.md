#### #getStore

```javascript
utils.getStore(name, [(deep = false)]);
```

根据 name 从 localStorage/sessionStorage 里面获取浏览器中存储的值。

- **引入版本**

    1.0.0

- **参数**

1. name (string): 存储对象中第 n 个键的名称。
2. [deep] (boolean): 如果 deep 为 true，则从 localStorage 里面获取指定键的值，否则从 sessionStorage 里面获取指定键的值。

- **返回**

    (any): 返回指定键的值。

- **列子**

```javascript
window.locationStorage.setItem('test_a', '1');
window.sessionStorage.setItem('test_a', '2');

utils.getStore('test_a');
// => '2'

utils.getStore('test_a', true);
// => '1'
```
