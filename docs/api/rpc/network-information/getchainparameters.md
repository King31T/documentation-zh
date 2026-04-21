# getChainParameters

**支持的 API**：`wallet`

TRON API 方法，检索当前的区块链参数和配置设置。该方法提供对重要网络常量、费用、限制和其他可配置参数的访问，这些参数控制 TRON 区块链的运行。

```protobuf
rpc GetChainParameters (EmptyMessage) returns (ChainParameters) {}
```
