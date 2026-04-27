# /wallet/gettransactionbyid

按交易 ID 查询交易（**不含执行结果**，只返回打包前的交易体）。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetTransactionByIdServlet.java`
- Method：`GET` / `POST`
- Request：`api.BytesMessage`
- 支持固化接口：`/walletsolidity/gettransactionbyid`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `value` | string | 是 | 交易 ID hex（32 字节） |
| `visible` | bool | 否 | 地址、文本字段格式 |

示例：

```json
{
  "value": "d5ec749ecc2a615399d8a6c864ea4c74ff9f8453eaa44d6b1e2f0b7b3e2f3b6a"
}
```

## 响应

返回 `protocol.Transaction`：

| 字段 | 类型 | 说明 |
|---|---|---|
| `txID` | string | 交易 ID（HTTP 输出额外加） |
| `raw_data.contract` | repeated Contract | 合约数组（一般 1 个） |
| `raw_data.ref_block_*` | bytes/int64 | 关联块信息 |
| `raw_data.expiration` | int64 | 过期时间，毫秒 |
| `raw_data.timestamp` | int64 | 交易时间戳 |
| `raw_data.fee_limit` | int64 | 智能合约调用的费用上限 |
| `raw_data_hex` | string | raw_data 的 hex 编码 |
| `signature` | repeated bytes | 签名 |
| `ret` | repeated Result | 交易结果（含 `contractRet`） |

响应示例：

```json
{
  "ret": [{ "contractRet": "SUCCESS" }],
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

不存在返回 `{}`。需要交易执行结果（包含 receipt、log）请用 [`/wallet/gettransactioninfobyid`](gettransactioninfobyid.md)。
