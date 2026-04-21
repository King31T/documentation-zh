# getpaginatednowwitnesslist

TRON API 方法，检索当前纪元所有超级代表（SR）的实时投票数，按降序排序，并返回指定范围内的分页列表。

## HTTP 请求

`GET /wallet/getpaginatednowwitnesslist`

## 支持的路径

- `/wallet/getpaginatednowwitnesslist`
- `/walletsolidity/getpaginatednowwitnesslist`

## 参数

- offset — 分页查询的起始位置，必须 >= 0。例如，offset=5 且 limit=10 将返回按投票数排名第 6 至 15 的超级代表
- limit — 返回的结果数量，必须 > 0 且 <= 1000
- visible — 可选布尔值。为 true 时，地址为 base58 格式；为 false 时，地址为十六进制格式。默认为 false。

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
curl --request GET \
  --url 'https://api.shasta.trongrid.io/wallet/getpaginatednowwitnesslist?offset=0&limit=10'
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

- 显示按实时投票数排序的超级代表分页排名。
- 构建展示当前纪元 SR 排名的投票仪表板（支持分页）。
- 分析特定排名范围内的 SR 绩效指标。
- 监控当前纪元实时投票分布变化。
- 为 SR 选举追踪创建排行榜式界面。
