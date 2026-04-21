# getcanwithdrawunfreezeamount

TRON API 方法，用于在 Stake 2.0 机制下检索解冻资源后可提取的数量。

## HTTP 请求

`POST /wallet/getcanwithdrawunfreezeamount`

## 支持的路径

- `/wallet/getcanwithdrawunfreezeamount`
- `/walletsolidity/getcanwithdrawunfreezeamount`

## 参数

- owner_address — 要查询可提取解冻数量的账户地址
- timestamp — 可选时间戳，用于检查特定时间的可提取数量
- visible — 可选布尔参数。设置为 true 时，地址为 base58 格式。默认为 false。

## 返回值

- amount — 可从已完成解冻操作中提取的 TRX 总量

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/getcanwithdrawunfreezeamount \
  --header 'Content-Type: application/json' \
  --data '
{
  "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
  "timestamp": 123,
  "visible": true
}
'
```

## 使用场景

- 检查解冻后可提取的 TRX 数量
- 规划账户的流动性管理
- 构建显示可提取余额的用户界面
- 实现自动提取触发器
- 监控已完成的解冻操作
