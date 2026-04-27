# /wallet/createtransaction

创建一笔 TRX 转账（`TransferContract`）的未签名交易。

- 源码：`framework/src/main/java/org/tron/core/services/http/TransferServlet.java`
- Method：`POST`
- Contract：`protocol.TransferContract`（`balance_contract.proto:32`）

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `owner_address` | string | 是 | 发起方地址 |
| `to_address` | string | 是 | 接收方地址 |
| `amount` | int64 | 是 | 金额，sun（1 TRX = 1e6 sun） |
| `permission_id` | int32 | 否 | 多签权限 ID |
| `extra_data` | string | 否 | 写入 `raw_data.data`（hex；`visible=true` 时为 UTF-8） |
| `visible` | bool | 否 | 地址格式 |

示例：

```json
{
  "owner_address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
  "to_address":    "TPL66VK2gCXNCD7EJg9pgJRfqcRbnn4zcp",
  "amount": 1000000,
  "visible": true
}
```

## 响应

返回未签名 `protocol.Transaction`（含 `txID`、`raw_data`、`raw_data_hex`，`signature` 为空）。

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
            "amount": 1000000,
            "owner_address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
            "to_address": "TPL66VK2gCXNCD7EJg9pgJRfqcRbnn4zcp"
          },
          "type_url": "type.googleapis.com/protocol.TransferContract"
        },
        "type": "TransferContract"
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

错误情形：地址非法、`amount <= 0`、`owner_address == to_address`、余额不足等返回 400 + `{"Error": "..."}`。
