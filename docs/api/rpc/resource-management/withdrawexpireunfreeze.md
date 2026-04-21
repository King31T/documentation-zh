# withdrawExpireUnfreeze

**支持的 API**：`wallet`

TRON API 方法，提取已完成解质押等待期的 TRX 代币。该方法允许领取之前通过 unfreezebalancev2 解质押且已过强制 14 天等待期的 TRX，使代币可用于转账。

```protobuf
rpc WithdrawExpireUnfreeze (WithdrawExpireUnfreezeContract) returns (TransactionExtention) {}
```
