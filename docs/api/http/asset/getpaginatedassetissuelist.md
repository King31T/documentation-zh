# /wallet/getpaginatedassetissuelist

按分页查询全网 TRC10 通证。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetPaginatedAssetIssueListServlet.java`
- Method：`GET` / `POST`
- Response：`api.AssetIssueList`
- 支持固化接口：`/walletsolidity/getpaginatedassetissuelist`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `offset` | int64 | 是 | 起始偏移 |
| `limit` | int64 | 是 | 返回条数 |
| `visible` | bool | 否 | 地址、文本字段格式 |

示例：

```json
{
  "offset": 0,
  "limit": 20
}
```

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `assetIssue` | repeated AssetIssueContract | 分页后的通证列表 |

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
      "id": "1000001"
    }
  ]
}
```

无返回 `{}`。
