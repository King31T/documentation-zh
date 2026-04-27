# /wallet/createaccount

创建一个新账户的未签名交易。被动激活：付费方（owner_address）支付激活费用，新账户地址（account_address）即被创建。

- 源码：`framework/src/main/java/org/tron/core/services/http/CreateAccountServlet.java`
- Method：`POST`
- Contract：`protocol.AccountCreateContract`（`protocol/src/main/protos/core/contract/account_contract.proto:26`）

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `owner_address` | string | 是 | 付费方地址 |
| `account_address` | string | 是 | 待创建的新账户地址 |
| `type` | enum | 否 | 0=Normal（默认），1=AssetIssue，2=Contract |
| `permission_id` | int32 | 否 | 多签权限 ID |
| `visible` | bool | 否 | 地址格式 |

示例：

```json
{
  "owner_address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
  "account_address": "TPL66VK2gCXNCD7EJg9pgJRfqcRbnn4zcp",
  "visible": true
}
```

## 响应

返回未签名 `protocol.Transaction`（包含 `txID`、`raw_data`、`raw_data_hex`，`signature` 为空）。需要本地签名后再调用 `/wallet/broadcasttransaction` 或 `/wallet/broadcasthex`。

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
            "account_address": "TPL66VK2gCXNCD7EJg9pgJRfqcRbnn4zcp"
          },
          "type_url": "type.googleapis.com/protocol.AccountCreateContract"
        },
        "type": "AccountCreateContract"
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

激活账户费用从 `owner_address` 扣除，金额由链参数决定（一般 1 TRX）。
