# delegateResource

**支持的 API**：`wallet`

TRON API 方法，将资源委托给另一个账户。该方法允许将通过质押 TRX 获得的带宽或能量资源委托给另一个地址，使该地址能够使用您的资源进行交易。

```protobuf
rpc DelegateResource (DelegateResourceContract) returns (TransactionExtention) {}
```
