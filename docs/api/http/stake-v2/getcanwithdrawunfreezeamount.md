# /wallet/getcanwithdrawunfreezeamount

查询指定时间点账户可提取的解冻金额（Stake 2.0）。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetCanWithdrawUnfreezeAmountServlet.java`
- Method：`GET` / `POST`
- Response：`api.CanWithdrawUnfreezeAmountResponseMessage`
- 支持固化接口：`/walletsolidity/getcanwithdrawunfreezeamount`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `owner_address` | string | 是 | 账户地址 |
| `timestamp` | int64 | 是 | 截止时间戳（毫秒） |
| `visible` | bool | 否 | 地址格式 |

示例：

```json
{
  "owner_address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
  "timestamp": 1700000000000,
  "visible": true
}
```

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `amount` | int64 | 至该时间点可提取的解冻总额（sun） |

响应示例：

```json
{ "amount": 1500000000 }
```
