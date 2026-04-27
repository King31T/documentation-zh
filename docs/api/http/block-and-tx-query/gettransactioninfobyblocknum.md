# /wallet/gettransactioninfobyblocknum

按区块号返回该区块所有交易的 `TransactionInfo`（执行结果）数组。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetTransactionInfoByBlockNumServlet.java`
- Method：`GET` / `POST`
- Request：`api.NumberMessage`
- Response：`api.TransactionInfoList`
- 支持固化接口：`/walletsolidity/gettransactioninfobyblocknum`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `num` | int64 | 是 | 区块号 |
| `visible` | bool | 否 | 地址、文本字段格式；`visible=true` 时 servlet 额外把 `log[].address`（EVM 20 字节）补 `0x41` 前缀后转 base58 |

示例：

```json
{
  "num": 1000000
}
```

## 响应

返回 JSON 数组（与原 `TransactionInfoList.transactionInfo` 等价），每个元素结构同 [`/wallet/gettransactioninfobyid`](gettransactioninfobyid.md)。

响应示例：

```json
[
  {
    "id": "d5ec749ecc2a615399d8a6c864ea4c74ff9f8453eaa44d6b1e2f0b7b3e2f3b6a",
    "fee": 345000,
    "blockNumber": 1000000,
    "blockTimeStamp": 1700000000000,
    "contractResult": [""],
    "receipt": {
      "net_fee": 345000,
      "net_usage": 268
    },
    "log": []
  }
]
```

空区块（无交易）返回 `[]`；`num <= 0` 时返回 `{}`。
