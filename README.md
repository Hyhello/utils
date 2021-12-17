# @hyhello/utils

### 介绍

前端业务常用工具函数库。

### 目录

- [安装教程](#安装教程)
- [使用说明](#使用说明)
- [按需接入](#按需接入)
- [支持情况](#支持情况)
- [API](#)
  - **Array**
    - [chunk](https://github.com/Hyhello/utils/blob/master/packages/Array/chunk/README.md)
    - [compact](https://github.com/Hyhello/utils/blob/master/packages/Array/compact/README.md)
    - [compare](https://github.com/Hyhello/utils/blob/master/packages/Array/compare/README.md)
    - [oneOf](https://github.com/Hyhello/utils/blob/master/packages/Array/oneOf/README.md)
    - [rangeArr](https://github.com/Hyhello/utils/blob/master/packages/Array/rangeArr/README.md)
    - [toArray](https://github.com/Hyhello/utils/blob/master/packages/Array/toArray/README.md)
    - [unique](https://github.com/Hyhello/utils/blob/master/packages/Array/unique/README.md)
  - **Base**
    - [get](https://github.com/Hyhello/utils/blob/master/packages/Base/get/README.md)
    - [getStore](https://github.com/Hyhello/utils/blob/master/packages/Base/getStore/README.md)
    - [setStore](https://github.com/Hyhello/utils/blob/master/packages/Base/setStore/README.md)
    - [removeStore](https://github.com/Hyhello/utils/blob/master/packages/Base/removeStore/README.md)
    - [getType](https://github.com/Hyhello/utils/blob/master/packages/Base/getType/README.md)
    - [isArray](https://github.com/Hyhello/utils/blob/master/packages/Base/isArray/README.md)
    - [isBoolean](https://github.com/Hyhello/utils/blob/master/packages/Base/isBoolean/README.md)
    - [isElement](https://github.com/Hyhello/utils/blob/master/packages/Base/isElement/README.md)
    - [isEmpty](https://github.com/Hyhello/utils/blob/master/packages/Base/isEmpty/README.md)
    - [isFunction](https://github.com/Hyhello/utils/blob/master/packages/Base/isFunction/README.md)
    - [isInteger](https://github.com/Hyhello/utils/blob/master/packages/Base/isInteger/README.md)
    - [isNative](https://github.com/Hyhello/utils/blob/master/packages/Base/isNative/README.md)
    - [isNumber](https://github.com/Hyhello/utils/blob/master/packages/Base/isNumber/README.md)
    - [isObject](https://github.com/Hyhello/utils/blob/master/packages/Base/isObject/README.md)
    - [isPlainObject](https://github.com/Hyhello/utils/blob/master/packages/Base/isPlainObject/README.md)
    - [isPrimitive](https://github.com/Hyhello/utils/blob/master/packages/Base/isPrimitive/README.md)
    - [isString](https://github.com/Hyhello/utils/blob/master/packages/Base/isString/README.md)
    - [isUndefined](https://github.com/Hyhello/utils/blob/master/packages/Base/isUndefined/README.md)
    - [uuid](https://github.com/Hyhello/utils/blob/master/packages/Base/uuid/README.md)
  - **Date**
    - [formatDate](https://github.com/Hyhello/utils/blob/master/packages/Date/formatDate/README.md)
    - [isLeapYear](https://github.com/Hyhello/utils/blob/master/packages/Date/isLeapYear/README.md)
  - **Dom**
    - [addClass](https://github.com/Hyhello/utils/blob/master/packages/Dom/addClass/README.md)
    - [hasClass](https://github.com/Hyhello/utils/blob/master/packages/Dom/hasClass/README.md)
    - [removeClass](https://github.com/Hyhello/utils/blob/master/packages/Dom/removeClass/README.md)
    - [toggleClass](https://github.com/Hyhello/utils/blob/master/packages/Dom/toggleClass/README.md)
    - [maybeAddPx](https://github.com/Hyhello/utils/blob/master/packages/Dom/maybeAddPx/README.md)
    - [on](https://github.com/Hyhello/utils/blob/master/packages/Dom/on/README.md)
    - [off](https://github.com/Hyhello/utils/blob/master/packages/Dom/off/README.md)
    - [once](https://github.com/Hyhello/utils/blob/master/packages/Dom/once/README.md)
    - [offset](https://github.com/Hyhello/utils/blob/master/packages/Dom/offset/README.md)
    - [scrollTo](https://github.com/Hyhello/utils/blob/master/packages/Dom/scrollTo/README.md)
  - **Function**
    - [noop](https://github.com/Hyhello/utils/blob/master/packages/Function/noop/README.md)
  - **Math**
    - [max](https://github.com/Hyhello/utils/blob/master/packages/Math/max/README.md)
    - [min](https://github.com/Hyhello/utils/blob/master/packages/Math/min/README.md)
    - [random](https://github.com/Hyhello/utils/blob/master/packages/Math/random/README.md)
    - [toFixed](https://github.com/Hyhello/utils/blob/master/packages/Math/toFixed/README.md)
  - **RegExp**
    - [isChinese](https://github.com/Hyhello/utils/blob/master/packages/RegExp/isChinese/README.md)
    - [isEmail](https://github.com/Hyhello/utils/blob/master/packages/RegExp/isEmail/README.md)
    - [isIdCard](https://github.com/Hyhello/utils/blob/master/packages/RegExp/isIdCard/README.md)
    - [isMobile](https://github.com/Hyhello/utils/blob/master/packages/RegExp/isMobile/README.md)
    - [isTel](https://github.com/Hyhello/utils/blob/master/packages/RegExp/isTel/README.md)
    - [isUrl](https://github.com/Hyhello/utils/blob/master/packages/RegExp/isUrl/README.md)
  - **String**
    - [camelCase](https://github.com/Hyhello/utils/blob/master/packages/String/camelCase/README.md)
    - [capitalize](https://github.com/Hyhello/utils/blob/master/packages/String/capitalize/README.md)
    - [uncapitalize](https://github.com/Hyhello/utils/blob/master/packages/String/uncapitalize/README.md)
    - [trim](https://github.com/Hyhello/utils/blob/master/packages/String/trim/README.md)
    - [ltrim](https://github.com/Hyhello/utils/blob/master/packages/String/ltrim/README.md)
    - [rtrim](https://github.com/Hyhello/utils/blob/master/packages/String/rtrim/README.md)
    - [parseUrl](https://github.com/Hyhello/utils/blob/master/packages/String/parseUrl/README.md)
    - [pathResolve](https://github.com/Hyhello/utils/blob/master/packages/String/pathResolve/README.md)
    - [split](https://github.com/Hyhello/utils/blob/master/packages/String/split/README.md)
    - [template](https://github.com/Hyhello/utils/blob/master/packages/String/template/README.md)
    - [toNumber](https://github.com/Hyhello/utils/blob/master/packages/String/toNumber/README.md)

### 安装教程

```nodejs
npm install @hyhello/utils
```

Note: add --save if you are using npm < 5.0.0

### 使用说明

Use in a browser(CDN):

```nodejs
<script src="utils.umd.js"></script>
```

Use In Node.js:

```nodejs
// Load the full build.
var utils = require('@hyhello/utils');

// Load method categories.
var isArray = require('@hyhello/utils/lib/isArray');
or
var { isArray } = require('@hyhello/utils');
```

Use In ES6:

```nodejs
// Load the full build.
import utils from '@hyhello/utils';

// Load method categories.
import isArray from '@hyhello/utils/lib/isArray';
or
import { isArray } from '@hyhello/utils';
```

### 按需引入

#### Usage

```nodejs
npm install babel-plugin-import --save-dev
```

Via .babelrc or babel-loader.

```nodejs
{
  "plugins": [["import", options]]
}
```

#### options

options can be object.

```nodejs
{
  "libraryName": "@hyhello/utils",
  "libraryDirectory": "lib",
  "camel2DashComponentName": false,  // default: true
}
```

#### For example, the default behavior

```nodejs
import { isArray } from '@hyhello/utils';
↓ ↓ ↓ ↓ ↓ ↓
var isArray = require('@hyhello/utils/lib/isArray');
```

### 支持情况

Chrome 74-75, Firefox 66-67, IE 11, Edge 18, Safari 11-12, & Node.js 8-12.

注：采用 jest + jsdom 进行单元测试，报告如下：

- Statements：98.96%
- Branches：97.22%
- Functions: 99.28%
- Lines: 99.02%
