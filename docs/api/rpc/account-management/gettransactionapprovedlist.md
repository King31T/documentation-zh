# getTransactionApprovedList

**支持的 API**：`wallet`

TRON API 方法，返回签署（批准）特定已签名交易的地址列表。提交完整的已签名交易对象，端点将从签名中推导出批准者地址。

```protobuf
rpc GetTransactionApprovedList (Transaction) returns (TransactionApprovedList) {}
```
