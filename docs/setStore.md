#### #setStore

```javascript
utils.setStore(name, value, [(deep = false)]);
```

添加键（name）和值（value），如果对应的值存在，则更新该键对应的值。

- **引入版本**

    1.0.0

- **参数**

1. name (string): 存储对象中第 n 个键的名称。
1. value (string | unknown): 存储对象中的值。
1. [deep] (boolean): 如果 deep 为 true，则存储到 localStorage 里面，否则存储到 sessionStorage 里面。

- **返回**

    (void): 无返回值。

- **例子**

```javascript
utils.setStore('test_a', '1', true);
utils.setStore('test_a', '2');

utils.getStore('test_a');
// => '2'

utils.getStore('test_a', true);
// => '1'
```
