# deployContract

**支持的 API**：`wallet`

TRON API 方法，创建一个将新智能合约部署到 TRON 网络的交易。该方法准备包含所有必要参数的部署交易，必须对其进行签名并广播才能完成合约部署。

```protobuf
rpc DeployContract (CreateSmartContract) returns (TransactionExtention) {}
```
