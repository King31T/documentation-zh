# /wallet/getdelegatedresourceaccountindexv2

查询账户作为出借方/接收方的代理对手地址列表（Stake 2.0）。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetDelegatedResourceAccountIndexV2Servlet.java`
- Method：`GET` / `POST`
- Response：`protocol.DelegatedResourceAccountIndex`
- 支持固化接口：`/walletsolidity/getdelegatedresourceaccountindexv2`

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

字段同 [`/wallet/getdelegatedresourceaccountindex`](../stake-v1/getdelegatedresourceaccountindex.md)（Stake 2.0 数据）。

响应示例：

```json
{
  "account": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
  "fromAccounts": [],
  "toAccounts": ["TPL66VK2gCXNCD7EJg9pgJRfqcRbnn4zcp"]
}
```
