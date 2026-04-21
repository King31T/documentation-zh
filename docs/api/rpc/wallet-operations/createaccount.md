# createAccount

**支持的 API**：`wallet`

TRON API 方法，在 TRON 区块链上创建新账户。该方法生成一个未签名的交易，通过首次向新账户地址发送 TRX 来激活该账户。

```protobuf
rpc CreateAccount (AccountCreateContract) returns (Transaction) {}
```
