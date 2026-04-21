# unfreezeBalanceV2

**支持的 API**：`wallet`

TRON API 方法，从新质押机制中解质押 TRX。该方法释放之前通过 freezebalancev2 质押的 TRX 代币，启动解质押流程，需等待 14 天后代币才能提取。这是当前推荐的解质押方法。

```protobuf
rpc UnfreezeBalanceV2 (UnfreezeBalanceV2Contract) returns (TransactionExtention) {}
```
