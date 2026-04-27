# /wallet/getassetissuebyaccount

查询某账户作为发行方发行的所有 TRC10。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetAssetIssueByAccountServlet.java`
- Method：`GET` / `POST`
- Response：`api.AssetIssueList`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `address` | string | 是 | 账户地址 |
| `visible` | bool | 否 | 地址、文本字段格式 |

示例：

```json
{
  "address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
  "visible": true
}
```

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `assetIssue` | repeated AssetIssueContract | 该账户发行的 TRC10 列表（结构见 `asset_issue_contract.proto:9`，字段同 [`/wallet/createassetissue`](createassetissue.md) 请求体） |

响应示例：

```json
{
  "assetIssue": [
    {
      "owner_address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
      "name": "44494345",
      "abbr": "44494345",
      "total_supply": 1000000000,
      "trx_num": 1,
      "num": 1,
      "start_time": 1600000000000,
      "end_time": 1700000000000,
      "description": "44494345",
      "url": "68747470733a2f2f747261782e696f",
      "id": "1000001"
    }
  ]
}
```

未发行返回 `{}`。
