# /wallet/proposalcreate

创建链参数提案（仅 SR）。

- 源码：`framework/src/main/java/org/tron/core/services/http/ProposalCreateServlet.java`
- Method：`POST`
- Contract：`protocol.ProposalCreateContract`（`proposal_contract.proto`）

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `owner_address` | string | 是 | SR 地址 |
| `parameters` | map<int64, int64> | 是 | 提案参数：{参数编号: 取值} |
| `permission_id` | int32 | 否 | 多签权限 ID |
| `visible` | bool | 否 | 地址格式 |

参数编号见 [`/wallet/getchainparameters`](getchainparameters.md) 返回的 key。

示例：

```json
{
  "owner_address": "TKSXDA8HfE9E1y39RczVQ1ZascUEtaSToF",
  "parameters": {"0": 86400000},
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
              "owner_address": "TKSXDA8HfE9E1y39RczVQ1ZascUEtaSToF",
              "parameters": [
                  {
                      "key": 0,
                      "value": 86400000
                  }
              ]
          },
          "type_url": "type.googleapis.com/protocol.ProposalCreateContract"
        },
        "type": "ProposalCreateContract"
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
