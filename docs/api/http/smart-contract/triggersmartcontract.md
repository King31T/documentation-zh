# /wallet/triggersmartcontract

触发智能合约（写交易）。返回未签名交易和预执行结果。

- 源码：`framework/src/main/java/org/tron/core/services/http/TriggerSmartContractServlet.java`
- Method：`POST`
- Contract：`protocol.TriggerSmartContract`
- Response：`api.TransactionExtention`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `owner_address` | string | 是 | 调用方地址 |
| `contract_address` | string | 是 | 目标合约地址 |
| `function_selector` | string | 否 | 函数签名（如 `transfer(address,uint256)`），与 `parameter` 配套 |
| `parameter` | string | 否 | ABI 编码的参数（hex，无函数选择子） |
| `data` | string | 否 | 直接给定调用 data（hex），与 `function_selector` 二选一 |
| `call_value` | int64 | 否 | 调用带入的 TRX（sun） |
| `token_id` | int64 | 否 | 调用带入 TRC10 token id |
| `call_token_value` | int64 | 否 | 调用带入 TRC10 数量 |
| `fee_limit` | int64 | 是 | 交易费用上限（sun） |
| `permission_id` | int32 | 否 | 多签权限 ID |
| `visible` | bool | 否 | 地址、文本字段格式（响应含 `result.message`，受 `visible` 影响） |

示例：

```json
{
  "owner_address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
  "contract_address": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
  "function_selector": "transfer(address,uint256)",
  "parameter": "000000000000000000000041a614f803b6fd780986a42c78ec9c7f77e6ded13c0000000000000000000000000000000000000000000000000000000000000064",
  "fee_limit": 1000000000,
  "call_value": 0,
  "visible": true
}
```

## 响应

`TransactionExtention`：

| 字段 | 类型 | 说明 |
|---|---|---|
| `transaction` | Transaction | 未签名交易 |
| `txid` | string(hex) | 交易哈希 |
| `constant_result` | repeated bytes(hex) | 仅在被 ABI 识别为 `view` / `pure` 函数时填充（写交易通常无此字段） |
| `result` | Return | 结果状态 |
| `energy_used` | int64 | 仅在常量调用路径填充；普通写交易不返回 |
| `energy_penalty` | int64 | 能量惩罚（如有） |

> 仅做预演（不上链）请用 [`/wallet/triggerconstantcontract`](triggerconstantcontract.md)；仅估算能量请用 [`/wallet/estimateenergy`](estimateenergy.md)。

### 异常响应

不会写出 `{"Error": ...}`。所有异常被 catch 后写入 `result.code`、`result.message`，HTTP 体仍是 `TransactionExtention`：

| 触发条件 | `result.result` | `result.code` | `result.message` |
|---|---|---|---|
| `owner_address` / `contract_address` 为空（`InvalidParameterException`） | false | `OTHER_ERROR` | `class java.security.InvalidParameterException : owner_address isn't set.` 等 |
| 合约校验失败 / fee_limit 超限 / 调用账户不存在等（`ContractValidateException`） | false | `CONTRACT_VALIDATE_ERROR` | 校验器原始描述 |
| 其他（hex 解析、proto merge 等） | false | `OTHER_ERROR` | `<exceptionClass> : <message>`（`"` → `'`） |

成功时 `result.result=true`、`result.code=SUCCESS`，`transaction` 字段填充。

响应示例：

```json
{
  "result": { "result": true },
  "transaction": {
    "visible": true,
    "txID": "d5ec749ecc2a615399d8a6c864ea4c74ff9f8453eaa44d6b1e2f0b7b3e2f3b6a",
    "raw_data": {
      "contract": [
        {
          "parameter": {
            "value": {
              "data": "a9059cbb...",
              "owner_address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
              "contract_address": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"
            },
            "type_url": "type.googleapis.com/protocol.TriggerSmartContract"
          },
          "type": "TriggerSmartContract"
        }
      ],
      "ref_block_bytes": "1c9a",
      "ref_block_hash": "8d3a8c0e2c6e8b04",
      "fee_limit": 1000000000,
      "expiration": 1700000060000,
      "timestamp": 1700000000000
    },
    "raw_data_hex": "0a02..."
  },
  "txid": "d5ec749ecc2a615399d8a6c864ea4c74ff9f8453eaa44d6b1e2f0b7b3e2f3b6a",
  "constant_result": ["0000000000000000000000000000000000000000000000000000000000000001"],
  "energy_used": 14225
}
```
