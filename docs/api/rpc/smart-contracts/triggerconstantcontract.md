# triggerConstantContract

**支持的 API**：`wallet` `walletsolidity`

TRON API 方法，在不消耗能量或带宽的情况下调用常量（只读）智能合约方法。该方法允许查询合约状态和调用 view 函数，无需向区块链广播交易。

```protobuf
rpc TriggerConstantContract (TriggerSmartContract) returns (TransactionExtention) {}
```
