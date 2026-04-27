# /wallet/gettransactionlistfrompending

返回待打包池（pending）中所有交易的 ID 列表。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetTransactionListFromPendingServlet.java`
- Method：`GET` / `POST`
- Response：`api.TransactionIdList`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `visible` | bool | 否 | 无效果（响应无 bytes 字段） |

示例：

```bash
curl http://127.0.0.1:8090/wallet/gettransactionlistfrompending
```

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `txId` | repeated string | 交易 ID hex 列表 |

响应示例：

```json
{ "txId": ["1a35...e9", "8b22...c4"] }
```
