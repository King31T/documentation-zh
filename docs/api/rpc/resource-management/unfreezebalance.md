# unfreezeBalance

**支持的 API**：`wallet`

TRON API 方法，解冻之前为带宽或能量资源冻结的 TRX（已废弃方法）。该方法释放之前冻结的 TRX 代币，使其在锁定期到期后可用于转账。这是旧版解质押机制；对于当前质押模型，请使用 unfreezebalancev2。

```protobuf
rpc UnfreezeBalance (UnfreezeBalanceContract) returns (Transaction) {}
```
