# getAssetIssueByAccount

**支持的 API**：`wallet`

TRON API 方法，查询账户发行的 TRC10 代币信息。TRC10 代币是 TRON 的原生资产，无需智能合约即可直接在区块链上发行。

```protobuf
rpc GetAssetIssueByAccount (Account) returns (AssetIssueList) {}
```
