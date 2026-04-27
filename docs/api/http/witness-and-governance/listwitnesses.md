# /wallet/listwitnesses

获取所有 SR 候选人列表。

- 源码：`framework/src/main/java/org/tron/core/services/http/ListWitnessesServlet.java`
- Method：`GET` / `POST`
- Response：`api.WitnessList`
- 支持固化接口：`/walletsolidity/listwitnesses`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `visible` | bool | 否 | 地址格式（响应中 `url` 为 proto `string`，不受 `visible` 影响） |

示例：

```bash
curl http://127.0.0.1:8090/wallet/listwitnesses
```

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `witnesses` | repeated Witness | 候选人列表 |

`Witness`（`Tron.proto`）字段：

| 字段 | 类型 | 说明 |
|---|---|---|
| `address` | string | 候选人地址 |
| `voteCount` | int64 | 当前票数 |
| `pubKey` | string(hex) | 公钥 |
| `url` | string | 候选人 URL |
| `totalProduced` | int64 | 累计出块数 |
| `totalMissed` | int64 | 累计漏块数 |
| `latestBlockNum` | int64 | 最近出块高度 |
| `latestSlotNum` | int64 | 最近 slot |
| `isJobs` | bool | 是否当前 SR（前 27） |

响应示例：

```json
{
  "witnesses": [
    {
      "address": "TKSXDA8HfE9E1y39RczVQ1ZascUEtaSToF",
      "voteCount": 100000000,
      "url": "https://...",
      "totalProduced": 1000000,
      "totalMissed": 100,
      "latestBlockNum": 31600000,
      "latestSlotNum": 100,
      "isJobs": true
    }
  ]
}
```
