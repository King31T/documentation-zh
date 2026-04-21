# gettransactioncountbyblocknum

TRON API 方法，通过区块编号检索特定区块中的交易数量。

## HTTP 请求

`POST /wallet/gettransactioncountbyblocknum`

## 支持的路径

- `/wallet/gettransactioncountbyblocknum`
- `/walletsolidity/gettransactioncountbyblocknum`

## 参数

- num — 要查询交易数量的区块编号

## 返回值

- count — 指定区块中的交易数量

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/gettransactioncountbyblocknum \
  --header 'Content-Type: application/json' \
  --data '
{
  "num": 1000000
}
'
```

### 返回

```json
{
  "count": 123
}
```

## 使用场景

- 快速检查给定区块中包含多少笔交易，无需获取完整交易数据。
- 构建显示每个区块交易数量的区块浏览器。
- 按区块分析网络活动和交易吞吐量。
- 随时间监控区块利用率以进行容量规划。
