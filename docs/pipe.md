#### #pipe

```javascript
utils.pipe(...list);
```

将 Promise 返回和异步函数组合到可重用的管道中。

- **引入版本**

    1.6.0

- **参数**

1. list: 函数（function）集合。

- **返回**

    (function): 待执行函数（Promise）。

- **例子**

```javascript

const addTest = async (str: string): Promise<string> => `test ${str} word`;
const addTest1 = async (str: string): Promise<string> => `test ${str} word1`;

const pipeline = utils.pipe(addTest, addTest1);

(async () => {
    console.log(await pipeline('hello'));
    //=> 'test hello word1'
})();

```
