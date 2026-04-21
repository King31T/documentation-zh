# getTransactionById

**支持的 API**：`wallet` `walletsolidity`

TRON API 方法，通过交易 ID 检索交易详情。该方法返回特定交易的全面信息，包括执行结果、资源消耗和合约详情。

```protobuf
rpc GetTransactionById (BytesMessage) returns (Transaction) {}
```
