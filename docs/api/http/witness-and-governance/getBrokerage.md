# getBrokerage

TRON API 方法，返回见证人的佣金比例（0–100）。见证人设置此比率以确定在与投票者分享剩余奖励前自己保留多少区块奖励。

## HTTP 请求

`GET /wallet/getBrokerage`

## 支持的路径

- `/wallet/getBrokerage`
- `/walletsolidity/getBrokerage`

## 参数

- address — 十六进制格式的见证人地址（21 字节，以 41 开头）

## 返回值

- brokerage — 见证人保留的百分比（0–100）

## 示例

### 请求

```shell
curl --request GET \
  --url 'https://api.shasta.trongrid.io/wallet/getBrokerage?address=41928c9af0651632157ef27a2cf17ca72c575a4d21'
```

### 返回

```json
{
  "brokerage": 20
}
```

## 使用场景

- 在投票前查看见证人当前的奖励分享比率。
- 比较不同见证人的佣金比率，以最大化投票收益。
- 监控见证人佣金政策随时间的变化。
- 构建见证人比较工具和投票推荐系统。
