# getPaginatedAssetIssueList

**支持的 API**：`wallet` `walletsolidity`

TRON API 方法，检索 TRON 网络上已发行的所有 TRC10 代币的分页列表。该方法提供高效的分页支持，可在不超载响应的情况下浏览大量代币。

```protobuf
rpc GetPaginatedAssetIssueList (PaginatedMessage) returns (AssetIssueList) {}
```
