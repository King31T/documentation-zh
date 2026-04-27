# /wallet/participateassetissue

参与 TRC10 募集（用 TRX 购买）。

- 源码：`framework/src/main/java/org/tron/core/services/http/ParticipateAssetIssueServlet.java`
- Method：`POST`
- Contract：`protocol.ParticipateAssetIssueContract`（`asset_issue_contract.proto:55`）

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `owner_address` | string | 是 | 购买方 |
| `to_address` | string | 是 | 通证发行方地址 |
| `asset_name` | string | 是 | 通证 ID（hex UTF-8） |
| `amount` | int64 | 是 | 支付的 TRX，sun |
| `permission_id` | int32 | 否 | 多签权限 ID |
| `visible` | bool | 否 | 地址、文本字段格式 |

约束：必须在 `[start_time, end_time)` 期间内；获得的通证数量按 `num/trx_num` 折算。

示例：

```json
{
  "owner_address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
  "to_address": "TPL66VK2gCXNCD7EJg9pgJRfqcRbnn4zcp",
  "asset_name": "1000001",
  "amount": 1000000,
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
              "asset_name": "1000001",
              "amount": 1000000
          },
          "type_url": "type.googleapis.com/protocol.ParticipateAssetIssueContract"
        },
        "type": "ParticipateAssetIssueContract"
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
