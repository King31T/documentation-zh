# getblockbynum

TRON API 方法，用于通过区块编号检索区块。该方法返回 TRON 区块链中特定区块的详细信息，包括该区块中包含的所有交易。

## HTTP 请求

`POST /wallet/getblockbynum`

## 支持的路径

- `/wallet/getblockbynum`
- `/walletsolidity/getblockbynum`

## 参数

- num — 要检索的区块编号（整数）
- visible — 可选布尔值，用于指定地址格式（默认：false 表示十六进制格式）

## 返回值

- blockID — 唯一区块标识符哈希
- block_header — 区块头信息，包含：
  - raw_data — 含时间戳、编号和父哈希的原始头数据
  - witness_signature — 区块生产者签名
- transactions — 区块中的交易对象数组
- visible — 布尔值，表示使用的地址格式

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/getblockbynum \
  --header 'Content-Type: application/json' \
  --data '
{
  "num": 1000,
  "visible": false
}
'
```

### 返回

```json
{
  "blockID": "<string>",
  "block_header": {
    "raw_data": {
      "number": 123,
      "timestamp": 123,
      "parentHash": "<string>"
    },
    "witness_signature": "<string>"
  },
  "transactions": [
    {}
  ],
  "visible": false
}
```

## 使用场景

- 检索特定区块进行区块链分析和监控。
- 访问特定区块内的交易历史。
- 构建区块浏览器和分析工具。
- 为审计目的验证区块数据和交易包含情况。
