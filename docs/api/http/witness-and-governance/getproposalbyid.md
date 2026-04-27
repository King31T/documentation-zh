# /wallet/getproposalbyid

按 ID 查询提案。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetProposalByIdServlet.java`
- Method：`GET` / `POST`
- Response：`protocol.Proposal`（`Tron.proto`）

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `id` | int64 | 是 | 提案 ID |
| `visible` | bool | 否 | 地址格式 |

示例：

```json
{
  "id": 1
}
```

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `proposal_id` | int64 | 提案 ID |
| `proposer_address` | string | 提案人地址 |
| `parameters` | map<int64, int64> | 参数项 |
| `expiration_time` | int64 | 过期时间（毫秒时间戳） |
| `create_time` | int64 | 创建时间（毫秒时间戳） |
| `approvals` | repeated string | 已赞成的 SR 地址 |
| `state` | enum | `PENDING` / `DISAPPROVED` / `APPROVED` / `CANCELED` |

响应示例：

```json
{
  "proposal_id": 1,
  "proposer_address": "TKSXDA8HfE9E1y39RczVQ1ZascUEtaSToF",
  "parameters": { "0": 86400000 },
  "expiration_time": 1700000000000,
  "create_time": 1600000000000,
  "approvals": ["TKSXDA8HfE9E1y39RczVQ1ZascUEtaSToF"],
  "state": "APPROVED"
}
```

不存在返回 `{}`。
