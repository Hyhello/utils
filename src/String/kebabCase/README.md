#### #kebabCase

```javascript
utils.kebabCase(str);
```

转换字符串string为kebab case。

- **引入版本**

    1.5.0

- **参数**

1. str (string): 待转换的字符串。

- **返回**

    (string): 返回处理后的字符串。

- **例子**

```javascript
utils.kebabCase('Foo Bar')
// => foo-bar

utils.kebabCase('fooBar')
// => foo-bar

utils.kebabCase('__FOO_BAR')
// => foo-bar
```
