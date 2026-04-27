# /wallet/getbandwidthprices

获取历史带宽单价。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetBandwidthPricesServlet.java`
- Method：`GET` / `POST`
- Response：`api.PricesResponseMessage`
- 支持固化接口：`/walletsolidity/getbandwidthprices`

## 请求参数

无。

示例：

```bash
curl http://127.0.0.1:8090/wallet/getbandwidthprices
```

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `prices` | string | 由 `;` 分隔的多条 `<生效时间戳>:<单价 sun>` 记录 |

响应示例：

```json
{
  "prices": "0:10;1542607200000:40;1606205400000:140;1665801600000:210;1697428800000:1000"
}
```
