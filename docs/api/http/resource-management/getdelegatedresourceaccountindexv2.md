# getdelegatedresourceaccountindexv2

TRON API 方法，使用 Stake 2.0 机制检索账户的委托索引，显示参与资源委托关系的所有账户。

## HTTP 请求

`POST /wallet/getdelegatedresourceaccountindexv2`

## 支持的路径

- `/wallet/getdelegatedresourceaccountindexv2`
- `/walletsolidity/getdelegatedresourceaccountindexv2`

## 参数

- value — 要查询委托关系的账户地址
- visible — 可选布尔参数。设置为 true 时，地址为 base58 格式。默认为 false。

## 返回值

- account — 被查询的账户地址
- fromAccounts — 已向此账户委托资源的账户数组
- toAccounts — 已从此账户接收委托资源的账户数组

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/getdelegatedresourceaccountindexv2 \
  --header 'Content-Type: application/json' \
  --data '
{
  "value": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
  "visible": true
}
'
```

### 返回

```json
{
  "account": "<string>",
  "fromAccounts": [
    "<string>"
  ],
  "toAccounts": [
    "<string>"
  ]
}
```

## 使用场景

- 发现特定账户的所有 Stake 2.0 委托关系
- 构建更新的资源委托网络图
- 分析现代委托模式和资源流向
- 监控参与 Stake 2.0 资源共享的账户
- 为新质押系统创建全面的资源管理界面
