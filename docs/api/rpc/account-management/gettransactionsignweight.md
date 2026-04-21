# getTransactionSignWeight

**支持的 API**：`wallet`

TRON API 方法，检查交易的多签状态。返回已提供签名的总权重、所需阈值和授权地址列表，帮助验证交易是否获得足够的批准以进行广播。

```protobuf
rpc GetTransactionSignWeight (Transaction) returns (TransactionSignWeight) {}
```
