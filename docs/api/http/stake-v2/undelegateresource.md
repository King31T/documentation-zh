# /wallet/undelegateresource

撤销资源代理（Stake 2.0），收回代理量。

- 源码：`framework/src/main/java/org/tron/core/services/http/UnDelegateResourceServlet.java`
- Method：`POST`
- Contract：`protocol.UnDelegateResourceContract`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `owner_address` | string | 是 | 出借方地址 |
| `receiver_address` | string | 是 | 接收方地址 |
| `balance` | int64 | 是 | 撤销代理的冻结量（sun） |
| `resource` | enum | 否 | `BANDWIDTH` / `ENERGY` |
| `permission_id` | int32 | 否 | 多签权限 ID |
| `visible` | bool | 否 | 地址格式 |

示例：

```json
{
  "owner_address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
  "receiver_address": "TPL66VK2gCXNCD7EJg9pgJRfqcRbnn4zcp",
  "balance": 1000000000,
  "resource": "ENERGY",
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
              "receiver_address": "TPL66VK2gCXNCD7EJg9pgJRfqcRbnn4zcp",
              "balance": 1000000000,
              "resource": "ENERGY"
          },
          "type_url": "type.googleapis.com/protocol.UnDelegateResourceContract"
        },
        "type": "UnDelegateResourceContract"
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
