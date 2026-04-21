# listwitnesses

TRON API 方法，检索 TRON 网络上所有见证人（验证者）的完整列表。见证人负责在 TRON 委托权益证明（DPoS）共识机制中进行区块生产和网络治理。

## HTTP 请求

`POST /wallet/listwitnesses`

## 支持的路径

- `/wallet/listwitnesses`
- `/walletsolidity/listwitnesses`

## 参数

该方法不接受任何参数。

## 返回值

- witnesses — 包含所有见证人信息的数组：
  - address — 十六进制格式的见证人地址
  - voteCount — 从 TRX 持有者获得的投票总数
  - pubKey — 用于区块签名和验证的公钥
  - url — 见证人网站或信息 URL
  - totalProduced — 成功生产的区块总数
  - totalMissed — 在分配时隙内错过的区块总数
  - latestBlockNum — 最近生产的区块编号
  - latestSlotNum — 最近分配的区块生产时隙
  - isJobs — 布尔值，表示见证人当前是否在区块生产中处于活跃状态

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/listwitnesses \
  --header 'Content-Type: application/json' \
  --data '{}'
```

### 返回

```json
{
  "witnesses": [
    {
      "address": "<string>",
      "voteCount": 123,
      "pubKey": "<string>",
      "url": "<string>",
      "totalProduced": 123,
      "totalMissed": 123,
      "latestBlockNum": 123,
      "latestSlotNum": 123,
      "isJobs": true
    }
  ]
}
```

## 使用场景

- 显示所有可用见证人，用于投票和治理参与。
- 构建投票界面和治理仪表板。
- 分析见证人绩效指标，包括已生产和错过的区块数。
- 通过追踪活跃见证人及其统计信息监控网络健康状况。
- 创建基于投票和绩效的见证人排名和比较工具。
- 实现需要见证人选择和信息的治理功能。
