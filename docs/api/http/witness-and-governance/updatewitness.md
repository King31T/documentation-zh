# /wallet/updatewitness

修改 SR 候选人 URL（仅候选人本人）。

- 源码：`framework/src/main/java/org/tron/core/services/http/UpdateWitnessServlet.java`
- Method：`POST`
- Contract：`protocol.WitnessUpdateContract`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `owner_address` | string | 是 | 候选人地址 |
| `update_url` | string | 是 | 新 URL（hex UTF-8） |
| `permission_id` | int32 | 否 | 多签权限 ID |
| `visible` | bool | 否 | 地址、文本字段格式 |

示例：

```json
{
  "owner_address": "TKSXDA8HfE9E1y39RczVQ1ZascUEtaSToF",
  "update_url": "68747470733a2f2f747261782e696f",
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
              "update_url": "68747470733a2f2f747261782e696f"
          },
          "type_url": "type.googleapis.com/protocol.WitnessUpdateContract"
        },
        "type": "WitnessUpdateContract"
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
