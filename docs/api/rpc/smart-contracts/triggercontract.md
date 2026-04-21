# triggerContract

**支持的 API**：`wallet`

TRON API 方法，触发智能合约函数调用。该方法创建一个交易与 TRON 网络上已部署的智能合约进行交互，允许使用指定参数调用合约函数。

```protobuf
rpc TriggerContract (TriggerSmartContract) returns (TransactionExtention) {}
```
