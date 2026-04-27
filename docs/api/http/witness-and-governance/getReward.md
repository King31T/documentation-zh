# /wallet/getReward

查询账户可领取的投票分红（未提取）。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetRewardServlet.java`
- Method：`GET` / `POST`
- 支持固化接口：`/walletsolidity/getReward`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `address` | string | 是 | 投票账户地址 |
| `visible` | bool | 否 | 无效果（servlet 通过 `41` 前缀自动识别地址格式，响应无 bytes 字段） |

示例：

```json
{
  "address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
  "visible": true
}
```

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `reward` | int64 | 单位 sun（1 TRX = 1e6 sun） |

响应示例：

```json
{ "reward": 12345 }
```

提取使用 [`/wallet/withdrawbalance`](withdrawbalance.md)。

`address` 解析失败（非法 hex / base58）时返回错误体，**不是** `{"reward": 0}`：

```json
{ "Error": "INVALID address, <details>" }
```
