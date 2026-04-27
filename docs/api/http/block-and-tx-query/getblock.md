# /wallet/getblock

按区块号或区块哈希查询区块，可选返回完整交易明细。统一替代 `getnowblock` / `getblockbynum` / `getblockbyid`。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetBlockServlet.java`
- Method：`GET` / `POST`
- Request：`api.BlockReq`
- 支持固化接口：`/walletsolidity/getblock`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `id_or_num` | string | 否 | 区块号（十进制字符串）或区块哈希 hex；为空时取最新区块 |
| `detail` | bool | 否 | 是否返回完整 `transactions`；false 时只返回 header（默认 false） |
| `visible` | bool | 否 | 地址、文本字段格式 |

示例：

```json
{ "id_or_num": "44225267", "detail": true }
```

## 响应

返回 `protocol.Block`（只是 `transactions` 是否填充取决于 `detail`），字段同 [`/wallet/getnowblock`](getnowblock.md)。

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

不存在返回 `{}`。
