#### #store

```javascript
// 从localStorage/sessionStorage里面获取浏览器中存储的值
utils.store.get(name, [deep=false]);
// 设置/更新localStorage/sessionStorage里面存储的值
utils.store.set(name, value, [deep=false]);
// 删除localStorage/sessionStorage里面存储的值
utils.store.clear(name, [deep=false]);
// 清空localStorage/sessionStorage里面存储的所有值
utils.store.clearAll([deep=false]);
```

封装 localStorage/sessionStorage。

- **引入版本**

    1.0.5

- **参数**（get, set, clear, clearAll 所有参数进行描述）

1. name (string): 存储对象中第 n 个键的名称。
2. value (string | unknown): 存储对象中的值。
3. [deep] (boolean): 如果 deep 为 true，则存储到 localStorage 里面，否则存储到 sessionStorage 里面。

- **返回**

    【get】(any): 返回指定键的值。

    【set、clear、clearAll】(void): 无返回值。

- **例子**

    - store.get

        ```javascript
        window.locationStorage.setItem('test_a', '1');
        window.sessionStorage.setItem('test_a', '2');

        utils.store.get('test_a', true);
        // => '1'

        utils.store.get('test_a');
        // => '2'
        ```

    - store.set

        ```javascript
        utils.store.set('test_a', '1', true);
        utils.store.set('test_a', '2');

        utils.store.get('test_a', true);
        // => '1'

        utils.store.get('test_a');
        // => '2'
        ```

    - store.clear

        ```javascript
        window.locationStorage.setItem('test_a', '1');
        window.sessionStorage.setItem('test_a', '2');
        utils.store.clear('test_a', true);
        utils.store.clear('test_a');

        utils.store.get('test_a', true);
        // => null

        utils.store.get('test_a');
        // => null
        ```

    - store.clearAll

        ```javascript
        window.locationStorage.setItem('test_a', '1');
        window.sessionStorage.setItem('test_a', '2');

        utils.store.get('test_a', true);
        // => null

        utils.store.get('test_a');
        // => null
        ```
