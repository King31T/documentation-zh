# getdelegatedresourcev2

TRON API 方法，使用 Stake 2.0 机制检索 TRON 区块链上账户之间委托资源的信息。

## HTTP 请求

`POST /wallet/getdelegatedresourcev2`

## 支持的路径

- `/wallet/getdelegatedresourcev2`
- `/walletsolidity/getdelegatedresourcev2`

## 参数

- fromAddress — 将资源委托给另一账户的地址
- toAddress — 接收委托资源的地址
- visible — 可选布尔参数。设置为 true 时，地址为 base58 格式。默认为 false。

## 返回值

- delegatedResource — 委托资源信息数组，包含：
  - from — 委托方地址
  - to — 接收方地址
  - frozen_balance_for_bandwidth — 为带宽委托冻结的 TRX 数量
  - frozen_balance_for_energy — 为能量委托冻结的 TRX 数量
  - expire_time_for_bandwidth — 带宽委托的过期时间戳
  - expire_time_for_energy — 能量委托的过期时间戳

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/getdelegatedresourcev2 \
  --header 'Content-Type: application/json' \
  --data '
{
  "fromAddress": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
  "toAddress": "TFgY1uN8buRxAtV2r6Zy5sG3ACko6pJT1y",
  "visible": true
}
'
```

### 返回

```json
{
  "delegatedResource": [
    {
      "from": "<string>",
      "to": "<string>",
      "frozen_balance_for_bandwidth": 123,
      "frozen_balance_for_energy": 123,
      "expire_time_for_bandwidth": 123,
      "expire_time_for_energy": 123
    }
  ]
}
```

## 使用场景

- 检查特定账户之间的 Stake 2.0 委托资源
- 在新质押机制下监控资源委托关系
- 验证委托数量和过期时间
- 构建现代资源管理仪表板
- 分析更新的资源共享模式
