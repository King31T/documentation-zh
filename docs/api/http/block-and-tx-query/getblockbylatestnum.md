# /wallet/getblockbylatestnum

获取最新的 N 个区块。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetBlockByLatestNumServlet.java`
- Method：`GET` / `POST`
- Request：`api.NumberMessage`
- 支持固化接口：`/walletsolidity/getblockbylatestnum`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `num` | int64 | 是 | 取最近多少个区块（要求 `0 < num < 100`，最大 99；超出范围静默返回 `{}`） |
| `visible` | bool | 否 | 地址、文本字段格式 |

示例：

```json
{ "num": 5 }
```

## 响应

返回 `api.BlockList`，字段同 [`/wallet/getblockbylimitnext`](getblockbylimitnext.md)。

响应示例：

```json
{
  "block": [
    {
      "blockID": "0000000002a1f4f3...",
      "block_header": {
        "raw_data": {
          "number": 44225267,
          "txTrieRoot": "abcd...",
          "witness_address": "414f6e3c...",
          "parentHash": "0000000002a1f4f2...",
          "version": 28,
          "timestamp": 1700000000000
        },
        "witness_signature": "9a3f..."
      }
    }
  ]
}
```
