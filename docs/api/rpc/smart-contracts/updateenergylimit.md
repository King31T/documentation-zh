# updateEnergyLimit

**支持的 API**：`wallet`

TRON API 方法，更新智能合约的原始能量上限。此设置决定了合约创建者为合约执行提供的最大能量，影响用户调用合约时需要提供的能量数量。

```protobuf
rpc UpdateEnergyLimit (UpdateEnergyLimitContract) returns (TransactionExtention) {}
```
