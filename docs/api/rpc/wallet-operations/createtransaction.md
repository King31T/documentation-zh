# createTransaction

**支持的 API**：`wallet`

TRON API 方法，创建未签名的 TRX 转账交易。该方法生成一个将 TRX 从一个地址转账到另一个地址的交易对象，然后可以对其进行签名并广播到网络。

```protobuf
rpc CreateTransaction (TransferContract) returns (Transaction) {}
```
