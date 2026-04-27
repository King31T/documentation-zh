# /wallet/getblockbyid

按区块哈希查询区块。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetBlockByIdServlet.java`
- Method：`GET` / `POST`
- Request：`api.BytesMessage`
- 支持固化接口：`/walletsolidity/getblockbyid`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `value` | string | 是 | 区块哈希 hex |
| `visible` | bool | 否 | 地址、文本字段格式 |

示例：

```json
{ "value": "0000000002a1f4f3b2e3eaab98a6f5c98c3a59c3eaa12345678901234567890ab" }
```

## 响应

返回 `protocol.Block`，字段同 [`/wallet/getnowblock`](getnowblock.md)。

响应示例：

```json
{
  "blockID": "0000000002a1f4f3b2e3eaab98a6f5c98c3a59c3eaa12345678901234567890ab",
  "block_header": {
    "raw_data": {
      "number": 44225267,
      "txTrieRoot": "abcd1234...",
      "witness_address": "414f6e3c...",
      "parentHash": "0000000002a1f4f2...",
      "version": 28,
      "timestamp": 1700000000000
    },
    "witness_signature": "9a3f..."
  },
  "transactions": []
}
```

哈希不存在返回 `{}`。
