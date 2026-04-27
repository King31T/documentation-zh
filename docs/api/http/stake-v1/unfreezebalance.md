# /wallet/unfreezebalance

> **存量保留**：与 `freezebalance` 不同，本接口在 Stake 2.0 启用后**仍可正常调用**——`UnfreezeBalanceActuator` 没有 `supportUnfreezeDelay` 网关，存量 V1 仓位需要通过它解冻。新业务请使用 [`/wallet/unfreezebalancev2`](../stake-v2/unfreezebalancev2.md)。

解冻已到期的 Stake 1.0 资产。

- 源码：`framework/src/main/java/org/tron/core/services/http/UnFreezeBalanceServlet.java`
- Method：`POST`
- Contract：`protocol.UnfreezeBalanceContract`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `owner_address` | string | 是 | 解冻账户地址 |
| `resource` | enum | 否 | `BANDWIDTH` / `ENERGY`，默认 `BANDWIDTH` |
| `receiver_address` | string | 否 | 代理时填代理目标地址 |
| `permission_id` | int32 | 否 | 多签权限 ID |
| `visible` | bool | 否 | 地址格式 |

示例：

```json
{
  "owner_address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
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
              "resource": "BANDWIDTH"
          },
          "type_url": "type.googleapis.com/protocol.UnfreezeBalanceContract"
        },
        "type": "UnfreezeBalanceContract"
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
