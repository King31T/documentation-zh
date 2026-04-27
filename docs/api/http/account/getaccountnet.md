# /wallet/getaccountnet

查询账户的带宽（Net）资源使用情况。**已弃用**，推荐使用 `/wallet/getaccountresource`。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetAccountNetServlet.java`
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

返回 `api.AccountNetMessage`（`protocol/src/main/protos/api/api.proto:1187`）：

| 字段 | 类型 | 说明 |
|---|---|---|
| `freeNetUsed` | int64 | 已使用的免费带宽 |
| `freeNetLimit` | int64 | 免费带宽上限（每 24h 重置） |
| `NetUsed` | int64 | 已使用的质押带宽 |
| `NetLimit` | int64 | 质押获得的带宽上限 |
| `assetNetUsed` | map\<string,int64\> | 持有 TRC10 各自使用的带宽 |
| `assetNetLimit` | map\<string,int64\> | 持有 TRC10 各自的带宽上限 |
| `TotalNetLimit` | int64 | 全网总带宽上限 |
| `TotalNetWeight` | int64 | 全网带宽质押总量（TRX） |

响应示例：

```json
{
  "freeNetUsed": 100,
  "freeNetLimit": 1500,
  "TotalNetLimit": 43200000000,
  "TotalNetWeight": 84629272838
}
```

账户不存在返回 `{}`。
