# unfreezeAsset

**支持的 API**：`wallet`

TRON API 方法，创建一个用于解冻在代币创建时已冻结的 TRC10 代币的未签名交易。此操作将冻结的代币释放回代币发行者的可用余额。

```protobuf
rpc UnfreezeAsset (UnfreezeAssetContract) returns (Transaction) {}
```
