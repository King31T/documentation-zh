# getTransactionInfoById

**支持的 API**：`wallet` `walletsolidity`

TRON API 方法，通过交易 ID 检索详细的交易回执和执行信息。该方法提供关于交易执行状态、资源使用、费用以及任何发生的智能合约事件的全面数据。

```protobuf
rpc GetTransactionInfoById (BytesMessage) returns (TransactionInfo) {}
```
