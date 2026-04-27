# /wallet/getdelegatedresourceaccountindex

> **已弃用**：Stake 1.0 索引。新业务请使用 [`/wallet/getdelegatedresourceaccountindexv2`](../stake-v2/getdelegatedresourceaccountindexv2.md)。

查询账户作为出借方/接收方的代理对手地址列表（Stake 1.0）。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetDelegatedResourceAccountIndexServlet.java`
- Method：`GET` / `POST`
- Response：`protocol.DelegatedResourceAccountIndex`
- 支持固化接口：`/walletsolidity/getdelegatedresourceaccountindex`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `value` | string | 是 | 查询账户地址 |
| `visible` | bool | 否 | 地址格式 |

示例：

```json
{
  "value": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
  "visible": true
}
```

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `account` | string | 查询账户 |
| `fromAccounts` | repeated string | 向我代理资源的账户 |
| `toAccounts` | repeated string | 我向其代理资源的账户 |

响应示例：

```json
{
  "account": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
  "fromAccounts": [],
  "toAccounts": ["TPL66VK2gCXNCD7EJg9pgJRfqcRbnn4zcp"]
}
```
