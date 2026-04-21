# getbandwidthprices

TRON API 方法，用于检索 TRON 网络上当前的带宽价格，显示交易处理的带宽成本。

## HTTP 请求

`POST /wallet/getbandwidthprices`

## 支持的路径

- `/wallet/getbandwidthprices`
- `/walletsolidity/getbandwidthprices`

## 参数

该方法不需要任何参数。

## 返回值

- prices — 带宽定价信息，包括当前费率和历史数据

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/getbandwidthprices \
  --header 'Content-Type: application/json' \
  --data '{}'
```

## 使用场景

- 监控交易处理的当前带宽成本
- 构建交易费用估算工具
- 通过带宽定价分析网络拥塞情况
- 基于成本优化交易时机
- 创建具有成本意识的交易批处理系统
