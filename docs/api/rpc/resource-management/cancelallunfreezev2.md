# cancelAllUnfreezeV2

**支持的 API**：`wallet`

TRON API 方法，取消账户在 Stake 2.0 机制下的所有解冻操作。允许用户取消待处理的解冻请求，将资源恢复到冻结状态。

```protobuf
rpc CancelAllUnfreezeV2 (CancelAllUnfreezeV2Contract) returns (TransactionExtention) {}
```
