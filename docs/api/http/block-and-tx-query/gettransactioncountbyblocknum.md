# /wallet/gettransactioncountbyblocknum

返回某区块号包含的交易数。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetTransactionCountByBlockNumServlet.java`
- Method：`GET` / `POST`
- Request：`api.NumberMessage`
- 支持固化接口：`/walletsolidity/gettransactioncountbyblocknum`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `num` | int64 | 是 | 区块号 |

示例：

```json
{ "num": 44225267 }
```

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `count` | int64 | 该区块的交易数；区块不存在返回 0 |

响应示例：

```json
{ "count": 42 }
```
