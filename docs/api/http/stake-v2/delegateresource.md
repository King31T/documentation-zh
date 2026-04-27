# /wallet/delegateresource

把已冻结资源代理给其他账户使用（Stake 2.0）。

- 源码：`framework/src/main/java/org/tron/core/services/http/DelegateResourceServlet.java`
- Method：`POST`
- Contract：`protocol.DelegateResourceContract`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `owner_address` | string | 是 | 出借方地址 |
| `receiver_address` | string | 是 | 接收方地址 |
| `balance` | int64 | 是 | 代理对应的冻结量（sun） |
| `resource` | enum | 否 | `BANDWIDTH` / `ENERGY` |
| `lock` | bool | 否 | 是否锁定代理（true 时不可中途撤销） |
| `lock_period` | int64 | 否 | 锁定时长（块数，仅 lock=true） |
| `permission_id` | int32 | 否 | 多签权限 ID |
| `visible` | bool | 否 | 地址格式 |

示例：

```json
{
  "owner_address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
  "receiver_address": "TPL66VK2gCXNCD7EJg9pgJRfqcRbnn4zcp",
  "balance": 1000000000,
  "resource": "ENERGY",
  "lock": false,
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
              "resource": "ENERGY",
              "lock": false
          },
          "type_url": "type.googleapis.com/protocol.DelegateResourceContract"
        },
        "type": "DelegateResourceContract"
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
