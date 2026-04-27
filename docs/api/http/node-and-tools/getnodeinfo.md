# /wallet/getnodeinfo

获取本节点运行状态、版本、内存、磁盘、最新区块、对等节点统计等信息。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetNodeInfoServlet.java`
- Method：`GET` / `POST`
- 别名路径：`/monitor/getnodeinfo`
- 响应处理：servlet 调 `JSON.toJSONString(NodeInfo)` 直接序列化 Java 实体（`common/src/main/java/org/tron/common/entity/NodeInfo.java`），**不走 `JsonFormat`**——字段名以 Java POJO 为准（与 `Tron.proto` 中的 `NodeInfo` proto 不完全一致）。`visible` 不影响响应。
- 支持固化接口：`/walletsolidity/getnodeinfo`

## 请求参数

无。

示例：

```bash
curl http://127.0.0.1:8090/wallet/getnodeinfo
```

## 响应

主要字段：

| 字段 | 类型 | 说明 |
|---|---|---|
| `beginSyncNum` | int64 | 开始同步的区块高度 |
| `block` | string | 当前最新区块（"Num:height,ID:hash"） |
| `solidityBlock` | string | 当前已固化区块 |
| `currentConnectCount` | int32 | 当前对等连接数 |
| `activeConnectCount` | int32 | 主动连接数 |
| `passiveConnectCount` | int32 | 被动连接数 |
| `totalFlow` | int64 | 总流量 |
| `peerList` | repeated PeerInfo | 各 peer 详情 |
| `configNodeInfo` | ConfigNodeInfo | 配置（`codeVersion`、`versionNum`、`p2pVersion`、`listenPort` 等） |
| `machineInfo` | MachineInfo | 机器信息（CPU、内存、磁盘） |
| `cheatWitnessInfoMap` | map<string,string> | SR 作弊统计（key 为见证人 hex 地址，含 `41` 前缀） |

响应示例：

```json
{
  "activeConnectCount": 1,
  "beginSyncNum": 31599800,
  "block": "Num:31600000,ID:0000000001e0e2f8aabb1234567890abcdef1234567890abcdef1234567890ab",
  "solidityBlock": "Num:31599980,ID:0000000001e0e2dc...",
  "currentConnectCount": 22,
  "passiveConnectCount": 21,
  "totalFlow": 12345678,
  "configNodeInfo": {
    "codeVersion": "4.8.0",
    "versionNum": "18636",
    "p2pVersion": "11111",
    "listenPort": 18888,
    "discoverEnable": true
  },
  "machineInfo": {
    "cpuCount": 8,
    "totalMemory": 16777216000,
    "freeMemory": 4096000000
  }
}
```
