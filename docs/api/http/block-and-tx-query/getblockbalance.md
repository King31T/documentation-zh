# /wallet/getblockbalance

返回某区块内所有交易引发的余额变动追踪（block balance trace）。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetBlockBalanceServlet.java`
- Method：`POST`
- Request：`protocol.BlockBalanceTrace.BlockIdentifier`
- Response：`protocol.BlockBalanceTrace`（`balance_contract.proto:53`）

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `hash` | string | 是 | 区块哈希 hex |
| `number` | int64 | 是 | 区块号 |
| `visible` | bool | 否 | 地址格式 |

示例：

```json
{
  "hash": "0000000002a1f4f3b2e3eaab98a6f5c98c3a59c3eaa12345678901234567890ab",
  "number": 44225267
}
```

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `block_identifier.hash` | bytes | 区块哈希 |
| `block_identifier.number` | int64 | 区块号 |
| `timestamp` | int64 | 区块时间，毫秒 |
| `transaction_balance_trace` | repeated TransactionBalanceTrace | 该区块内每笔交易的余额变动 |

`TransactionBalanceTrace`（`balance_contract.proto:38`）：

| 字段 | 类型 | 说明 |
|---|---|---|
| `transaction_identifier` | bytes | 交易 ID |
| `operation` | repeated Operation | 多个 `(operation_identifier, address, amount)` 三元组 |
| `type` | string | 合约类型，如 `TransferContract` |
| `status` | string | 状态 |

响应示例：

```json
{
  "block_identifier": {
    "hash": "0000000002a1f4f3b2e3eaab98a6f5c98c3a59c3eaa12345678901234567890ab",
    "number": 44225267
  },
  "timestamp": 1700000000000,
  "transaction_balance_trace": [
    {
      "transaction_identifier": "d5ec749ecc2a615399d8a6c864ea4c74ff9f8453eaa44d6b1e2f0b7b3e2f3b6a",
      "operation": [
        { "operation_identifier": 0, "address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv", "amount": -1000000 },
        { "operation_identifier": 1, "address": "TPL66VK2gCXNCD7EJg9pgJRfqcRbnn4zcp", "amount": 1000000 }
      ],
      "type": "TransferContract",
      "status": "SUCCESS"
    }
  ]
}
```

需开启 `node.balanceTrace = true`；否则返回 `{}`。
