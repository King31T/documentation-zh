# /wallet/updateaccount

修改账户昵称（account_name）。该字段不唯一。

- 源码：`framework/src/main/java/org/tron/core/services/http/UpdateAccountServlet.java`
- Method：`POST`（`GET` 不实现）
- Contract：`protocol.AccountUpdateContract`（`account_contract.proto:33`）

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `owner_address` | string | 是 | 账户地址 |
| `account_name` | string | 是 | 新的账户名（hex 编码 UTF-8） |
| `permission_id` | int32 | 否 | 多签权限 ID |
| `visible` | bool | 否 | 地址、文本字段格式 |

示例（`visible=true`，`account_name` 仍需 hex）：

```json
{
  "owner_address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
  "account_name": "6e69636b6e616d65",
  "visible": true
}
```

## 响应

返回未签名 `protocol.Transaction`。

响应示例：

```json
{
  "visible": true,
  "txID": "d5ec749ecc2a615399d8a6c864ea4c74ff9f8453eaa44d6b1e2f0b7b3e2f3b6a",
  "raw_data": {
    "contract": [
      {
        "parameter": {
          "value": {
              "owner_address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
              "account_name": "6e69636b6e616d65"
          },
          "type_url": "type.googleapis.com/protocol.AccountUpdateContract"
        },
        "type": "AccountUpdateContract"
      }
    ],
    "ref_block_bytes": "1c9a",
    "ref_block_hash": "8d3a8c0e2c6e8b04",
    "expiration": 1700000060000,
    "timestamp": 1700000000000
  },
  "raw_data_hex": "0a02..."
}
```
