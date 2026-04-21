# getTransactionFromPending

**支持的 API**：`wallet`

TRON API 方法，通过交易 ID 从内存池中检索特定的待处理交易。允许应用程序检查未确认交易的状态和详情。

```protobuf
rpc GetTransactionFromPending (BytesMessage) returns (Transaction) {}
```
