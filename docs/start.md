# 快速上手

### 基础使用

#### Use in a browser(CDN):

```javascript
<!-- 引入库 -->
<script src="https://cdn.jsdelivr.net/npm/@hyhello/utils/lib/index.min.js"></script>
or
<script src="https://unpkg.com/@hyhello/utils/lib/index.min.js"></script>
```

##### Use In Node.js:

```javascript
// Load the full build.
var utils = require('@hyhello/utils');

// Load method categories.
var isArray = require('@hyhello/utils/lib/isArray');
or
var { isArray } = require('@hyhello/utils');
```

#### Use In ES6:

```javascript
// Load the full build.
import utils from '@hyhello/utils';

// Load method categories.
import isArray from '@hyhello/utils/lib/isArray';
or
import { isArray } from '@hyhello/utils';
```

### 扩展（按需引入）

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

> [!WARNING]
> 使用babel-plugin-import后就不能全部引入，详看[issue](https://github.com/umijs/babel-plugin-import/issues/448);

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
