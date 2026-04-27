# /wallet/getaccountresource

查询账户的带宽（Net）+ 能量（Energy）+ TronPower 资源使用情况。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetAccountResourceServlet.java`
- Method：`GET` / `POST`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `address` | string | 是 | 账户地址 |
| `visible` | bool | 否 | 地址格式 |

示例：

```json
{
  "address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
  "visible": true
}
```

## 响应

返回 `api.AccountResourceMessage`（`api.proto:1197`）：

| 字段 | 类型 | 说明 |
|---|---|---|
| `freeNetUsed` / `freeNetLimit` | int64 | 免费带宽（每 24h 重置） |
| `NetUsed` / `NetLimit` | int64 | 质押带宽 |
| `assetNetUsed` / `assetNetLimit` | map | TRC10 各自带宽 |
| `TotalNetLimit` / `TotalNetWeight` | int64 | 全网带宽配额、全网质押 |
| `EnergyUsed` / `EnergyLimit` | int64 | 能量 |
| `TotalEnergyLimit` / `TotalEnergyWeight` | int64 | 全网能量配额、全网质押 |
| `tronPowerUsed` / `tronPowerLimit` | int64 | 投票权 |
| `TotalTronPowerWeight` | int64 | 全网投票权总量 |
| `storageUsed` / `storageLimit` | int64 | 存储（已不使用） |

响应示例：

```json
{
  "freeNetLimit": 1500,
  "TotalNetLimit": 43200000000,
  "TotalNetWeight": 84629272838,
  "EnergyLimit": 1500,
  "TotalEnergyLimit": 90000000000,
  "TotalEnergyWeight": 12345678,
  "tronPowerLimit": 1000
}
```

账户不存在返回 `{}`。
