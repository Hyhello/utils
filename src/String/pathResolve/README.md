#### #pathResolve

```javascript
utils.pathResolve(...args);
```

功能类似于 path.resolve，但比它简单

- **引入版本**

    1.0.0

- **参数**

1. args (Array&lt;string&gt;)：待合并路径。

- **返回**

    (number): 返回处理后的路径。

- **例子**

```javascript
utils.pathResolve('/b', '/ad/bc', './c', './a/dddd');
// => '/ad/bc/c/a/dddd'

utils.pathResolve('/b', '/ad/bc', '../c');
// => '/b/ad/c'
```
