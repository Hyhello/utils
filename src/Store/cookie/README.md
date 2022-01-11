#### #cookie

```javascript
// 从document.cookie里面获取值
utils.cookie.get(name);
// 设置/更新document.cookie的值
utils.cookie.set(name, value, [day=30]);
// 删除document.cookie里面存储的值
utils.cookie.clear(name);
```

封装 document.cookie。

- **引入版本**

    1.0.0

- **参数**（get, set, clear 所有参数进行描述）

1. name (string): 存储对象中第 n 个键的名称。
2. value (string): 存储对象中的值。
3. [day] (number): 存储的过期时间，默认30天。

- **返回**

    【get】(string | null): 返回指定键的值。

    【set、clear】(void): 无返回值。

- **例子**

    - cookie.get / cookie.get

        ```javascript
        utils.cookie.set('token', 'uuid_111', 7);

        utils.cookie.get('token');
        // => 'uuid_111'
        ```

    - cookie.clear

        ```javascript
        utils.cookie.set('token', 'uuid_111', 7);

        utils.cookie.clear('token');

        utils.cookie.get('token');
        // => null
        ```
