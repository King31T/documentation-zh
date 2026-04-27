# /wallet/votewitnessaccount

为超级代表（SR）投票。一次性覆盖账户当前所有投票。

- 源码：`framework/src/main/java/org/tron/core/services/http/VoteWitnessAccountServlet.java`
- Method：`POST`
- Contract：`protocol.VoteWitnessContract`（`witness_contract.proto`）

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `owner_address` | string | 是 | 投票账户地址 |
| `votes` | array<Vote> | 是 | 投票列表 |
| `votes[].vote_address` | string | 是 | SR 候选人地址 |
| `votes[].vote_count` | int64 | 是 | 票数（消耗 TRON Power） |
| `permission_id` | int32 | 否 | 多签权限 ID |
| `visible` | bool | 否 | 地址格式 |

示例：

```json
{
  "owner_address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
  "votes": [
    {
      "vote_address": "TKSXDA8HfE9E1y39RczVQ1ZascUEtaSToF",
      "vote_count": 100
    }
  ],
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
              "votes": [
                  {
                      "vote_address": "TKSXDA8HfE9E1y39RczVQ1ZascUEtaSToF",
                      "vote_count": 100
                  }
              ]
          },
          "type_url": "type.googleapis.com/protocol.VoteWitnessContract"
        },
        "type": "VoteWitnessContract"
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
