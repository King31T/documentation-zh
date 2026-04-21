# getburntrx

TRON API 方法，用于检索已销毁的 TRX 代币信息，显示从流通中永久移除的 TRX 总量。

## HTTP 请求

`POST /wallet/getburntrx`

## 支持的路径

- `/wallet/getburntrx`
- `/walletsolidity/getburntrx`

## 参数

该方法不需要任何参数。

## 返回值

- burnTrxAmount — 已销毁的 TRX 总量（单位：sun）

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/getburntrx \
  --header 'Content-Type: application/json' \
  --data '{}'
```

## 使用场景

- 监控 TRON 网络的通缩机制
- 分析随时间推移的总供应量减少情况
- 构建 TRON 代币经济的经济分析工具
- 创建显示网络销毁统计的仪表板
- 追踪交易费用对 TRX 供应量的影响
