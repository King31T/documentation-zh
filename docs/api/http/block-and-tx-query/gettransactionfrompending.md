# /wallet/gettransactionfrompending

从待打包池（pending）按交易 ID 取交易。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetTransactionFromPendingServlet.java`
- Method：`GET` / `POST`
- Request：`api.BytesMessage`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `value` | string | 是 | 交易 ID hex |
| `visible` | bool | 否 | 地址、文本字段格式 |

示例：

```json
{
  "value": "d5ec749ecc2a615399d8a6c864ea4c74ff9f8453eaa44d6b1e2f0b7b3e2f3b6a"
}
```

## 响应

返回 `protocol.Transaction`（结构同 [`/wallet/gettransactionbyid`](gettransactionbyid.md)）。

响应示例：

```json
{
  "signature": ["b8c0...01"],
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

不在 pending 中（已打包或已失效）返回 `{}`。
