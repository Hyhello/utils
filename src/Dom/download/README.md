#### #download

```javascript
utils.download(content, options);
```

附件下载

- **引入版本**

    1.9.0

- **参数**

    1. content(BlobPart): 需下载的资源。
    2. options(IOptions): 需下载资源配置。

- **返回**

    (void): 无。

- **类型**

```javascript
// 需下载的资源
type BlobPart = BufferSource | Blob | string;

// 需下载资源配置
interface IOptions {
    endings?: "native" | "transparent";
    type?: string; // 文件类型，default: "application/octet-stream"
    bom?: string;  // 是否
    filename?: string; // 文件名称
}
```

- **例子**

```javascript
utils.download('<div>测试</div>', { filename: 'text.html', type: 'html/text' });
```
