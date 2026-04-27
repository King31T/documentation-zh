# /wallet/updatesetting

修改合约 `consume_user_resource_percent`（仅部署者）。

- 源码：`framework/src/main/java/org/tron/core/services/http/UpdateSettingServlet.java`
- Method：`POST`
- Contract：`protocol.UpdateSettingContract`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `owner_address` | string | 是 | 部署者地址 |
| `contract_address` | string | 是 | 合约地址 |
| `consume_user_resource_percent` | int64 | 是 | 用户承担能量百分比 0–100 |
| `permission_id` | int32 | 否 | 多签权限 ID |
| `visible` | bool | 否 | 地址格式 |

示例：

```json
{
  "owner_address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
  "contract_address": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
  "consume_user_resource_percent": 100,
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
              "contract_address": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
              "consume_user_resource_percent": 100
          },
          "type_url": "type.googleapis.com/protocol.UpdateSettingContract"
        },
        "type": "UpdateSettingContract"
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
