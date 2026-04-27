# /wallet/gettransactioninfobyid

按交易 ID 查询**执行结果**（包含 receipt、log、内部调用、资源消耗）。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetTransactionInfoByIdServlet.java`
- Method：`GET` / `POST`
- Request：`api.BytesMessage`
- Response：`protocol.TransactionInfo`（`Tron.proto:454`）
- 支持固化接口：`/walletsolidity/gettransactioninfobyid`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `value` | string | 是 | 交易 ID hex |
| `visible` | bool | 否 | 地址、文本字段格式；`visible=true` 时 servlet 额外把 `log[].address`（EVM 20 字节）补 `0x41` 前缀后转 base58 |

示例：

```json
{
  "value": "d5ec749ecc2a615399d8a6c864ea4c74ff9f8453eaa44d6b1e2f0b7b3e2f3b6a"
}
```

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `id` | bytes | 交易 ID |
| `fee` | int64 | 实际扣除的 TRX 手续费（sun） |
| `blockNumber` | int64 | 所在区块号 |
| `blockTimeStamp` | int64 | 区块时间，毫秒 |
| `contractResult` | repeated bytes | 合约调用返回值 |
| `contract_address` | bytes | 部署/调用的合约地址 |
| `receipt` | ResourceReceipt | 资源消耗（见下） |
| `log` | repeated Log | 事件日志（`{address, topics[], data}`） |
| `result` | enum | `SUCESS` / `FAILED` |
| `resMessage` | bytes | 失败原因 |
| `internal_transactions` | repeated InternalTransaction | 内部交易 |
| `withdraw_amount` | int64 | 提取见证人奖励金额（仅 WithdrawBalance） |
| `unfreeze_amount` | int64 | 解冻金额（仅 UnfreezeBalance V1） |
| `withdraw_expire_amount` | int64 | 解冻提现金额（V2） |
| `cancel_unfreezeV2_amount` | map\<string,int64\> | 取消解冻金额（V2） |
| `assetIssueID` | string | 创建的 TRC10 ID（仅 CreateAssetIssue） |
| `exchange_*` / `orderId` | — | Exchange / Market 相关字段 |

`ResourceReceipt`（`Tron.proto:318`）：

| 字段 | 类型 | 说明 |
|---|---|---|
| `energy_usage` | int64 | 调用方燃烧的能量（自身能量） |
| `energy_fee` | int64 | 因能量不足烧的 TRX |
| `origin_energy_usage` | int64 | 合约创建者承担的能量 |
| `energy_usage_total` | int64 | 总能量消耗 |
| `net_usage` | int64 | 带宽消耗 |
| `net_fee` | int64 | 因带宽不足烧的 TRX |
| `result` | enum | 合约执行结果（同 `Transaction.Result.contractResult`） |
| `energy_penalty_total` | int64 | 能量惩罚 |

响应示例：

```json
{
  "id": "d5ec749ecc2a615399d8a6c864ea4c74ff9f8453eaa44d6b1e2f0b7b3e2f3b6a",
  "fee": 345000,
  "blockNumber": 31600000,
  "blockTimeStamp": 1700000000000,
  "contractResult": [""],
  "receipt": {
    "net_fee": 345000,
    "net_usage": 268
  },
  "log": []
}
```

未上链返回 `{}`。
