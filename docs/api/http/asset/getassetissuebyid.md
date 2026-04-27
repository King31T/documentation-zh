# /wallet/getassetissuebyid

按 token id 查询 TRC10（推荐方式，token id 全局唯一）。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetAssetIssueByIdServlet.java`
- Method：`GET` / `POST`
- 支持固化接口：`/walletsolidity/getassetissuebyid`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `value` | string | 是 | token id（数字字符串，例如 `"1000001"`） |
| `visible` | bool | 否 | 地址、文本字段格式 |

示例：

```json
{
  "value": "1000001"
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

不存在返回 `{}`。
