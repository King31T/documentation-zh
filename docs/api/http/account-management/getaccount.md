# getaccount

TRON API 方法，用于检索指定地址的详细账户信息。该方法返回关于账户的全面数据，包括余额、资源和账户元数据。

## HTTP 请求

`POST /wallet/getaccount`

## 支持的路径

- `/wallet/getaccount`
- `/walletsolidity/getaccount`

## 参数

- address — 要查询的 TRON 账户地址，可以是 base58 或十六进制格式。
- visible — 可选布尔参数。设置为 true 时，地址应为 base58 格式。默认为 false。

## 返回值

- address — 十六进制格式的账户地址
- balance — TRX 余额（单位：sun，1 TRX = 1,000,000 sun）
- create_time — 账户创建时间戳
- latest_operation_time — 最后一次操作的时间戳
- free_net_usage — 已使用的免费带宽
- latest_consume_free_time — 最后一次使用免费带宽的时间
- account_resource — 资源信息，包括能量和带宽
- owner_permission — 所有者权限设置
- active_permission — 活跃权限设置
- frozenV2 — 资源委托的冻结余额详情
- asset — TRC10 代币余额
- assetV2 — 详细的 TRC10 代币信息

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/getaccount \
  --header 'Content-Type: application/json' \
  --data '
{
  "address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
  "visible": true
}
'
```

### 返回

```json
{
  "address": "<string>",
  "balance": 123,
  "create_time": 123,
  "latest_operation_time": 123,
  "free_net_usage": 123,
  "account_resource": {},
  "owner_permission": {},
  "active_permission": "<array>"
}
```

## 使用场景

- 获取账户余额和资源信息。
- 检查账户权限和多签设置。
- 监控冻结余额和资源委托。
- 在钱包和浏览器中显示账户信息。
- 在发送交易前验证账户是否存在。
