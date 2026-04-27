# /wallet/getsignweight

校验已部分签名的多签交易，返回当前权重和是否达到 threshold。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetTransactionSignWeightServlet.java`
- Method：`POST`
- Response：`api.TransactionSignWeight`（`api.proto:1259`）

## 请求参数

直接传 `protocol.Transaction` 的 JSON（含已收集到的若干 `signature`）：

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `raw_data` / `raw_data_hex` | object/string | 是 | 同 broadcasttransaction |
| `signature` | string[] | 是 | 已收集的签名（可以只有 1 个） |
| `visible` | bool | 否 | 地址、文本字段格式（响应含 `result.message`，受 `visible` 影响） |

示例：请求体为带 `signature` 的 Transaction JSON，结构同 [`/wallet/broadcasttransaction`](broadcasttransaction.md)。

```json
{
  "raw_data": { "...": "..." },
  "raw_data_hex": "0a02...",
  "signature": ["b8c0...01"],
  "visible": true
}
```

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `permission` | Permission | 当前生效的权限 |
| `current_weight` | int64 | 当前已累积权重 |
| `result.code` | enum | `ENOUGH_PERMISSION` / `NOT_ENOUGH_PERMISSION` / `SIGNATURE_FORMAT_ERROR` / `COMPUTE_ADDRESS_ERROR` / `PERMISSION_ERROR` / `OTHER_ERROR` |
| `result.message` | string | 错误描述 |
| `transaction` | TransactionExtention | 原交易；其中 `transaction.transaction` 字段经 `Util.printTransactionToJSON` 重写为完整未签名交易 JSON（含 `txID`、`raw_data.contract`、`raw_data_hex`） |
| `approved_list` | repeated bytes | `visible=true` 时为 base58 地址数组，`visible=false` 时为 hex（21 字节，带 `41` 前缀） |

响应示例：

```json
{
  "permission": {
    "type": "Active",
    "id": 2,
    "permission_name": "active",
    "threshold": 2,
    "keys": [
      { "address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv", "weight": 1 },
      { "address": "TPL66VK2gCXNCD7EJg9pgJRfqcRbnn4zcp", "weight": 1 }
    ]
  },
  "current_weight": 1,
  "approved_list": ["TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv"],
  "result": { "code": "NOT_ENOUGH_PERMISSION" },
  "transaction": {
    "txid": "d5ec749ecc2a615399d8a6c864ea4c74ff9f8453eaa44d6b1e2f0b7b3e2f3b6a",
    "transaction": { "...": "..." }
  }
}
```

`current_weight >= permission.threshold` 时 `code=ENOUGH_PERMISSION`，可以广播。
