# getavailableunfreezecount

TRON API 方法，用于在 Stake 2.0 机制下检索账户的可用解冻次数。显示还可以执行多少次解冻操作。

## HTTP 请求

`POST /wallet/getavailableunfreezecount`

## 支持的路径

- `/wallet/getavailableunfreezecount`
- `/walletsolidity/getavailableunfreezecount`

## 参数

- owner_address — 要查询可用解冻次数的账户地址
- visible — 可选布尔参数。设置为 true 时，地址为 base58 格式。默认为 false。

## 返回值

- count — 此账户剩余的可用解冻操作次数

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/getavailableunfreezecount \
  --header 'Content-Type: application/json' \
  --data '
{
  "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
  "visible": true
}
'
```

## 使用场景

- 检查账户还可以执行多少次解冻操作
- 规划资源管理策略
- 构建显示解冻限制的用户界面
- 实现防止超出解冻限制的保护机制
- 监控账户资源灵活性
