# 快速上手

### 基础使用

#### Use in a browser(CDN):

```nodejs
<script src="utils.umd.js"></script>
```

##### Use In Node.js:

```nodejs
// Load the full build.
var utils = require('@whfed/wh-utils');

// Load method categories.
var isArray = require('@whfed/wh-utils/lib/isArray');
or
var { isArray } = require('@whfed/wh-utils');
```

#### Use In ES6:

```nodejs
// Load the full build.
import utils from '@whfed/wh-utils';

// Load method categories.
import isArray from '@whfed/wh-utils/lib/isArray';
or
import { isArray } from '@whfed/wh-utils';
```

### 扩展（按需引入）

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
