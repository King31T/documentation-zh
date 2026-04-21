# getpendingsize

TRON API 方法，返回待处理交易池（mempool）的当前大小。这提供了关于网络拥塞情况和等待处理的未确认交易数量的信息。

## HTTP 请求

`GET /wallet/getpendingsize`

## 支持的路径

- `/wallet/getpendingsize`

## 参数

该方法不需要任何参数。它返回待处理交易池的当前大小。

## 返回值

- pendingSize — 表示 mempool 中当前待处理交易数量的数字

## 示例

### 请求

```shell
curl --request GET \
  --url https://api.shasta.trongrid.io/wallet/getpendingsize
```

## 使用场景

- 通过追踪待处理交易数量监控网络拥塞情况。
- 构建显示 mempool 统计数据的网络分析仪表板。
- 根据当前网络负载实施自适应费用策略。
- 为高度网络拥塞时期创建告警。
- 根据 mempool 大小为应用程序优化交易时机。
