# /wallet/freezebalance

> **链上已禁用**：提案 #70 `UNFREEZE_DELAY_DAYS` 通过后（主网已生效），`FreezeBalanceActuator.validate()` 会直接抛出 `freeze v2 is open, old freeze is closed`，新请求一律失败。请改用 [`/wallet/freezebalancev2`](../stake-v2/freezebalancev2.md)。

冻结 TRX 获取带宽或能量，可代理给他人。冻结期最少 3 天。

- 源码：`framework/src/main/java/org/tron/core/services/http/FreezeBalanceServlet.java`
- Method：`POST`
- Contract：`protocol.FreezeBalanceContract`（`balance_contract.proto`）

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `owner_address` | string | 是 | 冻结账户地址 |
| `frozen_balance` | int64 | 是 | 冻结金额（sun） |
| `frozen_duration` | int64 | 是 | 冻结天数（必须 ≥ 3） |
| `resource` | enum | 否 | `BANDWIDTH` / `ENERGY`，默认 `BANDWIDTH` |
| `receiver_address` | string | 否 | 资源代理目标地址（不填为自己） |
| `permission_id` | int32 | 否 | 多签权限 ID |
| `visible` | bool | 否 | 地址格式 |

示例：

```json
{
  "owner_address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
  "frozen_balance": 1000000000,
  "frozen_duration": 3,
  "resource": "BANDWIDTH",
  "visible": true
}
```

## 响应

返回未签名 `protocol.Transaction`。

响应示例：

```json
{
  "visible": true,
  "txID": "d5ec749ecc2a615399d8a6c864ea4c74ff9f8453eaa44d6b1e2f0b7b3e2f3b6a",
  "raw_data": {
    "contract": [
      {
        "parameter": {
          "value": {
              "owner_address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
              "frozen_balance": 1000000000,
              "frozen_duration": 3,
              "resource": "BANDWIDTH"
          },
          "type_url": "type.googleapis.com/protocol.FreezeBalanceContract"
        },
        "type": "FreezeBalanceContract"
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
