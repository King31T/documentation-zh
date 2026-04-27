# /wallet/getassetissuelist

查询全网所有 TRC10 通证。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetAssetIssueListServlet.java`
- Method：`GET` / `POST`
- Response：`api.AssetIssueList`
- 支持固化接口：`/walletsolidity/getassetissuelist`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `visible` | bool | 否 | 地址、文本字段格式 |

示例：

```bash
curl http://127.0.0.1:8090/wallet/getassetissuelist
```

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `assetIssue` | repeated AssetIssueContract | 全部 TRC10 通证（结构同 [`/wallet/createassetissue`](createassetissue.md) 请求体） |

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
      "id": "1000001"
    }
  ]
}
```

无返回 `{}`。
