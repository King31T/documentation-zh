# getTransactionListFromPending

**支持的 API**：`wallet`

TRON API 方法，检索内存池中当前所有待处理交易的列表。允许应用程序监控等待被包含在区块中的未确认交易。

```protobuf
rpc GetTransactionListFromPending (EmptyMessage) returns (TransactionIdList) {}
```
