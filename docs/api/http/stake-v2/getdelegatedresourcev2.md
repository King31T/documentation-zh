# /wallet/getdelegatedresourcev2

查询 from→to 之间的资源代理记录（Stake 2.0）。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetDelegatedResourceV2Servlet.java`
- Method：`GET` / `POST`
- Response：`api.DelegatedResourceList`
- 支持固化接口：`/walletsolidity/getdelegatedresourcev2`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `fromAddress` | string | 是 | 出借方地址 |
| `toAddress` | string | 是 | 接收方地址 |
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

字段同 [`/wallet/getdelegatedresource`](../stake-v1/getdelegatedresource.md)，但仅包含 Stake 2.0 的代理记录。

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
