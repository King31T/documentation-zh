# getAccountNet

**支持的 API**：`wallet`

TRON API 方法，检索特定账户的网络资源信息。该方法提供账户带宽使用情况的详细信息，包括免费带宽、冻结带宽和网络资源消耗统计。

```protobuf
rpc GetAccountNet (Account) returns (AccountNetMessage) {}
```
