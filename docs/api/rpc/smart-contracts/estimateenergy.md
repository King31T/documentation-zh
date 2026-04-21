# estimateEnergy

**支持的 API**：`wallet` `walletsolidity`

TRON API 方法，估算执行智能合约函数调用的能量消耗。该方法有助于在实际执行交易前预测能量成本，从而实现更好的成本规划和用户体验优化。

```protobuf
rpc EstimateEnergy (TriggerSmartContract) returns (EstimateEnergyMessage) {}
```
