# getAccountResource

**支持的 API**：`wallet`

TRON API 方法，查询账户的资源信息，包括带宽、能量和 TRON Power（投票权）。该端点提供全面的资源指标，用于管理交易成本和网络参与。

```protobuf
rpc GetAccountResource (Account) returns (AccountResourceMessage) {}
```
