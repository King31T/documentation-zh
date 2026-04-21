# getAssetIssueById

**支持的 API**：`wallet` `walletsolidity`

TRON API 方法，通过唯一资产 ID 检索 TRC10 代币的详细信息。TRC10 代币是 TRON 的原生资产，无需智能合约即可直接在区块链上发行。

```protobuf
rpc GetAssetIssueById (BytesMessage) returns (AssetIssueContract) {}
```
