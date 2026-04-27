# /wallet/getaccountbalance

按指定区块查询账户的 TRX 余额（带 block 锚点）。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetAccountBalanceServlet.java`
- Method：`POST`
- Request：`protocol.AccountBalanceRequest`（`balance_contract.proto:74`）
- Response：`protocol.AccountBalanceResponse`（`balance_contract.proto:79`）

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `account_identifier.address` | string | 是 | 账户地址 |
| `block_identifier.hash` | string | 是 | 区块哈希 |
| `block_identifier.number` | int64 | 是 | 区块号 |
| `visible` | bool | 否 | 地址格式 |

示例：

```json
{
  "account_identifier": { "address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv" },
  "block_identifier": {
    "hash": "0000000002a1f4f3b2e3...",
    "number": 44225267
  },
  "visible": true
}
```

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `balance` | int64 | 该区块下账户余额（sun） |
| `block_identifier` | object | 锚定区块的 hash/number |

响应示例：

```json
{
  "balance": 1234567890,
  "block_identifier": {
    "hash": "0000000002a1f4f3b2e3eaab98a6f5c98c3a59c3eaa12345678901234567890ab",
    "number": 44225267
  }
}
```

需要节点开启 `localwitness` / 历史余额追踪相关配置；未启用时可能返回错误或 `{}`。
