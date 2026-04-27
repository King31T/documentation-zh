# /wallet/getassetissuelistbyname

按通证名查询所有同名 TRC10。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetAssetIssueListByNameServlet.java`
- Method：`GET` / `POST`
- Response：`api.AssetIssueList`
- 支持固化接口：`/walletsolidity/getassetissuelistbyname`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `value` | string | 是 | 通证名（hex 编码 UTF-8） |
| `visible` | bool | 否 | 地址、文本字段格式 |

示例：

```json
{
  "value": "44494345"
}
```

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `assetIssue` | repeated AssetIssueContract | 所有同名通证 |

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

无匹配返回 `{}`。
