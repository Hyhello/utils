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
    - [chunk](https://github.com/Hyhello/utils/blob/master/packages/Array/chunk)
    - [compact](https://github.com/Hyhello/utils/blob/master/packages/Array/compact)
    - [compare](https://github.com/Hyhello/utils/blob/master/packages/Array/compare)
    - [oneOf](https://github.com/Hyhello/utils/blob/master/packages/Array/oneOf)
    - [rangeArr](https://github.com/Hyhello/utils/blob/master/packages/Array/rangeArr)
    - [toArray](https://github.com/Hyhello/utils/blob/master/packages/Array/toArray)
    - [unique](https://github.com/Hyhello/utils/blob/master/packages/Array/unique)
  - **Base**
    - [get](https://github.com/Hyhello/utils/blob/master/packages/Base/get)
    - [getStore](https://github.com/Hyhello/utils/blob/master/packages/Base/getStore)
    - [setStore](https://github.com/Hyhello/utils/blob/master/packages/Base/setStore)
    - [removeStore](https://github.com/Hyhello/utils/blob/master/packages/Base/removeStore)
    - [getType](https://github.com/Hyhello/utils/blob/master/packages/Base/getType)
    - [isArray](https://github.com/Hyhello/utils/blob/master/packages/Base/isArray)
    - [isBoolean](https://github.com/Hyhello/utils/blob/master/packages/Base/isBoolean)
    - [isElement](https://github.com/Hyhello/utils/blob/master/packages/Base/isElement)
    - [isEmpty](https://github.com/Hyhello/utils/blob/master/packages/Base/isEmpty)
    - [isFunction](https://github.com/Hyhello/utils/blob/master/packages/Base/isFunction)
    - [isInteger](https://github.com/Hyhello/utils/blob/master/packages/Base/isInteger)
    - [isNative](https://github.com/Hyhello/utils/blob/master/packages/Base/isNative)
    - [isNumber](https://github.com/Hyhello/utils/blob/master/packages/Base/isNumber)
    - [isObject](https://github.com/Hyhello/utils/blob/master/packages/Base/isObject)
    - [isPlainObject](https://github.com/Hyhello/utils/blob/master/packages/Base/isPlainObject)
    - [isPrimitive](https://github.com/Hyhello/utils/blob/master/packages/Base/isPrimitive)
    - [isString](https://github.com/Hyhello/utils/blob/master/packages/Base/isString)
    - [isUndefined](https://github.com/Hyhello/utils/blob/master/packages/Base/isUndefined)
    - [uuid](https://github.com/Hyhello/utils/blob/master/packages/Base/uuid)
  - **Date**
    - [formatDate](https://github.com/Hyhello/utils/blob/master/packages/Date/formatDate)
    - [isLeapYear](https://github.com/Hyhello/utils/blob/master/packages/Date/isLeapYear)
  - **Dom**
    - [addClass](https://github.com/Hyhello/utils/blob/master/packages/Dom/addClass)
    - [hasClass](https://github.com/Hyhello/utils/blob/master/packages/Dom/hasClass)
    - [removeClass](https://github.com/Hyhello/utils/blob/master/packages/Dom/removeClass)
    - [toggleClass](https://github.com/Hyhello/utils/blob/master/packages/Dom/toggleClass)
    - [maybeAddPx](https://github.com/Hyhello/utils/blob/master/packages/Dom/maybeAddPx)
    - [on](https://github.com/Hyhello/utils/blob/master/packages/Dom/on)
    - [off](https://github.com/Hyhello/utils/blob/master/packages/Dom/off)
    - [once](https://github.com/Hyhello/utils/blob/master/packages/Dom/once)
    - [offset](https://github.com/Hyhello/utils/blob/master/packages/Dom/offset)
    - [scrollTo](https://github.com/Hyhello/utils/blob/master/packages/Dom/scrollTo)
  - **Function**
    - [noop](https://github.com/Hyhello/utils/blob/master/packages/Function/noop)
  - **Math**
    - [max](https://github.com/Hyhello/utils/blob/master/packages/Math/max)
    - [min](https://github.com/Hyhello/utils/blob/master/packages/Math/min)
    - [random](https://github.com/Hyhello/utils/blob/master/packages/Math/random)
    - [toFixed](https://github.com/Hyhello/utils/blob/master/packages/Math/toFixed)
  - **RegExp**
    - [isChinese](https://github.com/Hyhello/utils/blob/master/packages/RegExp/isChinese)
    - [isEmail](https://github.com/Hyhello/utils/blob/master/packages/RegExp/isEmail)
    - [isIdCard](https://github.com/Hyhello/utils/blob/master/packages/RegExp/isIdCard)
    - [isMobile](https://github.com/Hyhello/utils/blob/master/packages/RegExp/isMobile)
    - [isTel](https://github.com/Hyhello/utils/blob/master/packages/RegExp/isTel)
    - [isUrl](https://github.com/Hyhello/utils/blob/master/packages/RegExp/isUrl)
  - **String**
    - [camelCase](https://github.com/Hyhello/utils/blob/master/packages/String/camelCase)
    - [capitalize](https://github.com/Hyhello/utils/blob/master/packages/String/capitalize)
    - [uncapitalize](https://github.com/Hyhello/utils/blob/master/packages/String/uncapitalize)
    - [trim](https://github.com/Hyhello/utils/blob/master/packages/String/trim)
    - [ltrim](https://github.com/Hyhello/utils/blob/master/packages/String/ltrim)
    - [rtrim](https://github.com/Hyhello/utils/blob/master/packages/String/rtrim)
    - [parseUrl](https://github.com/Hyhello/utils/blob/master/packages/String/parseUrl)
    - [pathResolve](https://github.com/Hyhello/utils/blob/master/packages/String/pathResolve)
    - [split](https://github.com/Hyhello/utils/blob/master/packages/String/split)
    - [template](https://github.com/Hyhello/utils/blob/master/packages/String/template)
    - [toNumber](https://github.com/Hyhello/utils/blob/master/packages/String/toNumber)

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
