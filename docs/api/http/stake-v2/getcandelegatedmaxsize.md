# /wallet/getcandelegatedmaxsize

查询账户当前可代理的最大资源额度（Stake 2.0）。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetCanDelegatedMaxSizeServlet.java`
- Method：`GET` / `POST`
- Response：`api.CanDelegatedMaxSizeResponseMessage`
- 支持固化接口：`/walletsolidity/getcandelegatedmaxsize`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `owner_address` | string | 是 | 账户地址 |
| `type` | int32 | 否 | 资源类型：`0`=BANDWIDTH（默认），`1`=ENERGY |
| `visible` | bool | 否 | 地址格式 |

示例：

```json
{
  "owner_address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
  "type": 1,
  "visible": true
}
```

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `max_size` | int64 | 可代理的最大冻结量（sun） |

响应示例：

```json
{ "max_size": 5000000000 }
```
