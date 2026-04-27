# /wallet/getBrokerage

查询 SR 当前周期的分红比例（佣金）。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetBrokerageServlet.java`
- Method：`GET` / `POST`
- 支持固化接口：`/walletsolidity/getBrokerage`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `address` | string | 是 | SR 地址 |
| `visible` | bool | 否 | 无效果（servlet 通过 `41` 前缀自动识别地址格式，响应无 bytes 字段） |

示例：

```json
{
  "address": "TKSXDA8HfE9E1y39RczVQ1ZascUEtaSToF",
  "visible": true
}
```

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `brokerage` | int | 百分比（0–100），默认 20 |

响应示例：

```json
{ "brokerage": 20 }
```

`address` 解析失败（非法 hex / base58）时返回错误体，**不是** `{"brokerage": 0}`：

```json
{ "Error": "INVALID address, <details>" }
```
