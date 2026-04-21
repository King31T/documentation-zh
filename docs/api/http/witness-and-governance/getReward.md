# getReward

TRON API 方法，检索特定账户的见证人奖励信息。包括未领取的投票奖励和见证人区块生产奖励。

## HTTP 请求

`GET /wallet/getReward`

## 支持的路径

- `/wallet/getReward`
- `/walletsolidity/getReward`

## 参数

- address — 十六进制格式的账户地址（21 字节，以 41 开头）

## 返回值

- reward — 可提取的 TRX 奖励总金额（单位：sun，1 TRX = 1,000,000 sun）

## 示例

### 请求

```shell
curl --request GET \
  --url 'https://api.shasta.trongrid.io/wallet/getReward?address=41b487cdb2d8dc7b2a8e5e7e7b4e3e8b8b8b8b8b'
```

### 返回

```json
{
  "reward": 1000000
}
```

## 使用场景

- 在领取前查看可用的投票奖励。
- 监控见证人投票活动的奖励累积情况。
- 为投票者账户构建奖励追踪仪表板。
- 计算投票特定见证人的潜在回报。
- 自动化奖励领取通知和流程。
