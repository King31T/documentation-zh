# getBlockById

**支持的 API**：`wallet`

TRON API 方法，使用区块 ID（哈希）从 TRON 区块链检索特定区块。该方法允许获取特定区块的详细信息，包括区块头、交易和元数据。

```protobuf
rpc GetBlockById (BytesMessage) returns (Block) {}
```
