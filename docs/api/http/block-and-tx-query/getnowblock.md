# /wallet/getnowblock

返回当前最新区块。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetNowBlockServlet.java`
- Method：`GET` / `POST`
- 支持固化接口：`/walletsolidity/getnowblock`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `visible` | bool | 否 | 地址、文本字段格式 |

示例：

```bash
curl http://127.0.0.1:8090/wallet/getnowblock
```

## 响应

返回 `protocol.Block`（`Tron.proto:521`）：

| 字段 | 类型 | 说明 |
|---|---|---|
| `blockID` | string | 区块哈希（HTTP 输出额外加的字段） |
| `block_header.raw_data.timestamp` | int64 | 出块时间，毫秒 |
| `block_header.raw_data.txTrieRoot` | bytes | 交易 Merkle 根 |
| `block_header.raw_data.parentHash` | bytes | 父区块哈希 |
| `block_header.raw_data.number` | int64 | 区块号 |
| `block_header.raw_data.witness_address` | bytes | 出块见证人地址 |
| `block_header.raw_data.version` | int32 | 区块版本 |
| `block_header.witness_signature` | bytes | 见证人签名 |
| `transactions` | repeated Transaction | 该区块包含的交易 |

响应示例：

```json
{
  "blockID": "0000000001e0e2f8aabb1234567890abcdef1234567890abcdef1234567890ab",
  "block_header": {
    "raw_data": {
      "number": 31600000,
      "txTrieRoot": "abcd1234...",
      "witness_address": "414f6e3c...",
      "parentHash": "0000000001e0e2f7...",
      "version": 28,
      "timestamp": 1700000000000
    },
    "witness_signature": "9a3f..."
  },
  "transactions": []
}
```

无区块时返回 `{}`。
