# /wallet/getassetissuebyname

按通证名查询单个 TRC10。**注意**：自 `ALLOW_SAME_TOKEN_NAME` 提案后，name 不再唯一，调用此接口在重名时会报错；推荐用 [`/wallet/getassetissuebyid`](getassetissuebyid.md) 或 [`/wallet/getassetissuelistbyname`](getassetissuelistbyname.md)。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetAssetIssueByNameServlet.java`
- Method：`GET` / `POST`
- 支持固化接口：`/walletsolidity/getassetissuebyname`

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

返回 `protocol.AssetIssueContract`，字段同 [`/wallet/createassetissue`](createassetissue.md) 请求体。

响应示例：

```json
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
```

不存在或重名返回 `{}` 或错误。
