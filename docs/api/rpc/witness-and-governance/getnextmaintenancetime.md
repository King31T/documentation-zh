# getNextMaintenanceTime

**支持的 API**：`wallet`

TRON API 方法，检索下一个计划维护窗口的时间戳。维护期每 6 小时发生一次，在此期间见证人选举、奖励分配和其他网络治理更新将生效。

```protobuf
rpc GetNextMaintenanceTime (EmptyMessage) returns (NumberMessage) {}
```
