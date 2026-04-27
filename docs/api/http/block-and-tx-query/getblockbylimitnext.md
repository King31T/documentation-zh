# /wallet/getblockbylimitnext

获取区间 `[startNum, endNum)` 的区块列表（不包含 endNum）。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetBlockByLimitNextServlet.java`
- Method：`GET` / `POST`
- Request：`api.BlockLimit`
- 支持固化接口：`/walletsolidity/getblockbylimitnext`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `startNum` | int64 | 是 | 起始区块号（含） |
| `endNum` | int64 | 是 | 结束区块号（不含） |
| `visible` | bool | 否 | 地址、文本字段格式 |

约束：`endNum > startNum`，且 `endNum - startNum <= 100`。

示例：

```json
{ "startNum": 44225260, "endNum": 44225265 }
```

## 响应

返回 `api.BlockList`：

| 字段 | 类型 | 说明 |
|---|---|---|
| `block` | repeated Block | 区块数组 |

响应示例：

```json
{
  "block": [
    {
      "blockID": "0000000002a1f4ec...",
      "block_header": {
        "raw_data": {
          "number": 44225260,
          "txTrieRoot": "abcd...",
          "witness_address": "414f6e3c...",
          "parentHash": "0000000002a1f4eb...",
          "version": 28,
          "timestamp": 1700000000000
        },
        "witness_signature": "9a3f..."
      }
    }
  ]
}
```

无可用区块返回 `{}`。
