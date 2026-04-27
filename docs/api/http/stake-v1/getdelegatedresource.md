# /wallet/getdelegatedresource

> **已弃用**：Stake 1.0 查询。新业务请使用 [`/wallet/getdelegatedresourcev2`](../stake-v2/getdelegatedresourcev2.md)。

查询 from→to 之间所有的资源代理记录（Stake 1.0）。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetDelegatedResourceServlet.java`
- Method：`GET` / `POST`
- Response：`api.DelegatedResourceList`
- 支持固化接口：`/walletsolidity/getdelegatedresource`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `fromAddress` | string | 是 | 资源出借方地址 |
| `toAddress` | string | 是 | 资源接收方地址 |
| `visible` | bool | 否 | 地址格式 |

示例：

```json
{
  "fromAddress": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
  "toAddress": "TPL66VK2gCXNCD7EJg9pgJRfqcRbnn4zcp",
  "visible": true
}
```

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `delegatedResource` | repeated DelegatedResource | 代理记录列表 |

`DelegatedResource` 字段：

| 字段 | 类型 | 说明 |
|---|---|---|
| `from` | string | 出借方 |
| `to` | string | 接收方 |
| `frozen_balance_for_bandwidth` | int64 | 代理给对方的带宽冻结量 |
| `frozen_balance_for_energy` | int64 | 代理给对方的能量冻结量 |
| `expire_time_for_bandwidth` | int64 | 带宽代理到期时间 |
| `expire_time_for_energy` | int64 | 能量代理到期时间 |

响应示例：

```json
{
  "delegatedResource": [
    {
      "from": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
      "to": "TPL66VK2gCXNCD7EJg9pgJRfqcRbnn4zcp",
      "frozen_balance_for_energy": 1000000000,
      "expire_time_for_energy": 1700000000000
    }
  ]
}
```
