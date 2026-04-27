# /wallet/freezebalancev2

冻结 TRX 获取带宽 / 能量 / TronPower（Stake 2.0）。无固定冻结期。

- 源码：`framework/src/main/java/org/tron/core/services/http/FreezeBalanceV2Servlet.java`
- Method：`POST`
- Contract：`protocol.FreezeBalanceV2Contract`（`balance_contract.proto`）

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `owner_address` | string | 是 | 冻结账户地址 |
| `frozen_balance` | int64 | 是 | 冻结金额（sun） |
| `resource` | enum | 否 | `BANDWIDTH` / `ENERGY` / `TRON_POWER`，默认 `BANDWIDTH` |
| `permission_id` | int32 | 否 | 多签权限 ID |
| `visible` | bool | 否 | 地址格式 |

示例：

```json
{
  "owner_address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
  "frozen_balance": 1000000000,
  "resource": "ENERGY",
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
              "resource": "ENERGY"
          },
          "type_url": "type.googleapis.com/protocol.FreezeBalanceV2Contract"
        },
        "type": "FreezeBalanceV2Contract"
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
