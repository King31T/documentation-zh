# getPendingSize

**支持的 API**：`wallet`

TRON API 方法，返回待处理交易池（mempool）的当前大小。提供网络拥塞和等待处理的未确认交易数量的洞察。

```protobuf
rpc GetPendingSize (EmptyMessage) returns (NumberMessage) {}
```
