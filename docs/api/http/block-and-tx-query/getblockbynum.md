# /wallet/getblockbynum

按区块号查询区块。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetBlockByNumServlet.java`
- Method：`GET` / `POST`
- Request：`api.NumberMessage`
- 支持固化接口：`/walletsolidity/getblockbynum`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `num` | int64 | 是 | 区块号 |
| `visible` | bool | 否 | 地址、文本字段格式 |

GET 示例：`/wallet/getblockbynum?num=44225267`

POST 示例：

```json
{ "num": 44225267 }
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

区块号不存在返回 `{}`。
