# /wallet/getnextmaintenancetime

获取下次 SR 维护期开始时间。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetNextMaintenanceTimeServlet.java`
- Method：`GET` / `POST`

## 请求参数

无（仅 `visible`）。

示例：

```bash
curl http://127.0.0.1:8090/wallet/getnextmaintenancetime
```

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `num` | int64 | 下次维护时间（毫秒时间戳） |

响应示例：

```json
{ "num": 1700000000000 }
```
