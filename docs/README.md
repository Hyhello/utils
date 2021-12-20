# @whfed/wh-utils

### 介绍

前端业务常用工具函数库。

### 目录

- [安装教程](#安装教程)
- [使用说明](#使用说明)
- [按需接入](#按需接入)
- [支持情况](#支持情况)

### 安装教程

```nodejs
npm install @whfed/wh-utils
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
var utils = require('@whfed/wh-utils');

// Load method categories.
var isArray = require('@whfed/wh-utils/lib/isArray');
or
var { isArray } = require('@whfed/wh-utils');
```

Use In ES6:

```nodejs
// Load the full build.
import utils from '@whfed/wh-utils';

// Load method categories.
import isArray from '@whfed/wh-utils/lib/isArray';
or
import { isArray } from '@whfed/wh-utils';
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
  "libraryName": "@whfed/wh-utils",
  "libraryDirectory": "lib",
  "camel2DashComponentName": false,  // default: true
}
```

#### For example, the default behavior

```nodejs
import { isArray } from '@whfed/wh-utils';
↓ ↓ ↓ ↓ ↓ ↓
var isArray = require('@whfed/wh-utils/lib/isArray');
```

### 支持情况

Chrome 74-75, Firefox 66-67, IE 11, Edge 18, Safari 11-12, & Node.js 8-12.

注：采用 jest + jsdom 进行单元测试，报告如下：

- Statements：98.96%
- Branches：97.22%
- Functions: 99.28%
- Lines: 99.02%
