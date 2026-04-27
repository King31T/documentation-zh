# /wallet/validateaddress

校验地址格式合法性（hex / base58check / base64 自动识别）。**不查链**，只做编码 + checksum 校验。

- 源码：`framework/src/main/java/org/tron/core/services/http/ValidateAddressServlet.java`
- Method：`GET` / `POST`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `address` | string | 是 | 待校验地址，自动按长度判断格式：42 字符 hex / 34 字符 base58check / 28 字符 base64 |

示例：

```json
{ "address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv" }
```

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `result` | bool | 是否合法 |
| `message` | string | `Hex string format` / `Base58check format` / `Base64 format` / `Length error` / `Invalid address` |

响应示例：

```json
{ "result": true, "message": "Base58check format" }
```

### 异常响应

本接口不抛异常体，所有错误（长度不符、checksum 错误、base58/base64 解码失败等）通过 `result=false` + `message` 表达，**不会**返回 `{"Error": ...}` 形态。客户端只需判断 `result` 字段。
