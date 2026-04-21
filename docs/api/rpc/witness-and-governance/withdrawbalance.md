# withdrawBalance

**支持的 API**：`wallet`

TRON API 方法，允许超级代表（见证人）提取其积累的区块生产奖励。见证人因生产区块和维护网络而获得 TRX 奖励，此方法使他们能够领取这些收益。

```protobuf
rpc WithdrawBalance (WithdrawBalanceContract) returns (Transaction) {}
```
