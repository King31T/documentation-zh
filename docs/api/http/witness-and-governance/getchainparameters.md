# /wallet/getchainparameters

获取所有链参数当前值。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetChainParametersServlet.java`
- Method：`GET` / `POST`
- Response：`protocol.ChainParameters`

## 请求参数

无（仅 `visible`）。

示例：

```bash
curl http://127.0.0.1:8090/wallet/getchainparameters
```

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `chainParameter` | repeated {key, value} | 链参数键值列表 |

参数 key 对应提案中可设置的参数编号（如 `getMaintenanceTimeInterval`、`getEnergyFee` 等）。

响应示例：

```json
{
  "chainParameter": [
    { "key": "getMaintenanceTimeInterval", "value": 21600000 },
    { "key": "getEnergyFee", "value": 280 },
    { "key": "getTransactionFee", "value": 1000 },
    { "key": "getCreateAccountFee", "value": 100000 }
  ]
}
```
