# freezeBalance

**支持的 API**：`wallet`

TRON API 方法，为带宽或能量资源质押 TRX（已废弃方法）。该方法冻结 TRX 代币以获取带宽或能量资源，这些资源是执行交易所必需的。注意：旧版质押在主网已关闭，请使用当前质押方法：wallet/freezebalancev2。

```protobuf
rpc FreezeBalance (FreezeBalanceContract) returns (Transaction) {}
```
