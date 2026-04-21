# getBrokerageInfo

**支持的 API**：`wallet` `walletsolidity`

TRON API 方法，返回见证人的佣金比例（0–100）。见证人设置此比率以确定在与投票者分享剩余奖励前自己保留多少区块奖励。

```protobuf
rpc GetBrokerageInfo (BytesMessage) returns (NumberMessage) {}
```
