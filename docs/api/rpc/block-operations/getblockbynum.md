# getBlockByNum

**支持的 API**：`wallet` `walletsolidity`

TRON API 方法，通过编号检索区块。该方法返回 TRON 区块链上特定区块的详细信息，包括该区块内包含的所有交易。

```protobuf
rpc GetBlockByNum (NumberMessage) returns (Block) {}
```
