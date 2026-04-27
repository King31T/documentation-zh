# /wallet/getapprovedlist

返回多签交易当前已签名地址列表（不计算权重，只列签名者）。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetTransactionApprovedListServlet.java`
- Method：`POST`
- Response：`api.TransactionApprovedList`（`api.proto:1280`）

## 请求参数

请求体同 [`/wallet/getsignweight`](getsignweight.md)：

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `raw_data` / `raw_data_hex` | object/string | 是 | Transaction |
| `signature` | string[] | 是 | 已收集的签名 |
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
| `approved_list` | repeated bytes | 已签名地址；`visible=true` 时为 base58 数组，`visible=false` 时为 hex（21 字节，带 `41` 前缀） |
| `result.code` | enum | `SUCCESS` / `SIGNATURE_FORMAT_ERROR` / `COMPUTE_ADDRESS_ERROR` / `OTHER_ERROR` |
| `result.message` | string | 错误描述（`visible=true` 时 UTF-8，否则 hex） |
| `transaction` | TransactionExtention | 原交易；其中 `transaction.transaction` 经 `Util.printTransactionToJSON` 重写为完整未签名交易 JSON（含 `txID`、`raw_data.contract`、`raw_data_hex`） |

响应示例：

```json
{
  "approved_list": ["TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv"],
  "result": { "code": "SUCCESS" },
  "transaction": {
    "txid": "d5ec749ecc2a615399d8a6c864ea4c74ff9f8453eaa44d6b1e2f0b7b3e2f3b6a",
    "transaction": { "...": "..." }
  }
}
```
