# /wallet/getavailableunfreezecount

查询账户剩余可发起解冻次数（Stake 2.0 一个账户最多有 32 个解冻进行中）。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetAvailableUnfreezeCountServlet.java`
- Method：`GET` / `POST`
- Response：`api.GetAvailableUnfreezeCountResponseMessage`
- 支持固化接口：`/walletsolidity/getavailableunfreezecount`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `owner_address` | string | 是 | 账户地址（也接受 `ownerAddress`） |
| `visible` | bool | 否 | 地址格式 |

示例：

```json
{
  "owner_address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
  "visible": true
}
```

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `count` | int64 | 剩余可解冻次数 |

响应示例：

```json
{ "count": 28 }
```
