# 快速上手

### 基础使用

#### Use in a browser(CDN):

```nodejs
<script src="utils.umd.js"></script>
```

##### Use In Node.js:

```nodejs
// Load the full build.
var utils = require('@hyhello/utils');

// Load method categories.
var isArray = require('@hyhello/utils/lib/isArray');
or
var { isArray } = require('@hyhello/utils');
```

#### Use In ES6:

```nodejs
// Load the full build.
import utils from '@hyhello/utils';

// Load method categories.
import isArray from '@hyhello/utils/lib/isArray';
or
import { isArray } from '@hyhello/utils';
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
