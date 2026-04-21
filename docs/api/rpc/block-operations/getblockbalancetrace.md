# getBlockBalanceTrace

**支持的 API**：`wallet`

TRON API 方法，返回特定区块内的余额变动情况。按交易显示该区块中账户余额的变化。

```protobuf
rpc GetBlockBalanceTrace (BlockIdentifier) returns (BlockBalanceTrace) {}
```
