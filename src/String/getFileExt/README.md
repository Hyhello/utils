#### #getFileExt

```javascript
utils.getFileExt(filename);
```

获取文件扩展名。

- **引入版本**

    1.11.0

- **参数**

    1. filename (string): 文件名。

- **返回**

    (string): 返回文件名扩展名。

- **例子**

```javascript
utils.getFileExt('aaa.png');
// => png

utils.getFileExt('aaa.png.jpg');
// => jpg
```
