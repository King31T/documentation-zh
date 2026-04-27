# /wallet/getburntrx

查询累计销毁的 TRX 数量（包括手续费、合约销毁等）。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetBurnTrxServlet.java`
- Method：`GET` / `POST`
- 支持固化接口：`/walletsolidity/getburntrx`

## 请求参数

无。

示例：

```bash
curl http://127.0.0.1:8090/wallet/getburntrx
```

## 响应

`burnTrxAmount` 单位为 sun。

响应示例：

```json
{ "burnTrxAmount": 12345678 }
```
