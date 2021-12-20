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
    - [chunk](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Array/chunk)
    - [compact](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Array/compact)
    - [compare](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Array/compare)
    - [oneOf](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Array/oneOf)
    - [rangeArr](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Array/rangeArr)
    - [toArray](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Array/toArray)
    - [unique](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Array/unique)
  - **Base**
    - [get](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Base/get)
    - [getStore](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Base/getStore)
    - [setStore](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Base/setStore)
    - [removeStore](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Base/removeStore)
    - [getType](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Base/getType)
    - [isArray](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Base/isArray)
    - [isBoolean](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Base/isBoolean)
    - [isElement](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Base/isElement)
    - [isEmpty](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Base/isEmpty)
    - [isFunction](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Base/isFunction)
    - [isInteger](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Base/isInteger)
    - [isNative](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Base/isNative)
    - [isNumber](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Base/isNumber)
    - [isObject](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Base/isObject)
    - [isPlainObject](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Base/isPlainObject)
    - [isPrimitive](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Base/isPrimitive)
    - [isString](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Base/isString)
    - [isUndefined](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Base/isUndefined)
    - [uuid](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Base/uuid)
  - **Date**
    - [formatDate](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Date/formatDate)
    - [isLeapYear](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Date/isLeapYear)
  - **Dom**
    - [addClass](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Dom/addClass)
    - [hasClass](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Dom/hasClass)
    - [removeClass](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Dom/removeClass)
    - [toggleClass](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Dom/toggleClass)
    - [maybeAddPx](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Dom/maybeAddPx)
    - [on](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Dom/on)
    - [off](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Dom/off)
    - [once](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Dom/once)
    - [offset](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Dom/offset)
    - [scrollTo](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Dom/scrollTo)
  - **Function**
    - [noop](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Function/noop)
  - **Math**
    - [max](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Math/max)
    - [min](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Math/min)
    - [random](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Math/random)
    - [toFixed](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/Math/toFixed)
  - **RegExp**
    - [isChinese](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/RegExp/isChinese)
    - [isEmail](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/RegExp/isEmail)
    - [isIdCard](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/RegExp/isIdCard)
    - [isMobile](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/RegExp/isMobile)
    - [isTel](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/RegExp/isTel)
    - [isUrl](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/RegExp/isUrl)
  - **String**
    - [camelCase](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/String/camelCase)
    - [capitalize](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/String/capitalize)
    - [uncapitalize](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/String/uncapitalize)
    - [trim](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/String/trim)
    - [ltrim](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/String/ltrim)
    - [rtrim](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/String/rtrim)
    - [parseUrl](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/String/parseUrl)
    - [pathResolve](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/String/pathResolve)
    - [split](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/String/split)
    - [template](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/String/template)
    - [toNumber](https://code.cestc.cn/cestc_wh/data_center/web-frontEnd/utils/-/blob/master/src/String/toNumber)

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
