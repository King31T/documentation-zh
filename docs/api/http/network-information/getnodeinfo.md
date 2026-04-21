# getnodeinfo

TRON API 方法，用于检索当前 TRON 节点的信息。该方法提供节点版本、配置、网络状态和操作参数的详细信息。

## HTTP 请求

`GET /wallet/getnodeinfo`

## 支持的路径

- `/wallet/getnodeinfo`
- `/walletsolidity/getnodeinfo`

## 参数

该方法不需要任何参数。

## 返回值

- beginSyncNum — 同步开始的区块编号
- block — 当前区块高度信息
- solidityBlock — 当前固化区块高度信息
- currentConnectCount — 当前对等节点连接数
- activeConnectCount — 活跃对等节点连接数
- passiveConnectCount — 被动对等节点连接数
- totalFlow — 总网络流量
- peerInfoList — 已连接对等节点信息列表
- configNodeInfo — 节点配置信息
- machineInfo — 机器和系统信息
- cheatWitnessInfoMap — 被标记为作弊的见证人信息

## 示例

### 请求

```shell
curl --request GET \
  --url https://api.shasta.trongrid.io/wallet/getnodeinfo
```

### 返回

```json
{
  "beginSyncNum": 123,
  "block": "<string>",
  "solidityBlock": "<string>",
  "currentConnectCount": 123,
  "activeConnectCount": 123,
  "passiveConnectCount": 123,
  "totalFlow": 123,
  "peerInfoList": [
    {
      "lastSyncBlock": "<string>",
      "remainNum": 123,
      "lastBlockUpdateTime": 123,
      "syncFlag": true,
      "headBlockTimeWeBothHave": 123,
      "needSyncFromPeer": true,
      "needSyncFromUs": true,
      "host": "<string>",
      "port": 123,
      "nodeId": "<string>"
    }
  ],
  "configNodeInfo": {
    "codeVersion": "<string>",
    "p2pVersion": "<string>",
    "listenPort": 123,
    "discoverEnable": true,
    "activeNodeSize": 123,
    "passiveNodeSize": 123,
    "sendNodeSize": 123,
    "maxConnectCount": 123,
    "sameIpMaxConnectCount": 123,
    "backupListenPort": 123,
    "backupMemberSize": 123,
    "backupPriority": 123,
    "dbVersion": 123,
    "minParticipationRate": 123,
    "supportConstant": true,
    "minTimeRatio": 123,
    "maxTimeRatio": 123,
    "allowCreationOfContracts": 123,
    "allowAdaptiveEnergy": 123
  },
  "machineInfo": {
    "threadCount": 123,
    "deadLockThreadCount": 123,
    "cpuCount": 123,
    "totalMemory": 123,
    "freeMemory": 123,
    "cpuRate": 123,
    "javaVersion": "<string>",
    "osName": "<string>",
    "jvmTotalMemory": 123,
    "jvmFreeMemory": 123,
    "processCpuRate": 123
  },
  "cheatWitnessInfoMap": {}
}
```

## 使用场景

- 监控节点健康状况和同步状态。
- 检查网络连接和对等节点连接情况。
- 收集节点配置和版本信息。
- 调试网络问题和性能监控。
