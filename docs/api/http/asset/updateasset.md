# /wallet/updateasset

修改 TRC10 通证的描述、URL 及带宽限额（仅发行方）。

- 源码：`framework/src/main/java/org/tron/core/services/http/UpdateAssetServlet.java`
- Method：`POST`
- Contract：`protocol.UpdateAssetContract`（`asset_issue_contract.proto:47`）

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `owner_address` | string | 是 | 发行方地址 |
| `description` | string | 否 | 新描述（hex UTF-8） |
| `url` | string | 否 | 新 URL（hex UTF-8） |
| `new_limit` | int64 | 否 | 单账户免费带宽限额 |
| `new_public_limit` | int64 | 否 | 通证公共免费带宽限额 |
| `permission_id` | int32 | 否 | 多签权限 ID |
| `visible` | bool | 否 | 地址、文本字段格式 |

示例：

```json
{
  "owner_address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
  "description": "44494345",
  "url": "68747470733a2f2f747261782e696f",
  "new_limit": 5000,
  "new_public_limit": 10000,
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
              "description": "44494345",
              "url": "68747470733a2f2f747261782e696f",
              "new_limit": 5000,
              "new_public_limit": 10000
          },
          "type_url": "type.googleapis.com/protocol.UpdateAssetContract"
        },
        "type": "UpdateAssetContract"
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
