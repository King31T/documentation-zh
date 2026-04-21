# getAssetIssueListByName

**支持的 API**：`wallet` `walletsolidity`

TRON API 方法，检索与指定名称模式匹配的 TRC10 代币列表。该方法允许按名称搜索代币，适用于发现具有相似或相关名称的资产。

```protobuf
rpc GetAssetIssueListByName (BytesMessage) returns (AssetIssueList) {}
```
