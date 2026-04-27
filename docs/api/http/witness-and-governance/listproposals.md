# /wallet/listproposals

获取所有提案列表。

- 源码：`framework/src/main/java/org/tron/core/services/http/ListProposalsServlet.java`
- Method：`GET` / `POST`
- Response：`api.ProposalList`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `visible` | bool | 否 | 地址格式 |

示例：

```bash
curl http://127.0.0.1:8090/wallet/listproposals
```

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `proposals` | repeated Proposal | 提案列表（结构同 [`/wallet/getproposalbyid`](getproposalbyid.md)） |

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
