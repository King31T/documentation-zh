# freezeBalanceV2

**支持的 API**：`wallet`

TRON API 方法，使用新质押机制为资源质押 TRX。该方法冻结 TRX 代币以获取带宽或能量资源，具有更高的灵活性，包括随时解冻资源的能力。

```protobuf
rpc FreezeBalanceV2 (FreezeBalanceV2Contract) returns (TransactionExtention) {}
```
