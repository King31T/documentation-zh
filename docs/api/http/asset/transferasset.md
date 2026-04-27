# /wallet/transferasset

TRC10 通证转账。

- 源码：`framework/src/main/java/org/tron/core/services/http/TransferAssetServlet.java`
- Method：`POST`
- Contract：`protocol.TransferAssetContract`（`asset_issue_contract.proto:36`）

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `owner_address` | string | 是 | 发起方 |
| `to_address` | string | 是 | 接收方 |
| `asset_name` | string | 是 | 通证 ID（自 `ALLOW_SAME_TOKEN_NAME` 提案生效后是字符串形式的 token id，如 `1000001`，hex UTF-8 编码） |
| `amount` | int64 | 是 | 转账数量（最小单位） |
| `extra_data` | string | 否 | 交易备注（hex；`visible=true` 时为 UTF-8 文本） |
| `permission_id` | int32 | 否 | 多签权限 ID |
| `visible` | bool | 否 | 地址、文本字段格式 |

示例：

```json
{
  "owner_address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
  "to_address":    "TPL66VK2gCXNCD7EJg9pgJRfqcRbnn4zcp",
  "asset_name":    "31303030303031",
  "amount": 100,
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
              "to_address": "TPL66VK2gCXNCD7EJg9pgJRfqcRbnn4zcp",
              "asset_name": "31303030303031",
              "amount": 100
          },
          "type_url": "type.googleapis.com/protocol.TransferAssetContract"
        },
        "type": "TransferAssetContract"
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
