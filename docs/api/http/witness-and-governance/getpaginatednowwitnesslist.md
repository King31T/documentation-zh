# /wallet/getpaginatednowwitnesslist

按分页获取当前生效的 SR 列表。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetPaginatedNowWitnessListServlet.java`
- Method：`GET` / `POST`
- Response：`api.WitnessList`
- 支持固化接口：`/walletsolidity/getpaginatednowwitnesslist`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `offset` | int64 | 是 | 起始偏移 |
| `limit` | int64 | 是 | 返回条数 |
| `visible` | bool | 否 | 地址格式 |

示例：

```json
{
  "offset": 0,
  "limit": 20
}
```

## 响应

字段同 [`/wallet/listwitnesses`](listwitnesses.md)。

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
      "isJobs": true
    }
  ]
}
```
