# updateBrokerage

**支持的 API**：`wallet`

TRON API 方法，创建更新见证人奖励佣金比率的交易。只有见证人才能调用此方法，以调整其与投票者分享区块生产奖励的方式。

```protobuf
rpc UpdateBrokerage (UpdateBrokerageContract) returns (TransactionExtention) {}
```
