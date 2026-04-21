# createWitness

**支持的 API**：`wallet`

TRON API 方法，创建一个将账户注册为 TRON 网络见证人（验证者）的交易。见证人通过委托权益证明（DPoS）共识机制参与区块生产和网络治理。

```protobuf
rpc CreateWitness (WitnessCreateContract) returns (Transaction) {}
```
