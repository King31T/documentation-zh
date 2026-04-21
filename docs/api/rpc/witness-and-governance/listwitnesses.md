# listWitnesses

**支持的 API**：`wallet` `walletsolidity`

TRON API 方法，检索 TRON 网络上所有见证人（验证者）的完整列表。见证人负责在 TRON 委托权益证明（DPoS）共识机制中进行区块生产和网络治理。

```protobuf
rpc ListWitnesses (EmptyMessage) returns (WitnessList) {}
```
