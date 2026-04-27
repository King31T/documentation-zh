# /wallet/getpaginatedproposallist

分页获取提案列表。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetPaginatedProposalListServlet.java`
- Method：`GET` / `POST`
- Response：`api.ProposalList`

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

字段同 [`/wallet/listproposals`](listproposals.md)。

响应示例：

```json
{
  "proposals": [
    {
      "proposal_id": 1,
      "proposer_address": "TKSXDA8HfE9E1y39RczVQ1ZascUEtaSToF",
      "parameters": { "0": 86400000 },
      "expiration_time": 1700000000000,
      "create_time": 1600000000000,
      "approvals": ["TKSXDA8HfE9E1y39RczVQ1ZascUEtaSToF"],
      "state": "APPROVED"
    }
  ]
}
```
