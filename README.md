# @hyhello/utils

### 介绍

前端业务常用工具函数库。[查看在线文档](https://hyhello.github.io/utils/#/)

### 安装教程

```javascript
npm install @hyhello/utils
```

Note: add --save if you are using npm < 5.0.0

### 使用说明

Use in a browser(CDN):

```javascript
<!-- 引入库 -->
<script src="https://cdn.jsdelivr.net/npm/@hyhello/utils/lib/index.min.js"></script>
or
<script src="https://unpkg.com/@hyhello/utils/lib/index.min.js"></script>
```

Use In Node.js:

```javascript
// Load the full build.
var utils = require('@hyhello/utils');

// Load method categories.
var isArray = require('@hyhello/utils/lib/isArray');
or
var { isArray } = require('@hyhello/utils');
```

Use In ES6:

```javascript
// Load the full build.
import utils from '@hyhello/utils';

// Load method categories.
import isArray from '@hyhello/utils/lib/isArray';
or
import { isArray } from '@hyhello/utils';
```

### 按需引入

> [!TIP]
> 从 `V1.12.0` 版本开始，如果您使用的构建工具支持 `Tree shaking`，您在使用 `@hyhello/utils` 库时将能够实现按需加载，无需进行任何额外配置。

#### Usage in babel

```javascript
npm install babel-plugin-import --save-dev
```

Via .babelrc or babel-loader.

```javascript
{
  "plugins": [["import", options]]
}
```

options can be object.

```javascript
{
  "libraryName": "@hyhello/utils",
  "camel2DashComponentName": false,  // default: true
}
```

#### Usage in vite

```javascript
npm install vite-plugin-imp --save-dev
```

Via vite.config.js.

```javascript
import vitePluginImp from 'vite-plugin-img';

export default defineConfig({
    plugins: [vitePluginImp(options)]
});
```

options can be object.

```javascript
{
  "libName": "@hyhello/utils",
  "libDirectory": "lib",
  "camel2DashComponentName": false
}
```

#### For example, the default behavior

```javascript
import { isArray } from '@hyhello/utils';
↓ ↓ ↓ ↓ ↓ ↓
var isArray = require('@hyhello/utils/lib/isArray');
```

### 支持情况

Tested in Chrome 74-75, Firefox 66-67, IE 9, Edge 18, Safari 11-12.

注：采用 jest + jsdom 进行单元测试，报告如下：

- Statements：98.96%
- Branches：97.22%
- Functions: 99.28%
- Lines: 99.02%
